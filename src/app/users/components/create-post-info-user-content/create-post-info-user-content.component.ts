import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatCheckbox} from "@angular/material/checkbox";

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
  ],
  templateUrl: './create-post-info-user-content.component.html',
  styleUrl: './create-post-info-user-content.component.css'
})
export class CreatePostInfoUserContentComponent {

}
