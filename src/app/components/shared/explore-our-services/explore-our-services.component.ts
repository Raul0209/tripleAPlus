import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-our-services',
  templateUrl: './explore-our-services.component.html',
  styleUrls: ['./explore-our-services.component.scss']
})
export class ExploreOurServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(url){
    this.router.navigateByUrl(url);

  }

}
