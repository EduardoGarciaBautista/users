import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() set user(u: UserInterface | undefined) {
    if (this.form && u) {
      this.form.patchValue({
        name: u.name,
        email: u.email,
        description: u.description,
      })
    }
  }

  public form!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
