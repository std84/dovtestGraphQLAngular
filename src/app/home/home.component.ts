import { Component, OnInit } from '@angular/core';
import { Continate } from '../_modal/continate';
import { ContinateService } from '../_services/continate.service';
import {  Router } from '@angular/router';
import { resetComponentState } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  continate: Continate[];
  tmpobj: Continate;
  constructor(private router: Router, private continateService: ContinateService  ) { }

  ngOnInit() {

    this.continateService.getContinate()
    .subscribe((res) => {

        this.continate = res["data"].continents;
    });
  }
  continateClick(id) {

    this.router.navigate(['/country/' + id]);
  }

}
