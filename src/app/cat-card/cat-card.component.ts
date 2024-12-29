import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Cat } from '../app.component';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  @Input() cat!: Cat;
}
