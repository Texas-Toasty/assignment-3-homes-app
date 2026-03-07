import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocationInfo[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);
  constructor() {
    //setting housingLocationlist to the data array in HousingService
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
