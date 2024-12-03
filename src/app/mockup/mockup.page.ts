import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.page.html',
  styleUrls: ['./mockup.page.scss'],
})
export class MockupPage  {

  mockup: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.mockup = this.router.getCurrentNavigation()?.extras.state?.['requerimientos'] || {};
  }

}
