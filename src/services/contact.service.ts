import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact_list: Array<any> = [
    {
      id: 1,
      deliveryFlag: true,
      type: "מבוטח",
      firstName: "ניקיטה",
      lastName: "ג'יין",
      identity: 278545412,
      age: 25,
      address: "אופנהיימר 9 רחובות",
      cellPhone: 525816206,
      email: "NIKITA_JAIN@AMAT.COM"
    },
    {
      id: 2,
      deliveryFlag: false,
      type: "סוכן",
      firstName: "טוביה",
      lastName: "בצקי",
      identity: 433974846,
      age: 25,
      address: "מחנה תל נוף",
      cellPhone: 525452206,
    }
  ]

  constructor() { }

  add_contact(contact: any) {
    this.contact_list.push(contact);
  }

}
