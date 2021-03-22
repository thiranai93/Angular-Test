import { Component, OnInit } from '@angular/core';
import { menuResData } from 'src/app/interface/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  menu :menuResData;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.menu = this.menuService.getMenu()
    console.log(this.menu)
  }
}
