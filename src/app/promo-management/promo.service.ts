import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private apollo: Apollo) { }

  getAllPromo() {

  }

  createPromo(payload: any){

  }
}
