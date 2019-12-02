import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Colorset } from '../_models/colorset';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colorset: Colorset;

  constructor(
    private employeeService: EmployeeService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log('Data: ', data);
      const csa: any[] = data['users'];
      console.log('csa: ', csa);
      this.colorset = csa[0];
      console.log('Colorset: ', this.colorset);
    });
  }

}
