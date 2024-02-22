import { Component } from '@angular/core';
import { AboutMeCardComponent } from "../about-me-card/about-me-card.component";
import { ProjectsComponent } from "../projects/projects.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterOutlet, AboutMeCardComponent, ProjectsComponent  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor() {
  }

  toggleDarkTheme() {

    document.body.classList.toggle('dark-theme');

  }
}
