import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import {Indicator} from '../indicator'

@Injectable({
	providedIn: 'root' 
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const indicators: Indicator[] = [];
		for (let i = 1; i <= 8; i++) {
    		let min = Math.random() * 500 + 500; 
     		indicators.push({
	        	id: `${i}`,
	            title: `Уровень карналита в силосной башне №${i}`,
	            value: Math.round(Math.random() * 1500 + 500),
	            minValue: Math.round(min),
	            maxValue: Math.round(min + Math.random()) * 1000 + 500
	        });
    	}
		return { indicators };
	}
	construcor() {} 
}