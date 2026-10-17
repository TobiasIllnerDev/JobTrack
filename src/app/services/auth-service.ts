import { Injectable, inject } from '@angular/core';
import { SupabaseService } from './supabase';

@Injectable({
    providedIn:'root'
})
export class AuthService {
    supabaseService = inject(SupabaseService);

    async register(email : string, password : string) {
       
    }
}
