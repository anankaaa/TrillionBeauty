import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'TrillionBeauty';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/' },
    { text: 'Products', link: '/products' },
    { text: 'Contact', link: '/contact' },
  ];

  constructor() {}
}
