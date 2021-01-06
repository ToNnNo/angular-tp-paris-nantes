import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <section class="text-center">
        <h2 class="text-warning">404 - Not Found</h2>
        <p class="lead">Il semble que la page demandé n'existe pas.</p>
        <p>Revenir à la page d'<a routerLink="/">accueil</a></p>
    </section>
  `,
  styles: [
  ]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
