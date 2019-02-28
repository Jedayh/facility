import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	wasClicked = false;
	constructor(private router: Router){}


	showIcons(){
		console.log('eto');
		this.wasClicked= !this.wasClicked;
	}
	bus(){
		this.router.navigate(['/bus-map']);
	}
	pharmatie(){
		this.router.navigate(['/phar-map']);
	}
}
