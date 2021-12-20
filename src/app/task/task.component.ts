import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';

export interface DialogData {
  id: number;
  task: string;
  date: Date,
  time : string;
  detail: string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task ='neo';
  description = '';
  
  constructor(public dialog: MatDialog) { }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  run(){

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      height: '400px',
      width: '300px',
      data: {task: this.task, detail: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.task = result;
    });
  }

  ngOnInit(): void {
  }

}
