import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number;
  num2: number;
  resultado: number;

  multiplicacion() {
   this.resultado = this.num1 * this.num2;
  }

  suma() {
    this.resultado = this.num1 + this.num2;
  }

  resta() {
  this.resultado = this.num1 - this.num2;
  }

  division() {
  this.resultado = this.num1 / this.num2;
  }

  exponente() {
  this.resultado = Math.pow(this.num1, this.num2);
  }
  
  reinicia() {
    // Reiniciamos las variables
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
  }

}