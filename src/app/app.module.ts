import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { SoundTableComponent } from './sound-table/sound-table.component';
import { SoundPlayerComponent } from './sound-player/sound-player.component';
import { AppComponent } from './app.component'; // Import the AppComponent

@NgModule({
  declarations: [
    SoundTableComponent,
    SoundPlayerComponent,
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatTableModule,
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {}
