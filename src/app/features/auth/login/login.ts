import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
  ],
  template: `
    <div
      class="bg-surface-50 flex items-center  justify-center min-h-screen min-w-screen overflow-hidden"
      style="background-image: url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?_gl=1*1fe611n*_ga*MjQ3NTc2NjA5LjE3NTc4ODI1OTM.*_ga_8JE65Q40S6*czE3NTc4ODI1OTIkbzEkZzEkdDE3NTc4ODI2NjAkajU3JGwwJGgw'); background-size: cover; background-position: center;"
    >
      <div class="flex flex-col items-center justify-center ">
        <div
          style=" border-radius: 56px;padding: 0.3rem"
          class="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-8 shadow-lg"
        >
          <div class="w-full bg-surface-0  py-20 px-8 sm:px-20" style="border-radius: 53px">
            <div class="text-center mb-8">
              <div class="text-surface-900 text-3xl font-medium mb-4">Bienvenido al sistema</div>
              <span class="text-muted-color font-medium">Inicia sesión para continuar</span>
            </div>

            <div>
              <label for="email1" class="block text-surface-900 text-xl font-medium mb-2"
                >correo</label
              >
              <input
                pInputText
                id="email1"
                type="text"
                placeholder="Ingresa tu correo"
                class="w-full md:w-120 mb-8"
                [(ngModel)]="email"
              />

              <label for="password1" class="block text-surface-900 font-medium text-xl mb-2"
                >Contraseña</label
              >
              <p-password
                id="password1"
                [(ngModel)]="password"
                placeholder="Contraseña"
                [toggleMask]="true"
                class="mb-4"
                [fluid]="true"
                [feedback]="false"
              ></p-password>

              <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                <div class="flex items-center">
                  <p-checkbox
                    [(ngModel)]="checked"
                    id="rememberme1"
                    binary
                    class="mr-2"
                  ></p-checkbox>
                  <label for="rememberme1">Recuérdame</label>
                </div>
                <a routerLink="/register" class="ml-auto">
                  <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary"
                    >¿No tienes una cuenta? Regístrate</span
                  >
                </a>
              </div>
              <p-button
                label="Iniciar sesión"
                styleClass="w-full"
                severity="warn"
                routerLink="/dashboard/list"
              ></p-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Login {
  email: string = '';
  password: string = '';
  checked: boolean = false;
}
