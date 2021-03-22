import { Component, OnInit } from '@angular/core';
import { menuResData } from 'src/app/interface/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

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
