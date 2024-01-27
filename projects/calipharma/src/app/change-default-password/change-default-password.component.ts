import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from 'projects/sdk/src/lib/interfaces/user';
import { UserService } from 'projects/sdk/src/lib/services/user.service';
import { Observable } from 'rxjs';
import { ValidatorsService } from '../shared/services/validators.service';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-default-password',
  templateUrl: './change-default-password.component.html',
  styleUrls: ['./change-default-password.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbPopoverModule],
})
export class ChangeDefaultPasswordComponent implements OnInit {
  userInfo$: Observable<User>;
  changePasswordForm = this._formBuilder.group(
    {
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          ValidatorsService.HasLowercaseCharacterValidator,
          ValidatorsService.HasUppercaseCharacterValidator,
          ValidatorsService.HasNumericCharacterValidator,
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          ValidatorsService.HasLowercaseCharacterValidator,
          ValidatorsService.HasUppercaseCharacterValidator,
          ValidatorsService.HasNumericCharacterValidator,
        ],
      ],
    },
    {
      validator: ValidatorsService.PasswordAndConfirmPasswordMatcher(
        'password',
        'confirmPassword'
      ),
    }
  );

  get password(): AbstractControl {
    return this.changePasswordForm.get('password')!;
  }

  get confirmPassword(): AbstractControl {
    return this.changePasswordForm.get('confirmPassword')!;
  }
  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {
    this.userInfo$ = this._userService.userInfo$;
  }

  ngOnInit(): void {}

  logout() {}

  submit() {}
}
