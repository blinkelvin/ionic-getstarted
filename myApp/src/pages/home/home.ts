import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items:any[];
  iterator = 0

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    this.navCtrl = navCtrl
    this.getDados();
  }

  itemSelected(item){
    this.navCtrl.push(DetailsPage,{item:item});
  }

  detailsSegue(id: number){
    this.navCtrl.push(DetailsPage);
  }

  getDados(){
    this.service.getData(this.iterator).subscribe(
      res => this.items = res,
      error => console.log("Error"),
    )
  }

  getDadosScroll(infiniteScroll){
    this.iterator+=10;
    this.service.getData(this.iterator).subscribe(
      res => this.items = this.items.concat(res),
      error => console.log("Error"),
      infiniteScroll.complete()
    )
  }

}
