import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-make',
  templateUrl: './pdf-make.component.html',
  styleUrls: ['./pdf-make.component.css']
})
export class PdfMakeComponent {


  name = 'Angular';

  @ViewChild('content', { static: false }) content!: ElementRef;


  htmltoPDF() {
    // parentdiv is the html element which has to be converted to PDF
    html2canvas(this.content.nativeElement).then(canvas => {

      const pdf = new jsPDF('p', 'pt', [500, 700]);

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, 0, 0, 500, 700);
      pdf.save('converteddoc.pdf');

    });

  }
}
