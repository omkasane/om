import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterOutlet, HeaderComponent, ProfileComponent, AboutComponent, SkillComponent, ProjectComponent, CertificationsComponent, ContactComponent, RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSticky: boolean = false; // Variable to toggle sticky class
  isMenuOpen: boolean = false; // Variable to toggle the menu visibility

  constructor() {}

  ngOnInit(): void {
    // Ensure that window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  // Listen for scroll events
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Add sticky class if the scroll position is greater than 50px
    this.isSticky = scrollPosition > 50;
  }

  // Toggle menu visibility
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
