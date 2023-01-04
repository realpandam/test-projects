import { Component } from '@angular/core';

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


  testClick() {
    console.log("Proběhlo testovací kliknutí");
  }
}
