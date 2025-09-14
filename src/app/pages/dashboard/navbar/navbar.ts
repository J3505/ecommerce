import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { Dialog } from 'primeng/dialog';
import { Cart } from "app/features/cart/cart";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, InputTextModule, AvatarModule, BadgeModule, MenubarModule, Dialog, Cart],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  cantidad = signal(0);
  visible: boolean = false;

  position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

  showDialog(position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
      this.position = position;
      this.visible = true;
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U',
                    },
                ],
            },
        ];
    }
}
