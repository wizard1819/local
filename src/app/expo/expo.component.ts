import { Component } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.css']
})
export class ExpoComponent {

  exportToPDF() {
    const para = document.getElementById('demo'); // Replace with the actual ID of your paragraph
    html2canvas(para!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF();
  
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('content.pdf');
    });
  }
  
}
