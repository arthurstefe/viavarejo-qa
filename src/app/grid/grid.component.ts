import { Component, OnInit } from '@angular/core';

import { ItensGestaoAcessoModel } from '../../models/itens-gestao-acesso.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public TableData = [{
  //     name: 'sdasdasds',
  //     position: 'asasdasda',
  //     office: 'aasdfadfads',
  //     extn: 12345,
  //     startDate: '07/11/2017',
  //     salary: 1234
  //   }, {
  //     name: 'sdasdasds',
  //     position: 'asasdasda',
  //     office: 'aasdfadfads',
  //     extn: 12345,
  //     startDate: '07/11/2017',
  //     salary: 1234
  //   }, {
  //     name: 'sdasdasds',
  //     position: 'asasdasda',
  //     office: 'aasdfadfads',
  //     extn: 12345,
  //     startDate: '07/11/2017',
  //     salary: 1234
  //   }];

  // public rows: Array<any> = [];
  // public columns: Array<any> = [
  //   {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
  //   {
  //     title: 'Position',
  //     name: 'position',
  //     sort: false,
  //     filtering: {filterString: '', placeholder: 'Filter by position'}
  //   },
  //   {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
  //   {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
  //   {title: 'Start date', className: 'text-warning', name: 'startDate'},
  //   {title: 'Salary ($)', name: 'salary'}
  // ];
  // public page: any = 1;
  // public itemsPerPage: any = 10;
  // public maxSize: any = 5;
  // public numPages: any = 1;
  // public length: any = 0;
  // public totalItems: any = 1;

  // public config: any = {
  //   paging: true,
  //   sorting: {columns: this.columns},
  //   filtering: {filterString: ''},
  //   className: ['table-striped', 'table-bordered']
  // };

  // public constructor() {
  //   this.length = this.data.length;
  // }

  // public data: Array<any> = this.TableData;

  // public ngOnInit(): void {
  //   this.onChangeTable(this.config);
  // }

  // public changePage(page: any, data: Array<any> = this.data): Array<any> {
  //   const start = (page.page - 1) * page.itemsPerPage;
  //   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;

  //   console.log(this.data);
  //   return data.slice(start, end);
  // }

  // public changeSort(data: any, config: any): any {
  //   if (!config.sorting) {
  //     return data;
  //   }

  //   const columns = this.config.sorting.columns || [];
  //   let columnName: string = void 0;
  //   let sort: string = void 0;

  //   for (let i = 0; i < columns.length; i++) {
  //     if (columns[i].sort !== '' && columns[i].sort !== false) {
  //       columnName = columns[i].name;
  //       sort = columns[i].sort;
  //     }
  //   }

  //   if (!columnName) {
  //     return data;
  //   }

  //   // simple sorting
  //   return data.sort((previous: any, current: any) => {
  //     if (previous[columnName] > current[columnName]) {
  //       return sort === 'desc' ? -1 : 1;
  //     } else if (previous[columnName] < current[columnName]) {
  //       return sort === 'asc' ? -1 : 1;
  //     }
  //     return 0;
  //   });
  // }

  // public changeFilter(data: any, config: any): any {
  //   let filteredData: Array<any> = data;
  //   this.columns.forEach((column: any) => {
  //     if (column.filtering) {
  //       filteredData = filteredData.filter((item: any) => {
  //         return item[column.name].match(column.filtering.filterString);
  //       });
  //     }
  //   });

  //   if (!config.filtering) {
  //     return filteredData;
  //   }

  //   if (config.filtering.columnName) {
  //     return filteredData.filter((item: any) =>
  //       item[config.filtering.columnName].match(this.config.filtering.filterString));
  //   }

  //   const tempArray: Array<any> = [];
  //   filteredData.forEach((item: any) => {
  //     let flag = false;
  //     this.columns.forEach((column: any) => {
  //       if (item[column.name].toString().match(this.config.filtering.filterString)) {
  //         flag = true;
  //       }
  //     });
  //     if (flag) {
  //       tempArray.push(item);
  //     }
  //   });
  //   filteredData = tempArray;

  //   return filteredData;
  // }

  // public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
  //   if (config.filtering) {
  //     Object.assign(this.config.filtering, config.filtering);
  //   }

  //   if (config.sorting) {
  //     Object.assign(this.config.sorting, config.sorting);
  //   }

  //   const filteredData = this.changeFilter(this.data, this.config);
  //   const sortedData = this.changeSort(filteredData, this.config);
  //   this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  //   this.length = sortedData.length;
  // }

  // public onCellClick(data: any): any {
  //   console.log(data);
  // }

}
