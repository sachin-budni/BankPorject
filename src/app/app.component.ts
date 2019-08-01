import { Component , OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankApi';
  // BankList:any = [];
  // displayedColumns: string[] = ['bank_id', 'bank_name', 'branch', 'ifsc', 'address', 'city', 'district' ,'state',"favorite"];
  // dataSource = new MatTableDataSource<BankModel>(this.BankList);

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // selected = 'MUMBAI';
  // constructor(private http:HttpClient){}
  
  // ngOnInit() {
  //   this.fetchBankData();
  // }

  // async changeCity($event){
  //   this.BankList = await (this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=${this.selected}`).toPromise());
  //   console.log(this.BankList)
  //   this.dataSource = new MatTableDataSource<BankModel>(this.BankList);
  //   this.dataSource.paginator = this.paginator;
  // }

  // async fetchBankData(){
  //   this.BankList = await (this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').toPromise());
  //   this.dataSource = new MatTableDataSource<BankModel>(this.BankList);
  //   this.dataSource.paginator = this.paginator;
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}


