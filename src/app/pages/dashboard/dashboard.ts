import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Sidebar, RouterOutlet],
  template: `
    <div class="bg-gray-100 font-sans">
      <div class="flex h-screen overflow-hidden">
        <!-- Header - Fixed at top -->
        <app-navbar (toggleSidebar)="toggleSidebar()"></app-navbar>
        <!-- Sidebar - Fixed on desktop, slidable on mobile -->
        <app-sidebar [active]="isSidebarActive"></app-sidebar>
        <!-- Main Content with proper spacing -->
        <div class="content-container flex-1 overflow-auto w-full">
          <!-- Content -->
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @media (max-width: 768px) {
        .content-container {
          margin-top: 72px;
        }
      }
      @media (min-width: 769px) {
        .content-container {
          margin-top: 72px;
          margin-left: 16rem;
        }
      }
    `,
  ],
})
export class Dashboard {
  isSidebarActive = true;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
