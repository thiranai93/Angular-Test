import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { TransferComponent } from './page/transfer/transfer.component';
import { BackupComponent } from './page/backup/backup.component';
import { SettingComponent } from './page/setting/setting.component';
import { ManualComponent } from './page/manual/manual.component';
import { AboutComponent } from './page/about/about.component';
import { UpdateComponent } from './page/update/update.component';
import { InformationComponent } from './page/information/information.component';


const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'information', component: InformationComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'backup', component: BackupComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'about', component: AboutComponent },
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
