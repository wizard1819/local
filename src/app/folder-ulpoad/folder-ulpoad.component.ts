import { Component } from '@angular/core';

@Component({
  selector: 'app-folder-ulpoad',
  templateUrl: './folder-ulpoad.component.html',
  styleUrls: ['./folder-ulpoad.component.css']
})
export class FolderUlpoadComponent {


  fileselect(event?: any) {
    console.log(event.target.files);
  }

 


}
