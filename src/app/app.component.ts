import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

export interface CatImg {
  src: string;
  alt: string;
}

export interface Cat {
  breed: string;
  name: string;
  image: CatImg;
  content: string;
  actions: string[];
}

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
