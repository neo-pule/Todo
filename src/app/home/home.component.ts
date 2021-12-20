import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  task ='neo';
  description = '';
  constructor(private route: Router,public dialog: MatDialog) { }

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
  run(){
    this.route.navigateByUrl('task');
  }
  ngOnInit(): void {
  }

}
