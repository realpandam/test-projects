import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from  '../users.service';
import { TestDataService } from '../test-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})

export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sub: any;
  sub2: any;

  list: any = {};
  detail: any = {};
  tag: any = {};

  tableDef: any = [{def: "thumbnail", title: ""}, {def: "title", title: "Nadpis"}, {def: "detail", title: "Úvod"}];
  displayedColumns = ['thumbnail', 'title', 'detail'];
  tableData: any = [];
  dataSource = new MatTableDataSource();

  constructor(private user: UsersService, private data: TestDataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.user.getData().subscribe(data => {
      console.log("user", data);
      let d = JSON.parse(JSON.stringify(data));
      this.list = d.definitions.BlogPost;
      Object.keys(this.list.properties).map((key) => {
        if (key == "title" || key == "detail" || key == "thumbnail") {
          this.tableData.push(this.list.properties[key])
        }
      });
      this.detail = d.definitions.BlogPostDetail;
      this.tag = d.definitions.Tag;
      this.sub2 = this.data.getData().subscribe(data => {
        let d = JSON.parse(JSON.stringify(data));
        this.tableData = d.splice(0, 10);
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.paginator = this.paginator;
        console.log("dataSource", this.dataSource);
      })
      setTimeout(() => {
        console.log("datSoruce", this.dataSource);
        console.log("daTA", this.tableData);
        this.dataSource.paginator = this.paginator
      }, 200);
    })
  }

  goForDetail(row: any) {
    console.log("row", row)
    this.router.navigate(['/detail', row.id]);
  }

  test(event: any) {
    console.log("event", event);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
