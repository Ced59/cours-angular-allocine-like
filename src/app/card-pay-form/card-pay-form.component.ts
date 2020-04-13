import { Component, OnInit } from '@angular/core';
import {CardPay} from '../card-pay';

@Component({
  selector: 'app-card-pay-form',
  templateUrl: './card-pay-form.component.html',
  styleUrls: ['./card-pay-form.component.css']
})
export class CardPayFormComponent implements OnInit {

  cardTypes = ['Visa', 'MasterCard', 'American Express'];

  model = new CardPay(1234123412341234, this.cardTypes[0], new Date('2020-12-25'), 123);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
