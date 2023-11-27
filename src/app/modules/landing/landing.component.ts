import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { BannerComponent } from 'src/app/shared/banner/banner.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrls: ['./landing.component.scss'],
  imports: [MatExpansionModule],
})
export class LandingComponent implements OnInit {
  panelOpenState:any
  constructor(private router: Router,) { }

  ngOnInit() {
  }

}
export class ExpansionOverviewExample {
  panelOpenState = false;
}