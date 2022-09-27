import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subject, tap} from "rxjs";
import {FullUser, UserInterface} from "../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  private service = 'https://jsonplaceholder.typicode.com/comments';
  private _users: UserInterface[] = [];

  public detectChanges: Subject<void> = new Subject<void>();

  get users(): UserInterface[] {
    return this._users;
  }

  set users(value: UserInterface[]) {
    this._users = value;
  }

  constructor(private http: HttpClient) {
  }

  public fetchUsers(elements: number = 10): Observable<UserInterface[]> {
    return this.http.get<FullUser[]>(this.service).pipe(
      map(response => response.slice(0, elements).map(user => ({
        name: user.name,
        id: user.id,
        email: user.email,
        description: user.body
      }))),
      tap(data => {
        if (data) {
          this.users = data;
        }
      })
    );
  }

  public add(user: UserInterface): void {
    this.users = [user, ...this.users];
    this.detectChanges.next();
  }

  public delete(userId: number | undefined): void {
    if (!userId) {
      return;
    }
    const userIndex = this.users.findIndex(({id}) => id === userId);
    this.users.splice(userIndex, 1);
    this.detectChanges.next();
  }

  public update(user: UserInterface): void {
    const userIndex = this.users.findIndex(({id}) => id === user.id);
    this.users[userIndex] = {
      ...user
    };
    this.users = [...this.users];
    this.detectChanges.next();
  }
}
