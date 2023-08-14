import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/store/auth/models/user.model';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<UserLogin>();
  constructor(private fb: FormBuilder) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  doLogin(): void {
    this.loginEvent.emit(this.loginForm.value);
  }
}
