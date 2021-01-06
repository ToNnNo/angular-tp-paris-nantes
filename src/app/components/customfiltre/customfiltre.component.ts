import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customfiltre',
  templateUrl: './customfiltre.component.html',
  styleUrls: ['./customfiltre.component.css']
})
export class CustomfiltreComponent implements OnInit {

  users = [
    'Marie', 'Romain', 'Denis', 'Sylvain', 'Fredy', 'Jade',
    'Yosra', 'Ahmed', 'John', 'Jane', 'William', 'Elisabeth',
    'jean'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
