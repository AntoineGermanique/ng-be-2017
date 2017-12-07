import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirectorDirective } from './email-director.directive';
import { EmailAvailabilityValidatorDirective } from './email-availability-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmailDirectorDirective,
    EmailAvailabilityValidatorDirective
  ],
  exports: [
    EmailDirectorDirective,
    EmailAvailabilityValidatorDirective
  ]
})
export class SharedModule { }
