import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phar-map',
  templateUrl: './phar-map.page.html',
  styleUrls: ['./phar-map.page.scss'],
})
export class PharMapPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  navPop(){
	this.router.navigate(['/']);
  }

}
