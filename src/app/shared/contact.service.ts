import { Contact } from './../contacts/model/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private BASE_URL = 'http://localhost:3000/api';
  private ALL_CONTACT_URL = `${this.BASE_URL}\\contact`;
  private UPDATE_CONTACT_URL = `${this.BASE_URL}\\contact\\`;
  private DELETE_CONTACT_URL = `${this.BASE_URL}\\contact\\`;

  constructor(private http: HttpClient) { }

  getAllContactsAPI(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.ALL_CONTACT_URL);
  }

  updateContactAPI(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.UPDATE_CONTACT_URL + contact._id, contact);
  }

  deleteContactAPI(contactId: string): Observable<any> {
    return this.http.delete<any>(this.DELETE_CONTACT_URL + contactId);
  }
}
