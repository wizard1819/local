import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-read-xml',
  templateUrl: './read-xml.component.html',
  styleUrls: ['./read-xml.component.css']
})
export class ReadXmlComponent {

  constructor(
    private clipboard: Clipboard
  ) { }

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
    };
    reader.readAsText(file);
  }

  mxl!: any;
  val: any;
  details = new Array<any>;
  tct: any[] = [];
  displayXmlDetails(xmlString: String | ArrayBuffer | any) {
    console.log('XML Content:', xmlString);
    let names = ['Ayyasamy', 'Guna', 'Praveen', 'Rathees', 'Velu', 'Mohammed Fathauddin'];
    this.mxl = xmlString.split('<item>');
    console.log(this.mxl[10], '100');
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
      console.log(`${index} ${splitByAuthor[1]} => ${comment[0]} date => ${dateSplitAgain[1]}`);
      let jso = { name: splitByAuthor[1], date: dateSplitAgain[1], commentId: comment[0] };
      this.details.push(jso);

    });
    console.log(this.details);


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
    // })

  }

  logIt() {
    this.tct = this.tct.map((item: any, index: number) => ({ SrNo: index + 1, name: item.name, date: item.date, commentId: item.commentId }));
    console.table(this.tct);
  }

  copy(data: any) {
    this.clipboard.copy(data);
  }
}
