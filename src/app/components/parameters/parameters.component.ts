import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;
  page: number;
  lastname$: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // https://login:password@www.dawan.fr/accueil.html?page=1#content

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

    this.lastname$ = this.route.fragment;
  }

  public back(): void {
    this.router.navigateByUrl('/parameters');
  }

}
