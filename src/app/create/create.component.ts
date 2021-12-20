import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../home/home.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  task = '';
  description = '';
  date = Date;
  flag = false;

  tasks = {
    task : '',
    desc : '',
    time : ''
  };
  obj = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //this.run();
   }

  run() : any {
    console.log('clicked..');
    
    if (this.flag == true){
      this.flag = false;
      return this.flag;
    }
    else{
      this.flag = true;
      return this.flag;
    }
    
  }
  test(){
    // console.log("1."+this.task+"2."+this.description+"3."+this.date);
     //this.obj.push()
    console.log(this.tasks);
  }
  
  ngOnInit(): void {
  }

}
