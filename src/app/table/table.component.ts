import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

    @Input() tableData;
    @Input() tableColumns;
    @Input() link;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    public nameButton = "Criar novo";
    private data:Array<any> = [];
    menuCollapsed: boolean = false;

  public constructor() {
  }

  public ngOnInit():void {
    this.data = this.tableData;
  }

  public toInt(num: string) {
     return +num;
 }

 public sortByWordLength = (a: any) => {
     return a.city.length;
 }

 toggleFilter(){
   this.menuCollapsed = !this.menuCollapsed;
 }

}
