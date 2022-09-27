import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user!: UserInterface;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  detail(): void {
    this.router.navigate([`detail`], {
      queryParams: {
        id: this.user.id
      }
    })
  }

}
