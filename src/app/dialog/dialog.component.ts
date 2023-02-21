import { Component, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private backgroundService: BackgroundService) {}

  onClose(): void {
    this.dialogRef.close();
  }

  selectBackground(imageUrl: string): void {
    this.backgroundService.changeBackground(imageUrl);
    this.dialogRef.close(imageUrl);
  }

}
