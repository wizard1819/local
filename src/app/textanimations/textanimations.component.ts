import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textanimations',
  templateUrl: './textanimations.component.html',
  styleUrls: ['./textanimations.component.css']
})
export class TextanimationsComponent implements OnInit {

  searchForm!: FormGroup
  constructor(
    private fb: FormBuilder
  ) {

  }

  name = { name: null, age: 10, firstname: 'guna', lastname: { name: 'guna', onre: null }, fn: { fn: null, gma: 'name' } };

  timee: any;
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      audienceListName: new FormControl('giuna'),
      description: new FormControl('descriptionss'),

      //Customer Info
      customerInfo: this.fb.group({
        multi_value_filter: this.fb.group({
          individualOccupation: new FormControl('occu'),
          language: new FormControl('occu'),
          monthlyHouseHoldIncome: new FormControl('occu'),
          city: new FormControl('occu'),
          state: new FormControl('occu'),
        }),

        single_value_filter: this.fb.group({
          maritalStatus: new FormControl([]),
          race: new FormControl([]),
          month: new FormControl('occu'),
          gender: new FormControl([]),
          customerClass: new FormControl('occu'),
          nationality: new FormControl('occu'),
          postalCode: new FormControl('occu')
        }),
        range_filter: this.fb.group({
          customerAgeRange: this.fb.group({
            from: new FormControl(null),
            to: new FormControl(null),
            type: 'number'
          }),
          houseHoldSize: this.fb.group({
            from: new FormControl(null),
            to: new FormControl(null),
            type: 'number'
          })
        }),
        other_filter: this.fb.group({})

      }),


      //salesInfo



      salesInfo: this.fb.group({
        multi_value_filter: this.fb.group({
          customerType: new FormControl(),
          salesType: new FormControl(),
          invoicePriceRange: new FormControl(),
          areaOfOpreation: new FormControl(),
          leadStatus: new FormControl(),

        }),

        single_value_filter: this.fb.group({
          leadScore: new FormControl(),
          loanTaken: new FormControl()

        }),
        range_filter: this.fb.group({
          loanTenureExperie: this.fb.group({
            from: new FormControl(),
            to: new FormControl(),
            type: 'date'
          })
        }),
        other_filter: this.fb.group({})
      }),

      //vehicleInfo


      vehicleInfo: this.fb.group({

        multi_value_filter: this.fb.group({
          vehicleSeries: new FormControl(null)

        }),
        single_value_filter: this.fb.group({
        }),
        range_filter: this.fb.group({
          vehicleAgeRange: this.fb.group({
            from: new FormControl(null),
            to: new FormControl(null),
            type: 'date'
          }),
          mileageRange: this.fb.group({
            from: new FormControl(null),
            to: new FormControl(null),
            type: 'number'
          }),
          insuranceExpiry: this.fb.group({
            from: new FormControl(null),
            to: new FormControl(null),
            type: 'date'
          }),
          vehicleLastService: this.fb.group({
            from: new FormControl(null),
            to: new FormControl(null),
            type: 'date'
          })

        }),
        other_filter: this.fb.group({})
      })
    })




    //cust
  

    // console.log(this.searchForm.value);

    this.check();
  }
  check(){
    Object.keys(this.searchForm.value).forEach((key:any)=>{
      console.log(key);
      Object.keys(this.searchForm.value[key]).forEach((keyone:any)=>{
         console.log(this.searchForm.value[key][keyone]);
      })
    })
  }

  checkValue(){
    Object.keys(this.searchForm.value.customerInfo.single_value_filter).forEach((key) => {
      if (this.searchForm.value.customerInfo.single_value_filter[key] == null || this.searchForm.value.customerInfo.single_value_filter[key].length == 0) {
        delete this.searchForm.value.customerInfo.single_value_filter[key]
      }
    })

    Object.keys(this.searchForm.value.customerInfo.multi_value_filter).forEach((key) => {
      if (this.searchForm.value.customerInfo.multi_value_filter[key] == null || this.searchForm.value.customerInfo.multi_value_filter[key].length == 0) {
        delete this.searchForm.value.customerInfo.multi_value_filter[key]
      }
    })

    Object.keys(this.searchForm.value.customerInfo.range_filter).forEach((key) => {
      Object.keys(this.searchForm.value.customerInfo.range_filter[key]).forEach((k) => {
        if (this.searchForm.value.customerInfo.range_filter[key][k] == null || this.searchForm.value.customerInfo.range_filter[key][k] == 'number') {
          delete this.searchForm.value.customerInfo.range_filter[key][k]
        }
      })
    })

    Object.keys(this.searchForm.value.customerInfo).forEach((keys) => {
      if (this.searchForm.value.customerInfo[keys].value == undefined) {
        delete this.searchForm.value.customerInfo[keys]
      }
    })


    Object.keys(this.searchForm.value.vehicleInfo.range_filter).forEach((key)=>{
      Object.keys(this.searchForm.value.vehicleInfo.range_filter[key]).forEach((k)=>{
        if(this.searchForm.value.vehicleInfo.range_filter[key][k] == null || this.searchForm.value.vehicleInfo.range_filter[key][k] == 'number' || this.searchForm.value.vehicleInfo.range_filter[key][k] == 'date'){
          delete this.searchForm.value.vehicleInfo.range_filter[key][k]
        }
      })
    })

    Object.keys(this.searchForm.value.vehicleInfo.range_filter).forEach((key)=>{
      if(this.searchForm.value.vehicleInfo.range_filter[key].value == undefined){
        delete this.searchForm.value.vehicleInfo.range_filter[key]
      }
    })

    Object.keys(this.searchForm.value.vehicleInfo.multi_value_filter).forEach((key) => {
      if (this.searchForm.value.vehicleInfo.multi_value_filter[key] == null || this.searchForm.value.vehicleInfo.multi_value_filter[key].length == 0) {
        delete this.searchForm.value.vehicleInfo.multi_value_filter[key]
      }
    })

    Object.keys(this.searchForm.value.vehicleInfo).forEach((key)=>{
      if(this.searchForm.value.vehicleInfo[key].value == undefined){
        delete this.searchForm.value.vehicleInfo[key];
      }
    })

  
    Object.keys(this.searchForm.value.salesInfo.multi_value_filter).forEach((key)=>{
      if (this.searchForm.value.salesInfo.multi_value_filter[key] == null || this.searchForm.value.salesInfo.multi_value_filter[key].length == 0) {
        delete this.searchForm.value.salesInfo.multi_value_filter[key]
      }
    })
    
    Object.keys(this.searchForm.value.salesInfo.single_value_filter).forEach((key)=>{
        if(this.searchForm.value.salesInfo.single_value_filter[key] == null){
          delete this.searchForm.value.salesInfo.single_value_filter[key];
        }
    })
    Object.keys(this.searchForm.value.salesInfo.range_filter).forEach((key)=>{
      Object.keys(this.searchForm.value.salesInfo.range_filter[key]).forEach((k)=>{
        if(this.searchForm.value.salesInfo.range_filter[key][k] == null || this.searchForm.value.salesInfo.range_filter[key][k] == 'number' || this.searchForm.value.salesInfo.range_filter[key][k] == 'date'){
          delete this.searchForm.value.salesInfo.range_filter[key][k]
        }
      })
    })

    Object.keys(this.searchForm.value.salesInfo.range_filter).forEach((key)=>{
      if(this.searchForm.value.salesInfo.range_filter[key] && this.searchForm.value.salesInfo.range_filter[key] == null){
        delete this.searchForm.value.salesInfo.range_filter[key];
      }
    })

    Object.keys(this.searchForm.value.salesInfo).forEach((key)=>{
      if(this.searchForm.value.salesInfo[key] && this.searchForm.value.salesInfo[key].value== null){
        delete this.searchForm.value.salesInfo[key];
      }
    })

    Object.keys(this.searchForm.value).forEach((key)=>{
      if(this.searchForm.value[key] == null){
        delete this.searchForm.value[key];
      }
    })

    console.log(this.searchForm.value);
  }


 

}

