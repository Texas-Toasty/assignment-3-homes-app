import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocationinfo';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
