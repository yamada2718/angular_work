import { Component, OnInit } from '@angular/core';
import { FugaService } from '../fuga.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-fuga',
  templateUrl: './fuga.component.html',
  styleUrls: ['./fuga.component.css']
})
export class FugaComponent implements OnInit{
  condition: string = '検索文字列';

  constructor(private fugaService: FugaService) { }

  ngOnInit() {
    this.fugaService.condition = new BehaviorSubject(this.condition);
  }
}
