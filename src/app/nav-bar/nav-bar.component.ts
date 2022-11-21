import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isPonudaActive: boolean = true
  isPreporukaActive: boolean
  isONamaActive: boolean

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateToPonuda() {
    this.changeActivity(1);
    this.router.navigate([''], {relativeTo: this.route});
    return false;
  }

  navigateToPreporuke() {
    this.changeActivity(2);
    this.router.navigate(['preporuke'], {relativeTo: this.route});
    return false;
  }

  navigateToONama() {
    this.changeActivity(3);
    this.router.navigate(['onama'], {relativeTo: this.route});
    return false;
  }

  changeActivity(page: number) {
    switch (page) {
      case 1:
        this.isPonudaActive = true;
        this.isPreporukaActive = false;
        this.isONamaActive = false;
        break;

      case 2:
        this.isPonudaActive = false;
        this.isPreporukaActive = true;
        this.isONamaActive = false;
        break;

      case 3:
        this.isPonudaActive = false;
        this.isPreporukaActive = false;
        this.isONamaActive = true;
        break;

      default:
        this.isPonudaActive = true;
        this.isPreporukaActive = false;
        this.isONamaActive = false;
    }
  }
}

