import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {PostsService} from "../../services/posts.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-feature-posts-content',
  standalone: true,
  imports: [MatCardModule, NgForOf, NgIf, MatButton],
  templateUrl: './feature-posts-content.component.html',
  styleUrl: './feature-posts-content.component.css'
})
export class FeaturePostsContentComponent implements OnInit{
  items:any[]=[]

  constructor(private postsService:PostsService) {
  }
  ngOnInit() {
    this.getAllFeaturePosts()
  }

  getAllFeaturePosts(){
    this.postsService.getProducs().subscribe((res:any)=>{
      this.items = res
    })
  }
}
