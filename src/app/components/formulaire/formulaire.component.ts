import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  // product = Model
  product: Product = { name: null, price: null };
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addProduct(form: NgForm): void {

    form.controls.name.markAsTouched();
    form.controls.price.markAsTouched();

    if ( form.valid ) {

      // En Angular le caractère "+" devant une chaine de caractère
      // permet de parser la valeur (parseInt() ou parseFloat())
      this.product.price = +this.product.price.toString().replace(',', '.');

      this.products.push( this.product );
      this.product = { name: null, price: null };

      form.reset();
    }

  }

}
