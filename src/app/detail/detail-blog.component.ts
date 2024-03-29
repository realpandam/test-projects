import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLinkActive } from '@angular/router';
import { TestDataService } from '../test-data.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})

export class DetailComponent {
  sub: any;
  sub2: any;

  tags: any = [{ value: 'fashion', label: 'Móda' }, { value: 'cooking', label: 'Vaření' }, { value: 'technology', label: 'Technologie' }, { value: 'gardening', label: 'Zahradnictví' }];

  pageId: any;
  detailData: any = {};

  constructor(private service: TestDataService, public router: Router, public route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      row: any,
    };
    if (state != undefined) {
      this.detailData = state.row;
    } else {
      console.log("undefined row(id) -> list")
      this.router.navigate(['/list']);
    }
  }

  goToDetail(x: string) {
    if (x == 'next') {
      let id = +this.pageId + 1;
      this.router.navigate(['/detail', id]); //navigationExtras
    } else if (x == 'prev') {
      let id = +this.pageId - 1;
      this.router.navigate(['/detail', id]);
    }
  }

  ngOnInit() {
    this.pageId = this.route.snapshot.paramMap.get('id');
  }

}
