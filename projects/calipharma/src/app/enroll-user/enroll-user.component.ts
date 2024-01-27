import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ColumnMode,
  NgxDatatableModule,
  SelectionType,
} from '@swimlane/ngx-datatable';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '../shared/services/validators.service';

@Component({
  selector: 'app-enroll-user',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, FormsModule, ReactiveFormsModule],
  templateUrl: './enroll-user.component.html',
  styleUrls: ['./enroll-user.component.scss'],
})
export class EnrollUserComponent implements OnInit {
  ColumnMode = ColumnMode;
  newUserEnrollmentForm: FormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, ValidatorsService.emailPattern]],
    phoneNo: ['', [Validators.required]],
  });
  private _enrollUerModelRef: NgbModalRef;

  constructor(private _ngbModal: NgbModal, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  openNewUserEnrollModel(enrollUserTemplateRef: TemplateRef<any>) {
    this.newUserEnrollmentForm.reset();
    this._enrollUerModelRef = this._ngbModal.open(enrollUserTemplateRef, {
      size: 'lg',
      centered: true,
    });
  }

  enrollNewUSer() {}
}
