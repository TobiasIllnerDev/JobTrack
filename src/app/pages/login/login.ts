import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ThemeService } from '../../services/theme';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  themeService = inject(ThemeService);

  emailAdress = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);

  loginForm = new FormGroup({
    emailAdress: this.emailAdress,
    password: this.password
  });
}
