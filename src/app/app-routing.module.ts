import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundTableComponent } from './sound-table/sound-table.component';
import { SoundPlayerComponent } from './sound-player/sound-player.component';

const routes: Routes = [
  { path: 'table', component: SoundTableComponent },
  { path: 'player', component: SoundPlayerComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
