import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private soundRecordings = [
    { id: 1, name: 'Sound 1', fileName: 'first.mp3' },
    { id: 2, name: 'Sound 2', fileName: 'second.mp3' },
    { id: 3, name: 'Sound 3', fileName: 'third.mp3' },
  ];

  getSoundRecordings() {
    return this.soundRecordings;
  }
}
