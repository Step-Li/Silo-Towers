import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Indicator } from './indicator';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],  
    providers: [HttpService]
})
export class AppComponent { 
    items: Indicator[] = [];
    private masses: number[] = [1065, 998, 578, 976, 1365, 1143, 856, 956];

    constructor(private httpService: HttpService){};

    ngOnInit() {
        this.httpService.getData().pipe(map(items => {
            //from value to percent
            for(let i = 0; i < items.length; i++) {
                items[i].value = Math.round((items[i].value - items[i].minValue) * 100 / (items[i].maxValue - items[i].minValue));
            };
            return items;
        })).subscribe(indicators => this.items = indicators);
    };

}