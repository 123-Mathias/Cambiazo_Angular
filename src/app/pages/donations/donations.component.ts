import { Component } from '@angular/core';
import {SearchOngsComponent} from "../../ongs/components/search-ongs/search-ongs.component";
import {FilterOngsComponent} from "../../ongs/components/filter-ongs/filter-ongs.component";

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [
    SearchOngsComponent,
    FilterOngsComponent
  ],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {


}
