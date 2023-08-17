import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/store/auth/models/user.model';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  @Input() error: string | null = '';
  @Output() loginEvent = new EventEmitter<User>();
  constructor(private fb: FormBuilder) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  doLogin(): void {
    this.loginEvent.emit(this.loginForm.value);
  }
}
