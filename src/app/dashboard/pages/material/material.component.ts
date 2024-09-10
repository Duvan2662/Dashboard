import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatSlideToggleModule,MatIconModule,MatBadgeModule,MatButtonModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

}
