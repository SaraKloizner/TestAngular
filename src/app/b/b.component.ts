import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  contact: any = {
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
  };

  constructor(public contactservice: ContactService) { }

  ngOnInit(): void {
  }
  addToContacts() {
    this.contactservice.add_contact(this.contact);
  }
  deleteContacts() {
    this.contactservice.contact_list = [];
  }
  resetContacts() {
    this.contactservice.contact_list = this.contactservice.contact_list.slice(0, 1);
  }

}
