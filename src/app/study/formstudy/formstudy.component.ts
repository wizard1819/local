import { Component , OnInit} from '@angular/core';
@Component({
  selector: 'app-formstudy',
  templateUrl: './formstudy.component.html',
  styleUrls: ['./formstudy.component.css']
})
export class FormstudyComponent implements OnInit{

  header:any={
    C_1:'1',
    C_2:'2',
    C_3:'2',
    C_4:'3',
    C_5:'15',
    C_6:'6',
  }
  
  footer=[ 
    {id: 1, fieldName: 'ID', display: true, editable: true, fieldType: 'TEXT'},
    {id: 1, fieldName: 'ID', display: true, editable: true, fieldType: 'TEXT'},
   
  ]

 
  arr:any=[];
  
  //  headerValues: any = [];

  ngOnInit(): void {
    // this.header.forEach((item) => {
    //   const value = Object.values(item)[0]; // Extract the value using Object.values()
    //   this.headerValues.push(value); // Add the value to the headerValues array
    // });
    const headerValues: string[] = Object.values(this.header);
    
    console.log(headerValues); // Output: ["1", "2", "3", "4", "5", "6", "7"]

   
    // console.log(combinedArray,'combined array');

    const combinedArray = this.footer.map((item) => ({
      ...item,
      ...this.header,
    }));
    console.log(combinedArray,'com');
  }

}
