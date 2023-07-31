import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomsService } from '../custom-snack-bar/customs.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { GlobalstateService } from '../globalService/globalstate.service';
import { FormoneComponent } from '../forms/formone/formone.component';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
@Component({

  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  // Message :any[]=[];
  // info:any;
  pageSize: number = 10;
  pageIndex: number = 0;
  totalElements: number = 0;
  vehicleee: any;
  displayedColumns = ['id', 'owner', 'model', 'brand', 'type', 'registerNum', 'status', 'Actions'];
  dataSource!: MatTableDataSource<any>;
  addForm: any[] = [
    { type: 'text', name: 'model', required: true },
    { type: 'text', name: 'brand', required: true },
    { type: 'text', name: 'owner', required: true },
    { type: 'dropdown', name: 'status', options: [true, false], required: true },
    { type: 'text', name: 'type', required: true },
    { type: 'text', name: 'registerNum', required: true },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort) sort: MatSort = Object.create(null);

  constructor(
    private service: VehicleService,
    private snack: CustomsService,
    private dialog: MatDialog,
    private router: Router,
    private gobalStateService: GlobalstateService,
    public route : ActivatedRoute
  ) {

  }

  showSpinner: boolean = false;



  ngOnInit(): void {
    this.findAll();
    console.log(this.route,'rte');
  }


  findAll() {
    this.showSpinner = true;

    this.service.getAll(this.pageIndex, this.pageSize)
    .subscribe({
      next: (d: any) => {
        var datas: any[] = d.response.content;
        this.dataSource = new MatTableDataSource(datas);
        this.totalElements = d.response.page.totalElements;
      },
      error: (e) => {
        
      },
      complete: () => {
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

  deleteById(id: number, name: string) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        header: 'Delete User',
        message: 'Are you sure, want to delete ' + name + ' ?',
      },
      disableClose: true
    },);

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result && result.data) {
          this.service.delete(id).subscribe({
            next: (response) => {
              this.findAll();
              this.snack.openSnack(response.message);
            },
            error: (e) => {
              this.snack.openSnack(e.error);
            }
          }
          )
        }


      })
  }
  nextPageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.findAll();
  }


  update(data?: any) {
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: data,
      panelClass: ['animate__animated', 'animate__slideInRight'],
    },
    );

    dialogRef.afterClosed().subscribe({
      next: (d) => {
        this.findAll();
      }
    }
    )
  }

  detail(data?: any) {
    this.dialog.open(InfoDialogComponent, {
      data: data
    })
  }

  openAddvehicleComponent(data?: any) {
    this.gobalStateService.setState(data);
    this.router.navigate(['/addvehicle']);
  }

  async dynamic(data?: any) {
    await this.gobalStateService.setState(this.addForm);
    let dialogRef = this.dialog.open(FormoneComponent, {
      data: data,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data !== null && data.data !== undefined) {
        console.log(data);
        this.service.add(data.data).subscribe({
          next: (d) => {
            this.snack.openSnack(d.message);
          }
        });
      }

    })
  }

}
