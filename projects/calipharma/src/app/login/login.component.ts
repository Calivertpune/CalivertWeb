import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ValidatorsService} from "../shared/services/validators.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: new FormControl<string>("", [
        Validators.required,
        Validators.minLength(8),
        ValidatorsService.emailPattern,
      ]),
      password: new FormControl<string>("", [Validators.required]),
    });
  }

  onFormSubmit() {}


}
