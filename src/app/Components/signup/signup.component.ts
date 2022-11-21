import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    signUpForm!: FormGroup;
    constructor(private fb: FormBuilder){

    }

    ngOnInit() {
      this.signUpForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    onSignUp(){
      if(this.signUpForm.valid){
        // deu bom - envia pro db
        console.log(this.signUpForm.value)
      } else {
        console.log('deu ruim no signUp')
        this.validateAllFormFields(this.signUpForm)
        alert("Preenchimento dos campos invalido")
      }
    }

    private validateAllFormFields(formGroup: FormGroup){
      Object.keys(formGroup.controls).forEach(field => {

        const control = formGroup.get(field);
        
        if (control instanceof FormControl){
          control.markAsDirty({onlySelf: true})

        } else if(control instanceof FormGroup){
          this.validateAllFormFields(control)
        }
      })
    }
}
