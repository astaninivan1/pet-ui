import { Component, OnInit } from '@angular/core';
import {menuAnimation} from './menu.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [menuAnimation]
})
export class MenuComponent implements OnInit {
  public open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
