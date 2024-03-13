import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const getAllPromo = gql`
  query {
    GetAllPromos {
      _id
      ref
      title
      sub_title
      description
      image_url
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  constructor(private apollo: Apollo) {}

  getAllPromo(): Observable<any[]> {
    return this.apollo
      .watchQuery<any>({query: getAllPromo})
      .valueChanges.pipe(map((result) => result.data.GetAllPromos));
  }

  createPromo(payload: any) {}
}
