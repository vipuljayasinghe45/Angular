import { Component, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../Model/add-category-request-model';
import { ActivatedRoute } from '@angular/router';
import { ProcessService } from '../Process/process.service';
import { response } from 'express';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss'
})
export class UsermanagementComponent implements OnInit {

  employeedetail: AddCategoryRequest = {
    id: '',
    firstName: '',
    lastName: '',
    areaCode: '',
    city: '',
    street: '',
    userName: '',
    passWord: '',
    isAdmin: ''
  };
  constructor(private router: ActivatedRoute, private services: ProcessService) { }
  
  ngOnInit(): void {
    this.router.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);
        if (id) {
          this.services.getEmployeeID(id)
            .subscribe({
              next: (res) => {
            console.log(res)
            this.employeedetail = res;
              }
            });
        }
      }
    })
  }

  updateUser() {
    this.services.updateEmployeeDetails(this.employeedetail)
      .subscribe({

        next: (response) => {
          alert("SucessFully Updated");
        }
      })
  }


  deleteEmployeeID(id: string) {
    this.services.deleteEmployee(this.employeedetail.id)
      .subscribe({
        next: (res) => {
          alert("successfully Deleted");
        }
      });
  }


}
