import { Component ,OnInit, Inject} from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.css']
})
export class CustomSnackBarComponent implements OnInit{

  constructor(
    private snackBarRef : MatSnackBarRef<CustomSnackBarComponent>,
   
    @Inject(MAT_SNACK_BAR_DATA) public data : any
    ){}

    ngOnInit(): void {
      
    }
   

close() {
  this.snackBarRef.dismiss();
}
}
