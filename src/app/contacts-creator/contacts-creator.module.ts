import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsMaterialModule } from '../contacts-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsMaterialModule,
    RouterModule,
    SharedModule
  ],
  declarations: [ContactsCreatorComponent]
})
export class ContactsCreatorModule { }
