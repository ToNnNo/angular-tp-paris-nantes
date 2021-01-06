import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  // public (default), protected, private
  name = 'Stéphane';

  product = { name: 'Pomme', price: 12.90 };

  html = '<em>Hello World</em>';

  // cookie (SESSIONID)
  // token

  path = 'assets/images/batman.jpg';

  message: string;

  liste = ['William', 'Elisabeth', 'John', 'Jane', 'Eduard'];

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(): void {
    alert('Bravo !');
  }

  public confirmation(e: MouseEvent): void {
    e.preventDefault();
    confirm('Valider la demander ?');
  }

  public getMessageValue(): void {
    alert(this.message);
  }

}
