import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '../shared/services/validators.service';
import { LoginService } from '../services/login.service';
import { UserPasswordCredentials } from 'projects/sdk/src/lib/interfaces/user-passwords.credentials';
import { first } from 'rxjs';
import { HOME_PATH } from 'projects/sdk/src/lib/constants/path.names';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
    private _spinnerService: NgxSpinnerService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
        ValidatorsService.emailPattern,
      ]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  onFormSubmit() {
    this.loginForm.markAsPristine();
    const { email, password } = this.loginForm.value;
    const USER_CREDENTIAL: UserPasswordCredentials = {
      email: email!,
      password: password!,
    };
    this._spinnerService.show();
    this._loginService
      .login(USER_CREDENTIAL)
      .pipe(first())
      .subscribe({
        next: (userLoginData) => {
          this._toastrService.success('Welcome to Calipharma');
          void this._router.navigate(['/', HOME_PATH]);
          this._spinnerService.hide();
        },
        error: () => {
          this._toastrService.error(
            'Your Email/Password Combination Is Not Valid',
            'Email/Password Not Valid'
          );
          this._spinnerService.hide();
        },
      });
  }
}
