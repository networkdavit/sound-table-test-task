import { Component, ViewChild, AfterViewInit,ChangeDetectorRef  } from '@angular/core';
import { SoundService } from '../sound.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-sound-table',
  templateUrl: './sound-table.component.html',
  styleUrls: ['./sound-table.component.css'],
  providers: [AudioService]
})
export class SoundTableComponent implements AfterViewInit {
  soundRecordings = this.soundService.getSoundRecordings();
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'fileName', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectedSound: string | null = null;
  showPlayer: boolean = false; 

  constructor(private soundService: SoundService, private cdr: ChangeDetectorRef , private audioService: AudioService) {}

  ngAfterViewInit() {
    this.dataSource.data = this.soundRecordings;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  togglePlayer(fileName: string) {
    this.audioService.stopSound();
    this.selectedSound = `/assets/mp3_files/${fileName}`;
    this.showPlayer = true;
    console.log(this.selectedSound);
    this.cdr.detectChanges(); 
  }
  
}
