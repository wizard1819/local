import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-read-xml',
  templateUrl: './read-xml.component.html',
  styleUrls: ['./read-xml.component.css'],

})
export class ReadXmlComponent {

  hoverState = 'initial';
  isHovered: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.showCopyButton();  }

  // Hide copy button on mouse leave
  @HostListener('mouseleave') onMouseLeave() {
    this.hideCopyButton();  }
  

  @ViewChild('ip') ip !: ElementRef;
  constructor(
    private clipboard: Clipboard,
    private snackbar: MatSnackBar
  ) { }

  showCopyButton(){
    this.isHovered = true;
  }

  hideCopyButton(){
    this.isHovered = false;
  }

  onSelectFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const xmlString: string | ArrayBuffer | any = reader.result;
      this.displayXmlDetails(xmlString);
      this.ip.nativeElement.value = null;
    };
    reader.readAsText(file);
  }

  mxl!: any;
  val: any;
  details = new Array<any>;
  tct: any[] = [];
  displayXmlDetails(xmlString: String | ArrayBuffer | any) {
    this.mxl = xmlString.split('<item>');
    let gh = this.mxl[1].split('<description>');
    let hg = gh[1].split('</description>')
    console.log(hg[0].trim(), '100');
    this.val = this.mxl;
    this.val.splice(0, 1);

    this.val.forEach((key: any, index: number) => {

      // author
      let splitAuthor = key.split('</author>');
      let splitByAuthor = splitAuthor[0].split('<author>');

      let splitdate = key.split('</pubDate>');
      let dateSplitAgain = splitdate[0].split('<pubDate>');


      // comment id 
      let splitLink = key.split('</link>');
      let splitNyLink = splitLink[0].split('<link>');
      let a = splitNyLink[1].trim();
      let comment = a.split('#');
      // console.log(`${index} ${splitByAuthor[1]} => ${comment[0]} date => ${dateSplitAgain[1]}`);
      let jso = { name: splitByAuthor[1], date: dateSplitAgain[1], commentId: comment[0] };
      this.details.push(jso);

    });
    // console.log(this.details);


    this.tct = this.details.filter((item) => item.name == 'Ayyasamy Palanisamy');
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'VinothKumar J'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Praveen C'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Monu Chandramohan'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Guna K'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Mohammed Fathauddin'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Velu P'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Rathees P'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'tamil.arivu'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Jagadeesh.R'));
    this.tct = this.tct.concat(this.details.filter((item) => item.name == 'Arnesh R'));
    this.tct = this.tct.map((item: any, index: number) => ({ SrNo: index + 1, name: item.name, date: item.date, commentId: item.commentId }));
    // })

  }

  logIt() {
    this.tct = this.tct.map((item: any, index: number) => ({ SrNo: index + 1, name: item.name, date: item.date, commentId: item.commentId }));
    console.table(this.tct);
  }

  copy(data: any) {
    this.clipboard.copy(data);
    this.snackbar.open('link copied to clipboard', '', {
      duration: 2000,
      horizontalPosition: 'start'
    })
  }

  copyAllData() {
    // let v= this.tct;
    // this.clipboard.copy(v);
  }

  dec: boolean = false;
  des() {
    this.dec = !this.dec;
    if (this.dec) {
      this.tct.sort((a, b) => b.SrNo - a.SrNo);
    } else {
      this.tct.sort((a, b) => a.SrNo - b.SrNo);
    }
  }

  openAslink(url: any) {
    window.open(url);
  }

  open() {
    let val = this.tct.filter((item: any) => item.name == 'Jagadeesh.R');
    val.forEach((k?: any) => {
      window.open(k.commentId);

    })
  }

  det: any[] = [];
  export() {
    const data: any[] = [
      ['Name', 'Date', 'CommentId']
      // Add your list items here
    ];

    this.tct.forEach((key) => {
      this.det = [];
      this.det.push(key.name);
      this.det.push(key.date);
      this.det.push(key.commentId);
      data.push(this.det);
    })

    console.log(data);
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const wbout: ArrayBuffer = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'exported_list.xlsx');
  }
}
