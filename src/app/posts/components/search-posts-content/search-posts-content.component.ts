import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatChip, MatChipOption, MatChipSet} from "@angular/material/chips";
import {PostsService} from "../../services/posts.service";
import {NgForOf} from "@angular/common";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-search-posts-content',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatChip, MatChipSet, NgForOf, MatChipOption],
  templateUrl: './search-posts-content.component.html',
  styleUrl: './search-posts-content.component.css'
})
export class SearchPostsContentComponent implements OnInit{

  color: ThemePalette
  categories: any[] = [];
  constructor(private postsService:PostsService) {
  }

  ngOnInit() {
    this.getAllProductsCategories()
  }

  getAllProductsCategories(){
    this.postsService.getCategoriesProducts().subscribe((response:any)=>{
      this.categories = response
      console.log(this.categories)
    })
  }


}
