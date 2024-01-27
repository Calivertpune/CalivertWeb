import { Injectable } from '@angular/core';
import {
  ValidationErrors,
  AbstractControl,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  // @ts-ignore
  static emailPattern(emailControl: AbstractControl): ValidationErrors | null {
    const message = {
      customEmailPattern: {
        message: 'The email you entered has invalid format',
      },
    };
    if (emailControl.value != null && emailControl.value.length >= 1) {
      const isValid =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          emailControl.value
        );

      return isValid ? null : message;
    }
  }

  static EnsurePasswordMatch(formGroup: FormGroup) {
    if (
      formGroup?.get('password')?.value ===
      formGroup?.get('confirm_password')?.value
    ) {
      return null;
    } else {
      return {
        passwordMatch: true,
      };
    }
  }

  static HasLowercaseCharacterValidator(formControl: FormControl) {
    if (new RegExp('(?=.*[a-z])').test(formControl.value)) {
      return null;
    } else {
      return {
        hasLowercase: true,
      };
    }
  }

  static HasUppercaseCharacterValidator(formControl: FormControl) {
    if (new RegExp('(?=.*[A-Z])').test(formControl.value)) {
      return null;
    } else {
      return {
        hasUppercase: true,
      };
    }
  }

  static HasNumericCharacterValidator(formControl: FormControl) {
    if (new RegExp('(?=.*[0-9])').test(formControl.value)) {
      return null;
    } else {
      return {
        hasNumber: true,
      };
    }
  }

  static PasswordAndConfirmPasswordMatcher(
    passwordControlName: string,
    confirmPasswordControlName: string
  ) {
    return (formGroup: FormGroup) => {
      const PASSWORD = formGroup.controls[passwordControlName];
      const CONFIRM_PASSWORD = formGroup.controls[confirmPasswordControlName];
      if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
        CONFIRM_PASSWORD.setErrors({ notMatch: true });
      }
    };
  }
}
