import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-map',
  templateUrl: './bus-map.page.html',
  styleUrls: ['./bus-map.page.scss'],
})
export class BusMapPage implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  navPop(){
		this.router.navigate(['/']);
  }

}
