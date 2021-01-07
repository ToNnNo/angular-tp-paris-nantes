import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custom-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirm: FormControl;
  terms: FormControl;

  form: FormGroup;

  passwordLength = 8;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // FormControl( [value], [Validators Sync], [Validators Async] )
    // FormControl presque identique au ngModel

    this.email = new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]);
    this.password = new FormControl(null, { updateOn: 'blur', validators: [
        Validators.required,
        Validators.minLength(this.passwordLength)
      ]});
    this.confirm = new FormControl(null, [ Validators.required ]);
    this.terms = new FormControl(false, [ Validators.requiredTrue ]);

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      confirm: this.confirm,
      terms: this.terms
    }, {
      validators: CustomValidators.matchPassword()
    });

  }

  public signup(): void {

    for ( const key in this.form.controls ) {
      if ( this.form.contains(key) ) {
        this.form.get(key).markAsTouched();
        this.form.get(key).markAsDirty();
      }
    }

    if (this.form.valid) {

      console.log( this.form.value );
      this.form.reset();

    }
  }

  public controlEmail(): string {
    if ( this.email.touched ) {
      if (this.email.getError('required')) {
        return `L'adresse email est obligatoire`;
      }
      if (this.email.getError('error_email')) {
        return `L'adresse email n'est pas valide`;
      }
    }

    return null;
  }

  public controlPassword(): string {
    if ( this.password.touched ) {
      if (this.password.getError('required')) {
        return `Le mot de passe est obligatoire`;
      }
      if (this.password.getError('minlength')) {
        return `Le mot de passe doit contenir au moins ${this.passwordLength} caractères`;
      }
    }

    return null;
  }

  public controlConfirm(): string {
    if ( this.confirm.touched ) {
      if (this.confirm.getError('required')) {
        return `La confirmation est obligatoire`;
      }

      /*if (this.confirm.getError('error_match_password')) {
        return `Le mot de passe et la confirmation sont différents`;
      }*/

      if (this.form.getError('error_match_password')) {
        return `Le mot de passe et la confirmation sont différents`;
      }
    }

    return null;
  }

  public controlTerms(): string {
    if ( this.terms.dirty ) {
      if (this.terms.getError('required')) {
        return `Veuillez valider les CGU`;
      }
    }

    return null;
  }

}
