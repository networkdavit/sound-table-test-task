import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundTableComponent } from './sound-table/sound-table.component';

const routes: Routes = [
  { path: '', component: SoundTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
