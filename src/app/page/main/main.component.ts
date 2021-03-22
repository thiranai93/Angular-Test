import { Component, OnInit } from '@angular/core';
import {  menuResData } from 'src/app/interface/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menu: menuResData;

  menus: menuResData[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenu();
  }
  getMenus() {
    this.menuService.getMenus().subscribe(res => {
    console.log(res)

      this.menu = res[0];
    })
  }
  getMenu() {
    this.menu = this.menuService.getMenu();
    console.log(this.menu)
    if (this.menu === undefined) {
      this.getMenus();
    }
  }

}
