import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';

import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items:any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    this.navCtrl = navCtrl
    this.getDados();
  }

  itemSelected(item){
    this.navCtrl.push(AddEventPage,{item:item});
  }

  addEventSegue(){
    this.navCtrl.push(AddEventPage);
  }

  getDados(){
    this.service.getData().subscribe(
      res => this.items = res,
      error => console.log("Error")
    )
  }

}
