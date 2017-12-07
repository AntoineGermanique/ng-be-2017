import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms'
import { ContactsService } from '../contacts.service'
import { map } from 'rxjs/operators'

export function checkEmailAvailability(contactsService: ContactsService) {
  return (c: FormControl)=>{
    return contactsService.isEmailNew(c.value)
      .pipe(map(data => !data.error ? null : { emailTaken: true }))
  }
}

@Directive({
  selector: '[trmEmailAvailabilityValidator][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => EmailAvailabilityValidatorDirective)
  }]
})
export class EmailAvailabilityValidatorDirective {
  private _validate
  constructor(
    private contactService: ContactsService
  ) { 
    this._validate=checkEmailAvailability(contactService)
  }
  
  validate(c:FormControl){
    return this._validate(c);
  }

}
