import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'email',
    'name',
    'first_name',
    'last_name',
    'civility',
    'sex',
    'status',
    'position',
    'count_document',
  ];
  dataSource = new MatTableDataSource<any>();
  searchInput: string = '';
  limit: number = 10;
  page: number = 0;
  isLoadingResults: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.isLoadingResults = true;
    this.userService
      .getAllUsers({ limit: this.limit, page: this.page }, this.searchInput)
      .subscribe({
        next: (users: any[]) => {
          this.dataSource.data = users.map((user, index) => ({
            ...user,
            no: index + 1,
          }));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoadingResults = false;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          this.isLoadingResults = false;
        },
      });
  }

  searchByLastName(): void {
    if (this.searchInput.length >= 3) {
      this.userService.getAllUsers({ limit: this.limit, page: this.page }, this.searchInput)
    }
  }
}
