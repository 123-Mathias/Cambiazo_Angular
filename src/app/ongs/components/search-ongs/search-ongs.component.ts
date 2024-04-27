import {Component, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MatButton} from "@angular/material/button";

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

  items:any[]=[]

  constructor(private http: HttpClient) {
  }
  ngOnInit() {

    this.http.get(
      "https://662adbcede35f91de15695c4.mockapi.io/cambiazo/ongs").subscribe(
      (res:any)=> {
        this.items = res
        console.log(res)
      },error => console.log(error)
    )
  }

}
