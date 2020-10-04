import { Component, OnInit } from '@angular/core';
import { Country } from '../_modal/Country';
import {  Router } from '@angular/router';
import { CountryService } from '../_services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Country[];
  continateId: string;
  constructor(private route: ActivatedRoute, private router: Router, private countryService: CountryService  ) { }

  ngOnInit() {
    this.continateId = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe(data => {
      this.countries = data['users']["data"]["countries"];
    });

  }
  back() {
    this.router.navigate(['/home']);
  }
  continateClick(id) {
    this.router.navigate(['/country']);
  }
}
