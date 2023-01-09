import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuButtons: any = [
    { id: 'T:1', label: 'Domů', icon: 'home', routeLink: '' },
    { id: 'T:2', label: 'O mně', icon: 'person', routeLink: '' },
    { id: 'T:3', label: 'Oblíbené', icon: 'favorite', routeLink: '' },
  ]

  constructor(private router: Router) {}

  goToHomepage() {
    this.router.navigate(['/list'])
  }
}
