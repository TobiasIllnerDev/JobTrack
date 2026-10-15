import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {
  emailAdress = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  confirmPassword = new FormControl('',[
    Validators.required,
    Validators.minLength(8)
  ]);

  userName = new FormControl('', [
    Validators.required,
  ]);

  registerForm = new FormGroup({
    userName : this.userName,
    emailAdress : this.emailAdress,
    password : this.password,
    confirmPassword : this.confirmPassword
  });
}
