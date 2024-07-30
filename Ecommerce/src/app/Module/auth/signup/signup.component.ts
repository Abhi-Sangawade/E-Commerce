import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../State/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Input() changeTemplate: any;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private store: Store, 
    private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log("login req data", this.loginForm.value);
      this.authService.register(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
