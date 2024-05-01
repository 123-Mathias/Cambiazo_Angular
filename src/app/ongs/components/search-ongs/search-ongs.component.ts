import {Component, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {OngsService} from "../../services/ongs.service";
import {Ongs} from "../../models/ongs/ongs.model";
@Component({
  selector: 'app-search-ongs',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInputModule,
    MatCardModule,
    NgForOf,
    MatButton
  ],
  templateUrl: './search-ongs.component.html',
  styleUrl: './search-ongs.component.css'
})
export class SearchOngsComponent implements OnInit{

  items:Ongs[]=[]

  constructor(private ongsService:OngsService) {
  }
  ngOnInit() {

    this.ongsService.getOngs().subscribe(
      (res:any)=> {
        this.items = res
      },error => console.log(error)
    )
  }

}
