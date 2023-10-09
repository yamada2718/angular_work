import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { HogeService } from '../hoge.service';
// import { EmployeeDepartment } from '../hoge/hoge-dto';
import { HogeComponent } from '../hoge/hoge.component';

import { FugaService } from '../fuga.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent {
  variable: string = '初期値';
  constructor(private hogeService: HogeService, private fugaService: FugaService, private hogeComponent: HogeComponent) { }

  // search(): void {
  //   // console.log(222);
  //   // console.log(this.dataSource.data);
  //   // console.log(222);
  //   this.hogeService.searchEmployee();
  // }

  search2(): void {
    this.hogeService.searchEmployee2();
  }

  getVariable(): void {
    console.log(this.hogeService.getVariable());
  }

  search(): void {
    this.hogeComponent.search();
    // console.log(this.fugaService.getCondition());
  }

}
