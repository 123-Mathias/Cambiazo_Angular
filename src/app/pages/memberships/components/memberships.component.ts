import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MembershipsService} from "../services/memberships.service";

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

  constructor(private membershipsService:MembershipsService) {
  }


  ngOnInit() {
    this.getMemberAllMemberships()
  }

  getMemberAllMemberships() {
    this.membershipsService.getMemberShips().subscribe(
      (res:any)=> {
        this.items = res
      },error => console.log(error)
    )
  }
}
