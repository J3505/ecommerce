import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem, PrimeIcons, MessageService} from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { Router } from '@angular/router';




@Component({
  selector: 'app-sidebar',
  imports: [ CommonModule, PanelMenu, BadgeModule, Ripple],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  providers: [MessageService]
})
export class Sidebar {

  constructor( private router: Router) { }
  items: MenuItem[] = [];

  @Input() active: boolean = false;


  ngOnInit(){
    this.items = [
      {
      label: 'Pizzas',
      icon: 'fa-solid fa-pizza-slice',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    },
    {
      label: 'Burgers',
      icon: 'fa-solid fa-burger',
      badge: '8',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    },
    {
      label: 'Piqueo',
      icon: 'fa-solid fa-drumstick-bite',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    },
    {
      label: 'Sopas',
      icon: 'fa-solid fa-bowl-food',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    },
    {
      label: 'Vegano',
      icon: 'fa-solid fa-carrot',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    },
    {
      label: 'Pescado',
      icon: 'fa-solid fa-fish',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    },
    {
      label: 'Postres',
      icon: 'fa-solid fa-ice-cream',
      command: () => {
        this.router.navigate(['/dashboard/list']);
      }
    }
    ];
  }


}
