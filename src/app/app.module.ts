import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
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
import { ExpoComponent } from './expo/expo.component';
import { SnackbarModule } from './snackbar/snackbar.module';
import { AddvehicleComponent } from './vehicle/addvehicle/addvehicle.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './sender/receiver/receiver.component';
import { CartComponent } from './study/cart/cart.component';
import { ProductComponent } from './study/product/product.component';
import { FormstudyComponent } from './study/formstudy/formstudy.component';
import { CycleComponent } from './study/cycle/cycle.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ChildComponent } from './study/cycle/child/child.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChipsComponent } from './chips/chips.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginService } from './login/login.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { Httpinterceptor } from './commons/interceptors/http.interceptor';
import {MatBadgeModule} from '@angular/material/badge';
import { ErrorComponent } from './error/error.component';
import { TurbocodeComponent } from './turbocode/turbocode.component';
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
    ExpoComponent,
    AddvehicleComponent,
    SenderComponent,
    ReceiverComponent,
    CartComponent,
    ProductComponent,
    FormstudyComponent,
    CycleComponent,
    InfoDialogComponent,
    ChildComponent,
    ChipsComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    MatBadgeModule,
    MatRippleModule,
    MatTabsModule,
    MatBottomSheetModule,
    SnackbarModule,
    MatProgressBarModule,
    MatMenuModule,
    NgbPaginationModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatExpansionModule,
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
  providers: [LoginService, { provide: HTTP_INTERCEPTORS, useClass: Httpinterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
