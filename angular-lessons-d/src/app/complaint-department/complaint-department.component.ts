import { Component, OnInit } from '@angular/core';
import {ComplaintDepartmentService} from "../complaint-department.service";

@Component({
  selector: 'app-complaint-department',
  templateUrl: './complaint-department.component.html',
  styleUrls: ['./complaint-department.component.css']
})
export class ComplaintDepartmentComponent implements OnInit {

  cDepartments: any[] = [];

  constructor(private _cService: ComplaintDepartmentService) { }

  ngOnInit(): void {
    this._cService.getAll().subscribe((response) => {
      console.log(response);
      this.cDepartments = (response as any);
    })
  }

}
