import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  menuResData } from '../interface/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: menuResData;
  constructor(
    private http: HttpClient
  ) { }

  getMenus(): Observable<menuResData[]> {
    return this.http.get<menuResData[]>('/assets/data/menu.json');
  }
  setMenu(menu: menuResData) {
    this.menu = menu;
  }
  getMenu() {
    return this.menu
  }
}
