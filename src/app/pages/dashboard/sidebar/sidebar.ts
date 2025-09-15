import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, PanelMenu, BadgeModule, Ripple],
  template: `
    <div
      [ngClass]="{ active: active }"
      class="sidebar w-64 bg-white rounded-tr-2xl shadow-lg fixed p-2 left-0 top-[72px] md:block"
    >
      <p-panelmenu [model]="items">
        <ng-template #item let-item>
          <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
            <i [class]="item.icon + ' text-primary  group-hover:text-inherit'"></i>
            <span class="ml-2">{{ item.label }}</span>
            @if (item.badge) {
            <p-badge class="ml-auto" [value]="item.badge" />
            } @if (item.shortcut) {
            <span class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
              {{ item.shortcut }}
            </span>
            }
          </a>
        </ng-template>
      </p-panelmenu>
    </div>
  `,
  styles: [
    `
      .sidebar {
        transition: all 0.3s ease;
        height: calc(100vh - 72px);
      }
      @media (max-width: 768px) {
        .sidebar {
          transform: translateX(-100%);
          position: fixed;
          top: 72px;
          left: 0;
          z-index: 50;
          height: calc(100vh - 72px);
        }

        .sidebar.active {
          transform: translateX(0);
        }
      }
    `,
  ],
  providers: [MessageService],
})
export class Sidebar {
  constructor(private router: Router) {}
  items: MenuItem[] = [];

  @Input() active: boolean = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Pizzas',
        icon: 'fa-solid fa-pizza-slice',
        command: () => {
          this.router.navigate(['/dashboard/pizza']);
        },
      },
      {
        label: 'Burgers',
        icon: 'fa-solid fa-burger',
        badge: '8',
        severity: 'warn',
        command: () => {
          this.router.navigate(['/dashboard/list']);
        },
      },
      {
        label: 'Piqueo',
        icon: 'fa-solid fa-drumstick-bite',
        command: () => {
          this.router.navigate(['/dashboard/***']);
        },
      },
      {
        label: 'Sopas',
        icon: 'fa-solid fa-bowl-food',
        command: () => {
          this.router.navigate(['/dashboard/list']);
        },
      },
      {
        label: 'Vegano',
        icon: 'fa-solid fa-carrot',
        command: () => {
          this.router.navigate(['/dashboard/list']);
        },
      },
      {
        label: 'Pescado',
        icon: 'fa-solid fa-fish',
        command: () => {
          this.router.navigate(['/dashboard/list']);
        },
      },
      {
        label: 'Postres',
        icon: 'fa-solid fa-ice-cream',
        command: () => {
          this.router.navigate(['/dashboard/list']);
        },
      },
    ];
  }
}
