import { Component  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {


  constructor(private router: Router) {}
 
   data = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' }
  ];
  navigateWithData() {
   
    this.router.navigate(['/receiver'], { queryParams: { data:JSON.stringify(this.data) } });
  }
}
