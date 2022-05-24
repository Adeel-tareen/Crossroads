import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-data',
  templateUrl: './row-data.component.html',
  styleUrls: ['./row-data.component.css']
})
export class RowDataComponent implements OnInit {
  @Input() commit: any;
  constructor() { }

  ngOnInit(): void {
  }

}
