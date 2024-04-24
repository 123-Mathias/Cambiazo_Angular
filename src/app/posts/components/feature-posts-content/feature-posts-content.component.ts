import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-feature-posts-content',
  standalone: true,
  imports: [MatCardModule, NgForOf],
  templateUrl: './feature-posts-content.component.html',
  styleUrl: './feature-posts-content.component.css'
})
export class FeaturePostsContentComponent {
  items:number[]= [1,2,1,2,1,2,1,2,1,2,1,2]
}
