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

  openRow(index){
    let lines = document.getElementsByClassName('item_' + index + ' desactive-row');
    var elements = Array.from(lines);
    if (elements.length == 0){
      let lines = document.getElementsByClassName('item_' + index + ' active-row');
      var elements = Array.from(lines);
      for (let item of elements) {
        item.setAttribute("class", 'item_' + index + ' desactive-row' );
      }
    }else{
      for (let item of elements) {
        item.setAttribute("class", 'item_' + index + ' active-row');
      }
    }

  }

}
