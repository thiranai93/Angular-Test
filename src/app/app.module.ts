import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { MainComponent } from './page/main/main.component';
import { InformationComponent } from './page/information/information.component';
import { TransferComponent } from './page/transfer/transfer.component';
import { BackupComponent } from './page/backup/backup.component';
import { SettingComponent } from './page/setting/setting.component';
import { ManualComponent } from './page/manual/manual.component';
import { AboutComponent } from './page/about/about.component';
import { UpdateComponent } from './page/update/update.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    InformationComponent,
    TransferComponent,
    BackupComponent,
    SettingComponent,
    ManualComponent,
    AboutComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
