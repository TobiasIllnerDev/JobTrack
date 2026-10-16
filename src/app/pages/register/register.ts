import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { ThemeService } from '../../services/theme';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {

  themeService = inject(ThemeService);
  
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
  },
  {
    validators: passwordMatchValidator
  }
  );
}

function passwordMatchValidator(
  control: AbstractControl
): ValidationErrors | null {

  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }

  return null;
}
