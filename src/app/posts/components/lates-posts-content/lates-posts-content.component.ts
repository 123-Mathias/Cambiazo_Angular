import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import { CommonModule } from '@angular/common';
import {FeaturePostsContentComponent} from "../feature-posts-content/feature-posts-content.component";

@Component({
  selector: 'app-lates-posts-content',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    FeaturePostsContentComponent
  ],
  templateUrl: './lates-posts-content.component.html',
  styleUrl: './lates-posts-content.component.css'
})
export class LatesPostsContentComponent {
  items:number[]= [1,2,3,4,2,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,2]
}
