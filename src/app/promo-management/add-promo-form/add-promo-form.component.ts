import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-add-promo-form',
  templateUrl: './add-promo-form.component.html',
  styleUrls: ['./add-promo-form.component.scss']
})
export class AddPromoFormComponent implements OnInit {
  private subs = new SubSink();

  constructor(
    private fb: FormBuilder,
    private promoService: PromoService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

  }

  createPromo() {
    
  }

}
