import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: Theme = 'light';

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.currentTheme = savedTheme;
    }

    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  setTheme(theme: Theme) {
    this.currentTheme = theme;

    document.documentElement.setAttribute('data-theme', this.currentTheme);

    localStorage.setItem('theme', this.currentTheme);
  }
}