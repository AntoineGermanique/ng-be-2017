import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Contact } from '../../models/contact'

import { ContactsService } from '../../contacts.service'


@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  constructor(
    private router: Router,
    private contactService: ContactsService
  ) { }

  ngOnInit() {
  }
  submit(contact: Contact){
    this.contactService.addContact(contact).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }


}
