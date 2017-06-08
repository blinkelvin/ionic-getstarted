import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

import { ServiceProvider } from '../../providers/service/service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    items: any[];
    iterator = 0

    constructor(public navCtrl: NavController, public service: ServiceProvider) {
        this.navCtrl = navCtrl
        this.getCharacters(null);
    }

    itemSelected(item) {
        this.navCtrl.push(DetailsPage, { item: item });
    }

    detailsSegue(id: number) {
        this.navCtrl.push(DetailsPage);
    }

    getCharacters(infiniteScroll):Promise<any> {
        return new Promise<boolean>((result) =>{
            if (infiniteScroll == null) {
                this.service.getCharacters(this.iterator).subscribe(
                    res => {this.items = res; result()},
                    error => error(),
                )
            } else {
                this.iterator += 10;
                this.service.getCharacters(this.iterator).subscribe(
                    res => {this.items = this.items.concat(res); result()},
                    error => console.log(error),
                    infiniteScroll.complete()
                );
            }
        })
    }

}
