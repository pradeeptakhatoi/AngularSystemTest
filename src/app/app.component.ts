import { Component, ViewChild } from '@angular/core';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  filterVehicle() {
    if (this.keyword.length >= 3) {
      this.vehicles = this.vehicles.filter(v => {
        v.type == this.keyword || v.make == this.keyword || v.model == this.keyword
      });
    } 
  }

  printJson() {
    this.print = !this.print;    
  }

}
