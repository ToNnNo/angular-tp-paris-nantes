import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  public static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const regexp = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');

      if ( !regexp.test(control.value) ) {
        // La valeur du map qui est retourné doit être un équivalent de true
        return { error_email: 'invalid' };
      }

      return null;
    };
  }

  public static matchPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if ( control.get('password').value !== control.get('confirm').value ) {

        // associe l'erreur au champs "confirm"
        // control.get('confirm').setErrors( { error_match_password: true } );

        // associe l'erreur au formGroup
        return { error_match_password: true };
      }

      return null;
    };
  }

}
