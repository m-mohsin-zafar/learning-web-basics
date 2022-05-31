import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComplaintDepartmentService} from "../complaint-department.service";
import {combineLatest, map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-complaint-department-details',
  templateUrl: './complaint-department-details.component.html',
  styleUrls: ['./complaint-department-details.component.css']
})
export class ComplaintDepartmentDetailsComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _cService: ComplaintDepartmentService
  ) { }

  ngOnInit(): void {
    let params = this._route.paramMap;
    let queryString = this._route.queryParamMap;
    // let departmentDetails = this._cService.getOne();

    combineLatest([params, queryString])
      .pipe(
      switchMap((params)=>{
      let id = params[0].get('id');
      let departmentName = params[0].get('departmentName');

      let detailLevel = params[1].get('detailLevel');

      return this._cService.getOne(id as String);
    })).subscribe((response) => {
      console.log(response);
    })

    // this._route.paramMap.subscribe((params) => {
    //   id = params.get('id');
    //
    // });

    // this._route.queryParamMap.subscribe((params) => {
    //   detailLevel = params.get('detailLevel');
    //   console.log(detailLevel)
    // });

    // this._cService.getOne(id).subscribe((result) => {
    //   console.log(result);
    // });


  }

}
