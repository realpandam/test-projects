import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TestDataService } from '../test-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})

export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  sub: any;
  sub2: any;

  tagValue: any;
  tags: any = [{ value: 'fashion', label: 'Móda' }, { value: 'cooking', label: 'Vaření' }, { value: 'technology', label: 'Technologie' }, { value: 'gardening', label: 'Zahradnictví' }]
  activeFilters: any = [];

  list: any = {};
  detail: any = {};
  tag: any = {};

  tableDef: any = [{ def: "thumbnail", title: "" }, { def: "title", title: "Nadpis" }, { def: "detail", title: "Úvod" }];
  displayedColumns = ['thumbnail', 'title', 'detail'];
  tableData: any = [];
  dataSource = new MatTableDataSource();

  constructor(private service: TestDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.service.getOpenAPI().subscribe(data => {
      let d = JSON.parse(JSON.stringify(data));
      this.list = d.definitions.BlogPost;
      /*Object.keys(this.list.properties).map((key) => {
        if (key == "title" || key == "detail" || key == "thumbnail") {
          this.tableData.push(this.list.properties[key])
        }
      });*/
      this.detail = d.definitions.BlogPostDetail;
      this.tag = d.definitions.Tag;
    })
    this.sub2 = this.service.getJSONData().subscribe(data => {
      let d = JSON.parse(JSON.stringify(data));
      this.tableData = d.splice(0, 10);
      this._copyTable = this.tableData;
      for (let index = 0; index < this.tableData.length; index++) {
        let num = Math.floor(Math.random() * 4);
        //this.tableData[index]['tags'] = this.tags[num].value;     //pro jeden štítek na detailu
        this.tableData[index]['tags'] = [];
        this.tableData[index]['tags'].push(this.tags[num].value); //pro více štítku na jednom detailu
        
        /*přidání druhého štítku -> pro filter*/
        if (index > 4) {
          let num2 = Math.floor(Math.random() * 4);
          if (this.tableData[index]['tags'][0] != this.tags[num2].value) this.tableData[index]['tags'].push(this.tags[num2].value);
        }
      }
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
    })
  }


  goToDetail(row: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        row: row,
      }
    };
    this.router.navigate(['/detail', row.id], navigationExtras);
  }

  _copyTable: any = [];
  tagClick(value: boolean, tag: string) {
    if (value == true) {
      this.activeFilters.push(tag);
    } else {
      this.activeFilters = this.activeFilters.filter((filter: string) => filter != tag);
    }
    let newTable: any = [];
    if (this.activeFilters.length > 0) {
      this.activeFilters.forEach((filter: string) => {
        this._copyTable.filter((e: any) => {
          if (this.activeFilters.length == 1) {
            if (e.tags[0] == filter) {
              newTable.push(e);
            }
          } else {
            e.tags.forEach((x: string) => {
              if (x == filter) {
                newTable.push(e);
              }
            });
          }
        });
      });
      this.tableData = newTable;
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
    } else {
      this.tableData = this._copyTable;
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
