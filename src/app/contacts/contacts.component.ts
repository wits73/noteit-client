import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact;
  editMode = true;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContactsAPI().subscribe(
      res => {
        this.contacts = res;
        this.selectedContact = this.contacts[0];
        // console.log(this.selectedContact);
      },
      err => {
        alert('An error has occurred');
      }
    );
  }

  updateContact (contact: Contact) {
    this.contactService.updateContactAPI(contact).subscribe(
      res => {
        this.toggleEditMode();
      },
      err => {
        alert('An error has occurred while saving the contact');
      }
    );
  }

  deleteContact (contactId: string) {
    this.contactService.deleteContactAPI(contactId).subscribe(
      res => {
        this.toggleEditMode();
        this.contacts = this.contacts.filter(elem => elem._id !== contactId);
        this.selectContact(this.contacts[0]);
        console.log(this.contacts);
      },
      err => {
        alert('An error has occurred while deleting the contact');
      }
    );
  }

  selectContact (contact: Contact) {
    this.selectedContact = contact;
    // console.log(this.selectedContact);
  }

  toggleEditMode () {
    this.editMode = !this.editMode;
  }

}
