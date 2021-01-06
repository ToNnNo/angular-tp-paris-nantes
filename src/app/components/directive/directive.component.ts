import { Component, OnInit } from '@angular/core';
import { Plural } from '@angular/common';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  shown = true;
  mode: string;

  state = 'success';  // pending, cancel, success

  progress = 0;
  bgcolor: string;

  nb = 10;

  constructor() { }

  ngOnInit(): void {
  }

  public lorem(bool: boolean): string {
    if (bool) {
      return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    }

    return null;
  }

}
