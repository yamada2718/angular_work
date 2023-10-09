import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { HogeService } from '../hoge.service';
import { Employee } from './hoge-dto';
import { SearchCondition } from './hoge-dto';
import { BehaviorSubject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.css']
})
export class HogeComponent implements OnInit, AfterViewInit {

  constructor(private hogeService: HogeService) {
    let hoge: Employee[] = [];
    for (let i = 0; i < 30; i++) {
      let j = i + 1;
      let hogeObject = <Employee>{ employeeId: j, employeeName: `hogehoge${j}` };
      hoge.push(hogeObject);
    }
    this.dataSource = new MatTableDataSource(hoge);
    this.dataSource.sortingDataAccessor = (
      item: Employee,
      header: string
    ) => {
      switch (header) {
        case "name":
          return item.employeeName;
        case "id":
          return item.employeeId;
        default:
          return 0;
      }
    };
  }
  employeeList: Array<Employee> = [];
  departmentList: Array<Department> = [];
  searchId: string = "";
  searchName: string = "";
  searchFromDate: string = "";
  searchToDate: string = "";
  panelOpenState = false;
  // displayedColumns: string[] = ['select', 'id', 'name', 'department', 'birthday'];
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Employee>();
  selection = new SelectionModel<EmployeeDepartment>(true, []);
  searchDepartmentIndex = "0";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * 初期処理
   */
  ngOnInit(): void {

    // this.hogeService.homeInit().subscribe(
    //   result => {
    //     // console.log(20000);
    //     // console.log(20000);
    //     // console.log(result);
    //     // this.dataSource.data = result.employeeList;
    //     this.dataSource.data = result;
    //     // console.log(JSON.stringify(this.dataSource.data))
    //   }
    // )
    // this.hogeService.dataSource = this.dataSource;
    // this.hogeService.searchId = new BehaviorSubject(this.searchId);
  }

  // ページャーの追加
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  search(): void {
    alert(22);
    // 検索パラメータ作成
    let searchCondition: SearchCondition = new SearchCondition();

    searchCondition.id = Number(this.searchId);
    searchCondition.name = this.searchName;
    searchCondition.fromDate = this.searchFromDate;
    searchCondition.toDate = this.searchToDate;
    searchCondition.departmentId = Number(this.searchDepartmentIndex);
    // console.log(2222)
    // console.log(searchCondition);
    // console.log(2222)

    this.hogeService.searchEmployee(searchCondition).subscribe(
      result => {
        // データソースのデータ部分を書き換える
        this.dataSource.data = result;
      }
    )
  }

  // フィルター機能
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/**
 * 部署
 */
export class Department {
  id!: number;
  name!: string;
}

/**
 * 検索結果格納用
 */
export class EmployeeDepartment {
  employeeId!: number;
  employeeName!: string;
  departmentName!: string;
  birthday!: string;
}

