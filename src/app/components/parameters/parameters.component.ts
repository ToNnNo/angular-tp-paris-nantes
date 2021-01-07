import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;
  page: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // paramMap -> Object ParamMap
    // params   -> Array
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.has('name') ) {
        this.name = params.get('name');
      }
    });

    // page.html?page=1&id=133 (queryString)
    this.route.queryParamMap.subscribe( (queryParams: ParamMap ) => {
      this.page = (queryParams.has('page')) ? +queryParams.get('page') : 1;
    });
  }

}
