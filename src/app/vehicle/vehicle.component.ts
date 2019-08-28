import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('vehicleForm') form: any;

  public title = 'Vehicle Search';

  public vehicle: Vehicle = {
    'type': '',
    'make': '',
    'model': ''
  };

  public vehicleTypes = [
    'New',
    'Used',
    'Certified'
  ];

  public vehicles: Vehicle[] = [];

  submitted = false;
  print = false;
  rawData = '';
  keyword = '';

  onSubmit() {    
    this.submitted = true;
    if (this.form.valid) {
      this.vehicles.push(this.form.value);
      this.form.reset({type : ''});      
      this.submitted = false;
    }
  }

  highlightRow(item: Vehicle) {
    if (this.keyword.length < 3) {
      return false;
    }
    return item.type.includes(this.keyword) || item.make.includes(this.keyword) || item.model.includes(this.keyword);
  }

  printJson() {
    this.print = !this.print;    
  }

}
