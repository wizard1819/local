import { Component, OnInit } from '@angular/core';
import { UserTable } from 'src/app/login/usertable';
@Component({
  selector: 'app-formstudy',
  templateUrl: './formstudy.component.html',
  styleUrls: ['./formstudy.component.css']
})
export class FormstudyComponent implements OnInit {
  det: any = '';
  accent = 'red';
  header: any = {
    C_1: '1',
    C_2: '2',
    C_3: '2',
    C_4: '3',
    C_5: '15',
    C_6: '6',
  }

  userr: any[] = UserTable
  userToCheck = 'xoxo';
  passwordToCheck = 'xoxo';


  footer = [
    { id: 1, fieldName: 'ID', display: true, editable: true, fieldType: 'TEXT' },
    { id: 1, fieldName: 'ID', display: true, editable: true, fieldType: 'TEXT' },

  ]


  arr: any = [];

  //  headerValues: any = [];

  ngOnInit(): void {
    console.log(Object.values(UserTable).map(name => name.name), 'usss');
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
    console.log(combinedArray, 'com');
  }

  checks() {
    const foundUser = UserTable.find(user => user.name === this.userToCheck && user.password === this.passwordToCheck);

    // Check if the user is found
    if (foundUser) {
      console.log('User found:', foundUser);
      // Perform further actions if needed
    } else {
      console.log('User not found');
    }
  }

  rev() {
    const rev = UserTable.sort((a, b) => (b.id - a.id));
    console.log(rev, 'reverse');
  }

  searchTerm: string='';

  onSearch(event:any) {
    // Perform the desired search or filtering logic here
    if(this.searchTerm.length>=1 && event.key=='Enter'){
    console.log('Search term:', this.searchTerm);
  }
  console.log(event.key);
  }

  clear(){
    this.searchTerm='';
  }

  
}
