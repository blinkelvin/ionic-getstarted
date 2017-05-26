import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items:String[];

  constructor(public navCtrl: NavController) {
    this.items = ["Teste", "Teste2"];  
  }

}
