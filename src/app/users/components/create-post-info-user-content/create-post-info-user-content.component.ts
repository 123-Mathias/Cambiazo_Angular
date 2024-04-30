import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import {CountriesService} from "../../services/countries.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-post-info-user-content',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatSlideToggle,
    MatCheckbox,
    NgForOf,
    FormsModule,
    NgIf,
  ],
  templateUrl: './create-post-info-user-content.component.html',
  styleUrl: './create-post-info-user-content.component.css'
})
export class CreatePostInfoUserContentComponent implements OnInit{

  countries: any[]= []
  states: string[]=[]
  cities: string[]=[]

  selectedCountry: string = ''

  constructor(private countriesService: CountriesService) {

  }


  ngOnInit() {
    this.getAllCountries()
  }

  getAllCountries(){
    this.countriesService.getCountries().subscribe((res:any)=>{

        res.data.forEach((e: any) => {
          this.countries.push({name: e.name})
        })

    })

    this.getAllCities()
    this.getAllStates()
    console.log(this.countries)

  }

    getAllCities() {
      this.countriesService.getCities().subscribe((res: any) => {
        res.data.forEach((object_api: any) => {
          this.countries.map(obj_country => {
            if (obj_country.name == object_api.country) {
              obj_country.cities = object_api.cities
            }
          })
        });
      });
    }

  getAllStates() {
    this.countriesService.getStates().subscribe((res: any) => {
      res.data.forEach((object_api: any) => {
        this.countries.map(obj_country => {
          if (obj_country.name == object_api.name) {
            obj_country.states = object_api.states.map((state:any)=> {return state[Object.keys(state)[0]]})
            }
         })

      });
    });
  }


  onCountrySelectionChange(){
    this.cities = ['']
    this.states = ['']
    const selectedCountryObj = this.countries.find(country => country.name === this.selectedCountry);
    this.states = selectedCountryObj.states;
    this.cities = selectedCountryObj.cities;
  }



}
