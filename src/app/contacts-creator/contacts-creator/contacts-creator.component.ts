import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Contact } from '../../models/contact'

import { ContactsService } from '../../contacts.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { checkEmailAvailability, validateEmail } from '../../shared/'
import { FormArray } from '@angular/forms/src/model';
@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {
  form: FormGroup
  model = {}
  constructor(
    private router: Router,
    private contactService: ContactsService,
    private formBuilder: FormBuilder
  ) { }
  addPhone() {
    const control = <FormArray>this.form.get('phone')
    control.push(new FormControl())
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [
        '', [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        validateEmail,
        checkEmailAvailability(this.contactService)
      ],
      phone: this.formBuilder.array(['']),
      address: this.formBuilder.group({
        city: ''
      })
    })
  }
  submit(contact: Contact) {
    this.contactService.addContact(contact).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
