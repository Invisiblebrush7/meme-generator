import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required, Validators.minLength(6)]],
      terms: [true, Validators.requiredTrue],
    });
  }
  ngOnInit(): void {}

  crearUsuario() {
    const datos = this.signUpForm.getRawValue;
    if (this.signUpForm.valid) {
      console.log('Estos son los datos a enviar', datos);
    }
  }
}
