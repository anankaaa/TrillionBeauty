import { Component, OnInit } from '@angular/core';
import { IMenuItem, ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appName: string = this.config.appName;
  menuItems: IMenuItem[] = this.config.menuItems;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {}
}
