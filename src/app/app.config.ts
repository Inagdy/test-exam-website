import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import {  provideClientHydration } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext'; 
import { InputIconModule } from 'primeng/inputicon'; 


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch()),InputTextModule ,InputIconModule],
};
