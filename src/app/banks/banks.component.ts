import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  BankList:any = [];
  displayedColumns: string[] = ['bank_id', 'bank_name', 'branch', 'ifsc', 'address', 'city', 'district' ,'state',"favorite"];
  dataSource = new MatTableDataSource<BankModel>(this.BankList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  favoriteData = [];
  selected = 'MUMBAI';
  constructor(private bankService:BankService){}
  
  ngOnInit() {
    this.fetchBankData();
    this.favoriteData = JSON.parse(localStorage.getItem('favorite'));
  }

  async fetchBankData(){
    this.BankList = await this.bankService.getBankData(this.selected)
    this.dataSource = new MatTableDataSource<BankModel>(this.BankList);
    this.dataSource.paginator = this.paginator;
  }

  setFavorite(element){
    let datas = [];
    let data = localStorage.getItem('favorite');
    if(data){
      datas = JSON.parse(data);
      if(datas.filter(d=>element.ifsc == d.ifsc).length != 0){
        datas.forEach((d,index) => {
          if(element.ifsc == d.ifsc){
            datas.splice(index,1);
          }
        });
      }else{
        datas.push(element);
      }
    }else{
      datas.push(element);
    }
    localStorage.setItem("favorite",JSON.stringify(datas));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getData(element){
    let data = JSON.parse(localStorage.getItem('favorite'));
    if(data && data.filter(d=>element.ifsc == d.ifsc).length != 0){
      return "star";
    }else{
      return "star_border"
    }
  }

}

export interface BankModel{
  address: string;
  bank_id: number;
  bank_name: string;
  branch: string;
  city: string;
  district: string;
  ifsc: string;
  state: string;
}