import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomsService } from '../custom-snack-bar/customs.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { FoodService } from './food.service';
import { AddFoodComponent } from './add-food/add-food.component';
@Component({
  selector: 'app-food-org',
  templateUrl: './food-org.component.html',
  styleUrls: ['./food-org.component.css']
})
export class FoodOrgComponent {
  pageSize: number = 10;
  pageIndex: number = 0;
  totalElements: number = 0;
  displayedColumns = ['id', 'avail', 'name', 'seats', 'outlet', 'waiter', 'Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort) sort: MatSort = Object.create(null);
  constructor(
    private service: FoodService,
    private dialog: MatDialog
  ) { }
  showSpinner: boolean = false;

  ngOnInit(): void {
    this.findAll();
  }


  findAll() {
    this.showSpinner=true
    this.service.food(this.pageIndex, this.pageSize).subscribe({
      next: (d) => {
        var datas: any[] = d.response.content;
        this.dataSource = new MatTableDataSource(datas);
        console.log(d);
        this.totalElements = d.response.page.totalElements;

      },
      error: (e) => {

      },
      complete: () => {
this.showSpinner=false
      }
    })
  }

  ngAfterViewInit() {
    if (this.dataSource != undefined && this.dataSource != null) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  nextPageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.findAll();
  }


  deleteById(id: number, name: string) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        header: 'Delete User',
        message: 'Are you sure, want to delete ' + name + ' ?',
      },

    },);

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result && result.data) {
          this.service.fooddelete(id).subscribe({
            next: (response) => {
              this.findAll();
              console.log('deleted successfully')
            },
            error: (e) => {
              console.error('error occurs');
            }
          }
          )
        }
      }
    )
  }

  openDialog(){
    this.dialog.open(AddFoodComponent),{
    }
  
    
  }
}