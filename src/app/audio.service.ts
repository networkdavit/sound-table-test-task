import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  playSound(src: string) {
    if (this.audio) {
      this.audio.pause();
    }
    
    this.audio = new Audio(src);
    this.audio.play();
  }

  stopSound() {
    if (this.audio) {
      this.audio.pause();
    }
  }
}
