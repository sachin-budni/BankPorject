import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BankModel } from '../banks/banks.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteItems = [];
  displayedColumns: string[] = ['bank_id', 'bank_name', 'branch', 'ifsc', 'address', 'city', 'district' ,'state',];
  dataSource = new MatTableDataSource<BankModel>(this.favoriteItems);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    let data = localStorage.getItem('favorite');
    this.favoriteItems = JSON.parse(data);
    if(this.favoriteItems){
      this.dataSource = new MatTableDataSource<BankModel>(this.favoriteItems);
      this.dataSource.paginator = this.paginator;
    }
  }

}
