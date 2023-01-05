import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { TestDataService } from '../test-data.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})

export class DetailComponent {
  sub: any;
  sub2: any;

  constructor(private user: UsersService, private data: TestDataService) { }

  ngOnInit() {
    this.sub = this.user.getData().subscribe(data => {
      console.log("user", data);
      let d = JSON.parse(JSON.stringify(data));

    })
    this.sub2 = this.data.getData().subscribe(data => {
      console.log("data", data);
      let d = JSON.parse(JSON.stringify(data));

    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
