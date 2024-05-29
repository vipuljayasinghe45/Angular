import { Component } from '@angular/core';
import { AddCategoryRequest } from '../Model/add-category-request-model';
import { ProcessService } from '../Process/process.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  
  public employees: AddCategoryRequest[] = [];
  model: AddCategoryRequest;



  constructor(private services: ProcessService) {
    this.model = {
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
  }

  onFormSubmit() {
    this.services.addCategory(this.model)
      .subscribe({
        next: (response) => {
          alert(response);
          alert("Successfully Added");
        }

      });
  }

  ngOnInit(): void {
    {
      this.services.selectAllEmployee()
        .subscribe({
          next: (respond) => {
            this.employees = respond;

          }

        });

    }

  }
}
