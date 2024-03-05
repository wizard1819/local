import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-read-pdf',
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.css']
})
export class ReadPdfComponent {

  constructor(
    private se : LoginService
  ){}

  @ViewChild('content', { static: false }) content!: ElementRef; // Reference to the HTML content to convert

  name=[
    'one','two'
  ]
  generatePDF() {
    const doc = new jsPDF('portrait', 'mm', 'a4');

    // Add content to the PDF

    doc.text(this.name, 10, 10);



    // Save the PDF
    doc.save('filename.pdf');
  }

  downloadPDF() {
    const content = this.content.nativeElement;
    console.log(content)
    this.generatePD(content, 'generated_pdf');
  }

  generatePD(htmlContent: HTMLElement, fileName: string) {
    html2canvas(htmlContent).then(canvas => {
      // Convert HTML to canvas
      const contentDataURL = canvas.toDataURL('image/png');

      // Create PDF
      let pdf = new jsPDF('portrait', 'mm', 'a4'); // A4 size page
      const imgWidth = 210; // mm
      const pageHeight = 297; // mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(fileName + '.pdf');
    });
  }

  logie(){
    console.log('wsdjgcyhdcwuwjdhvcd');

  }


  showSnack(){
    this.se.showMessage();
  }


}
