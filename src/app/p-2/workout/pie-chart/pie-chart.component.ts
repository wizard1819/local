import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild('img') img !: ElementRef;


  form!: FormGroup;
  radio!: FormGroup
  
  constructor(
    private  fb : FormBuilder,
    private http : HttpClient
  ) {
  
  }


  ckEditorConfig: any = { toolbar: [
    ['Source', 'Templates', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'],
    [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
    [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ],
    [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ],
    [ 'Link', 'Unlink', 'Anchor' ],
    [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ],
    [ 'Styles', 'Format', 'Font', 'FontSize' ],
    [ 'TextColor', 'BGColor' ],
    [ 'Maximize', 'ShowBlocks' ]
    ] };



  ngOnInit(): void {

  
  }

  


 

}
