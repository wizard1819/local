import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { TextanimationsComponent } from './textanimations/textanimations.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { AngularComponent } from './angular/angular.component';
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';
import { ResponseDialogComponent } from './custom-snack-bar/response-dialog/response-dialog.component';
import { VehicleDialogComponent } from './vehicle/vehicle-dialog/vehicle-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpdateDialogComponent } from './vehicle/update-dialog/update-dialog.component';
import { FullComponent } from './layout/full/full.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FoodOrgComponent } from './food-org/food-org.component';
import { AddFoodComponent } from './food-org/add-food/add-food.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ThemeComponent } from './theme/theme.component';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbComponent } from './ngb/ngb.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TurboModule } from './turbocode/turbo.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VehicleComponent,
    HeroDetailComponent,
    HomeComponent,
    TextanimationsComponent,
    AngularComponent,
    CustomSnackBarComponent,
    ResponseDialogComponent,
    VehicleDialogComponent,
    UpdateDialogComponent,
    FullComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    SpinnerComponent,
    FoodOrgComponent,
    AddFoodComponent,
    ThemeComponent,
    LoginComponent,
    NgbComponent,

  ],
  imports: [
    BrowserModule,
    TurboModule,
    MatMenuModule,
    NgbPaginationModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    ClipboardModule,
    MatTooltipModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
