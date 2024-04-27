import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.css'
})
export class MembershipsComponent implements OnInit{

  items: any[] = []

  constructor(private http:HttpClient){
  }


  ngOnInit() {

    this.http.get(
      "https://cambiazodb.github.io/api/memberships.json").subscribe(
      (res:any)=> {
        this.items = res
        console.log(res)
      },error => console.log(error)
    )
  }
}
