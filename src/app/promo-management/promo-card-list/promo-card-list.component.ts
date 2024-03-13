import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-card-list',
  templateUrl: './promo-card-list.component.html',
  styleUrls: ['./promo-card-list.component.scss']
})
export class PromoCardListComponent implements OnInit {
  @Input() promo: any

  constructor() { }

  ngOnInit(): void {
  }

}
