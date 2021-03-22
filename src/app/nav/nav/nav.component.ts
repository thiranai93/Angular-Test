import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/service/menu.service';
import { Router } from '@angular/router';
import { menuResData } from 'src/app/interface/menu';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menus: menuResData[];
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit() {
    this.getMenus();
  }
  getMenus() {
    this.menuService.getMenus().subscribe(res => {
      this.menus = res;
    })
  }
  onClickMenu(menu) {
    this.menuService.setMenu(menu);
  }
}
