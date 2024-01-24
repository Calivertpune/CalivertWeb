import { Injectable } from "@angular/core";
import { ValidationErrors, AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidatorsService {
  constructor() {}

  // @ts-ignore
  static emailPattern(emailControl: AbstractControl): ValidationErrors | null {
    const message = {
      customEmailPattern: {
        message: "The email you entered has invalid format",
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
}
