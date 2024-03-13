import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getAllUsers(pagination: { limit: number, page: number }, last_name: string): Observable<any[]> {
    console.log(pagination)
    console.log(last_name)
    const GetAllUsers = gql`
      query GetAllUsers($pagination: PaginationInput, $last_name: String) {
        GetAllUsers(pagination: $pagination, last_name: $last_name) {
          _id
          email
          first_name
          last_name
          civility
          sex
          status
          position
          count_document
        }
      }
    `;

    return this.apollo
      .query<any>({
        query: GetAllUsers,
        variables: {
          pagination: pagination,
          last_name: last_name
        }
      })
      .pipe(map((result) => result.data.GetAllUsers));
  }
}