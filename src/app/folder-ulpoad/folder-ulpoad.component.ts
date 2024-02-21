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

  loh() {
    const fs = require('fs');
    const path = require('path');
    const directoryPath = 'D:\\TC\\e-commerce-web\\src\\assets\\media\\svg\\brand-logos';

    fs.readdir(directoryPath, function (err: any, files: any) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      // Filter out any non-files (e.g., directories)
      const fileArray = files.filter((file: any) => fs.statSync(path.join(directoryPath, file)).isFile());

      console.log('Files found:', fileArray);
    });
  }


}
