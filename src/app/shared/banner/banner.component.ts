import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('transformMenu', [
      state('start', style({ transform: 'translateX(0)' })),
      state('end', style({ transform: 'translateX(-100%)' })),
      transition('start => end', animate('0.5s')),
      transition('end => start', animate('0.5s'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
