import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/mi-prueba', title: 'Prueba', icon: 'face', class: '' },
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Perfil Usuario', icon: 'person', class: '' },
  { path: '/table-list', title: 'Tabla', icon: 'content_paste', class: '' },
  {
    path: '/typography',
    title: 'Tipografía',
    icon: 'library_books',
    class: '',
  },
  { path: '/icons', title: 'Iconos', icon: 'bubble_chart', class: '' },
  { path: '/maps', title: 'Mapas', icon: 'location_on', class: '' },
  {
    path: '/notifications',
    title: 'Notificaciones',
    icon: 'notifications',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
