import { Component , OnDestroy, OnInit, ViewChild} from '@angular/core';
import { VehicleService } from './vehicle.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomsService } from '../custom-snack-bar/customs.service';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({

  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent  {
  // Message :any[]=[];
  // info:any;
  pageSize: number = 10;
  pageIndex: number = 0;
  totalElements: number = 0;
vehicleee:any;
  displayedColumns = ['id', 'owner','model', 'brand',  'type', 'registerNum', 'status','Actions'];
  // displayedColumns = ['id', 'fname','lname', 'avail',  'name', 'seats', 'outlet','waiter','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort) sort: MatSort = Object.create(null);

  constructor(
    private service : VehicleService,
    private snack : CustomsService,
    private dialog : MatDialog,
    private router : Router
    ){
    
  }

  showSpinner: boolean = false;


 
  ngOnInit(): void {
   this.findAll();
  }
 
 
  findAll(){
    this.showSpinner = true;
  
    this.service.getAll(this.pageIndex, this.pageSize).subscribe({
      next: (d)=>{
        var datas: any[] = d.response.content;
        this.dataSource = new MatTableDataSource(datas);
        console.log(d.response.content);
        this.totalElements = d.response.page.totalElements;
       
      },
      error:(e)=>{
        console.log(e.name);
        this.snack.openSnack(e.name);
      },
      complete:()=>{
        this.showSpinner = false;

      }
    })
  }

  ngAfterViewInit() {
    if (this.dataSource != undefined && this.dataSource != null) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

 deleteById(id : number, name:string){
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      header : 'Delete User',
      message :  'Are you sure, want to delete '+name+' ?',
    } ,
    disableClose: true
  },    );

  dialogRef.afterClosed().subscribe(
    (result) => {
      if(result && result.data){
        this.service.delete(id).subscribe({
          next : (response)=>{
            this.findAll();
            this.snack.openSnack('Deleted successfully');
          },
          error:(e)=>{
            this.snack.openSnack(e);
          }
        }
  )}
 
   
        })
 }
 nextPageEvent(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
  this.findAll();
}

openDialog(){
  let dialogRef =  this.dialog.open(VehicleDialogComponent)
  dialogRef.afterClosed().subscribe({
    next:(d)=>{
      this.findAll();
    }
  }
  )
}
update(data?: any) {
  let dialogRef = this.dialog.open(UpdateDialogComponent, {
    data: data ,
  },);

  dialogRef.afterClosed().subscribe({
    next:(d)=>{
      this.findAll();
    }
  }
  )
}

detail(data?:any){
  this.dialog.open(InfoDialogComponent,{
    data:data
  })
}

openAddvehicleComponent(data?:any){

  this.router.navigate(['/addvehicle'], { queryParams: { vehicles:JSON.stringify(data) } })
}

}
