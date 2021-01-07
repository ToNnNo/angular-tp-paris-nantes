import { Component, OnInit } from '@angular/core';
import { Rot13Service } from '../../services/rot13/rot13.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  /*private toto: string;

  constructor(toto: string) {
    this.toto = toto;
  }

  équivaut à

  constructor( private toto: string) { }*/

  message: string;
  crypted: string;

  constructor(private rot13: Rot13Service) {}

  ngOnInit(): void {
  }

  public crypter(): void {
    this.crypted = this.rot13.encode(this.message);
  }

}
