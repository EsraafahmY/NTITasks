import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-editfiles',
  templateUrl: './editfiles.component.html',
  styleUrls: ['./editfiles.component.css']
})
export class EditfilesComponent implements OnInit {

  file:any =null
  uploadTitle:any
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }
  handleFile(ev:any){
    this.file = ev.target.files
    this.uploadTitle = ev.target.files[0].name
    console.log(ev.target.files)
  }
  upFile(x:any){
console.log(x);
if(this.file!=null){
  let formData = new FormData()
  formData.append('files', this.file[0])
  this._global.updateFileUser(formData).subscribe(data=>console.log(data))
}


  }

//   updateFile(x:any){
//     if(this.file!=null){
//       let data = new FormData()
//       data.('files', this.file[0])
//       this._global.updateFileUser(data).subscribe(data=>
//         console.log(data))
//     } 
//   }
}   
      