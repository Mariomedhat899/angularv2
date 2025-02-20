import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { log } from 'console';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private readonly fb = inject(FormBuilder);

  private readonly authService = inject(AuthService);

  authform = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$')]],
    rePassword: [null, [Validators.required]]
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const rePassword = control.get('rePassword')?.value;

    return password === rePassword ? null : { mismatch: true };
  }

  ngOnInit() {
    this.authform.valueChanges.subscribe(() => {
      this.authform.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    });
  }

  submitForm() {
    if(this.authform.valid){

      console.log(this.authform.value)

      this.authService.register(this.authform.value).subscribe({
        next: (res)=>{

          console.log(res);
          
        },
        error: (err)=>{
          console.log(err);
          
        }
      })
    }else{
      this.authform.markAllAsTouched();
    }
    
    
  }
}

