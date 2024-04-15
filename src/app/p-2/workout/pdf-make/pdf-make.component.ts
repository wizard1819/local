import { Component, OnInit } from '@angular/core';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
import { Cell, Row, Table } from 'ng-pdf-make/objects/table';

@Component({
  selector: 'app-pdf-make',
  templateUrl: './pdf-make.component.html',
  styleUrls: ['./pdf-make.component.css']
})
export class PdfMakeComponent implements OnInit {


  constructor(
    private pdfmake: PdfmakeService
  ) {

  }

  ngOnInit(): void {
    const header1 = new Cell('Header1');
    const header2 = new Cell('Header2');
    const header3 = new Cell('Header3', { fillColor: '#cecece' });

    // Create headers row
    const headerRows = new Row([header1, header2, header3]);

    // Create a content row
    const row1 = new Row([new Cell('One value goes here '), new Cell('Another one here'), new Cell('OK?')]);

    // Custom  column widths
    const widths = [100, '*', 200, '*'];

    // Create table object
    const table = new Table(headerRows, [row1], widths);

    // Add table to document
    this.pdfmake.addTable(table);
  }

  openPdf() {
    this.pdfmake.open();
  }

  printPdf() {
    this.pdfmake.print();
  }

  downloadPDF() {
    this.pdfmake.download();
  }

  downloadPdfWithName(customName: string) {
    this.pdfmake.download(customName);
  }

}
