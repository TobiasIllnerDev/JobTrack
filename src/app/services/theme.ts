import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark' | 'system';

@Injectable({
    providedIn:'root'
})
export class ThemeService {

    constructor() {
        const savedTheme = localStorage.getItem('theme')
        
        if(savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
            this.currentTheme = savedTheme;
            document.documentElement.setAttribute('data-theme', this.currentTheme);
        }

        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        console.log(systemTheme.matches)
    }
    
    currentTheme : Theme = 'system'

    setTheme(theme:Theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme)
    }


}
