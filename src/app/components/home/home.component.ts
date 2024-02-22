import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutMeCardComponent } from "../about-me-card/about-me-card.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, AboutMeCardComponent, ProjectsComponent, SocialMediaComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  download() {

  }
}
