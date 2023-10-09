import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Employee, SearchCondition } from './hoge/hoge-dto';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDepartment } from './hoge/hoge.component';

@Injectable({
  providedIn: 'root'
})
export class HogeService {

  // searchId!: Subject<string>;
  searchId!: BehaviorSubject<string>;
  dataSource!: MatTableDataSource<Employee>;

  constructor() {
  }

  // constructor(private http: HttpClient) { }

  private api: string = '/api'

  private httpOptions: any = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: null
  };

  /**
   * 初期化
   */
  homeInit(): Observable<Employee[]> {
    let hoge: Employee[] = [];
    for (let i = 0; i < 30; i++) {
      let j = i + 1;
      let hogeObject = <Employee>{ employeeId: j, employeeName: `hogehoge${j}` };
      hoge.push(hogeObject);
    }
    // let hoge:
    // let hoge = { 'id': 1, 'name': 'hogehoge' };
    return of(hoge);
    // return of([]);
  }

  searchEmployee(condition: SearchCondition): Observable<Employee[]> {
    let hoge: Employee[] = [];
    for (let i = 0; i < 15; i++) {
      let j = i + 1;
      let hogeObject = <Employee>{ employeeId: j, employeeName: `fugafuga${29 - j}` };
      hoge.push(hogeObject);
    }
    return of(hoge);

    // let hoge: Employee[] = [];
    // let hogeObject: Employee = { employeeId: 2, employeeName: 'fugafuga' };
    // of(hoge).subscribe(result => {
    //   this.dataSource.data = result;
    // });
  }

  searchEmployee2(): void {
    let hoge: Employee[] = [];
    for (let i = 0; i < 20; i++) {
      let j = i + 1;
      let hogeObject = <Employee>{ employeeId: j, employeeName: `piyopiyo${j}` };
      hoge.push(hogeObject);
    }
    of(hoge).subscribe(result => {
      this.dataSource.data = result;
    });


    // let hogeObject: Employee = { employeeId: 4, employeeName: 'hegehege' };
    // let hoge = [hogeObject, hogeObject, hogeObject];
    // of(hoge).subscribe(result => {
    //   this.dataSource.data = result;
    // });
  }

  getVariable(): string {
    let r = '';
    console.log(22);
    this.searchId.subscribe(c => {
      r = c;
      console.log(c);
    })
    console.log(22);
    return r;
  }

}
