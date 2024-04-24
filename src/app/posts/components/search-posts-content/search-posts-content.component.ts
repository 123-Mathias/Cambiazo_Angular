import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-search-posts-content',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule],
  templateUrl: './search-posts-content.component.html',
  styleUrl: './search-posts-content.component.css'
})
export class SearchPostsContentComponent {

}
