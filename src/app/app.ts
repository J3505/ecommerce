import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from "./pages/auth/auth";
import { Register } from "./pages/auth/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Auth, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');
}
