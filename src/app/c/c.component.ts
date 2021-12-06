import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {
  isOpen: boolean = false;
  firstname: string;
  lastname: string;
  identity: string;
  address: string;
  age: string;
  cellPhone: string;
  email: string;
  type: string;
  constructor(public contactservice: ContactService) { }

  ngOnInit(): void {
  }

  addNewContact() {
    this.contactservice.add_contact({
      'firstName': this.firstname,
      'lastName': this.lastname,
      'identity': this.identity,
      'address': this.address,
      'age': this.age,
      'cellPhone': this.cellPhone,
      'email': this.email,
      'type': this.type
    })
    console.log(this.firstname);

  }

}
