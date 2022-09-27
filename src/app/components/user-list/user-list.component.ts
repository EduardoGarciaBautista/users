import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserAdminService} from "../../core/services/user-admin.service";
import {UserInterface} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  public userList: UserInterface[] = [];

  constructor(private adminService: UserAdminService,
              private cdr: ChangeDetectorRef) {
    this.adminService.detectChanges.subscribe(() => {
      this.userList = this.adminService.users;
      this.cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.adminService.fetchUsers().subscribe({
      next: (users) => {
        console.log('change')
        this.userList = users;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.log('Error: ', e.message)
      }
    })
  }

}
