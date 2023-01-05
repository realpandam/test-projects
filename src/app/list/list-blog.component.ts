import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from  '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})

export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sub: any;

  list: any = {};
  detail: any = {};
  tag: any = {};

  tableDef: any = [{def: "thumbnail", title: ""}, {def: "title", title: "Nadpis"}, {def: "detail", title: "Úvod"}];
  displayedColumns = ['thumbnail', 'title', 'detail'];
  tableData: any = [];
  dataSource = new MatTableDataSource();

  constructor(private user: UsersService) {}

  ngOnInit() {
    this.sub = this.user.getData().subscribe(data => {
      console.log("data", data);
      let d = JSON.parse(JSON.stringify(data));
      this.list = d.definitions.BlogPost;
      Object.keys(this.list.properties).map((key) => {
        if (key == "title" || key == "detail" || key == "thumbnail") {
          this.tableData.push(this.list.properties[key])
        }
      });
      console.log("??", this.tableData)
      this.detail = d.definitions.BlogPostDetail;
      this.tag = d.definitions.Tag;
    })

    setTimeout(() => {
      console.log("list", this.list);
      this.dataSource = new MatTableDataSource(this.tableData);
      console.log("tableData", this.tableData);
      console.log("tableDef", this.tableDef);
    }, 100)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
