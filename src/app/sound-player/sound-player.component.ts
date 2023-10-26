import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundPlayerComponent {
  @Input() selectedSound: string | null = null;
  @ViewChild('audioPlayer') audioPlayer!: HTMLAudioElement;
  
  
}
