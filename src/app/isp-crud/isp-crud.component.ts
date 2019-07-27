import { Component, OnInit, OnDestroy } from '@angular/core';
import { IspService } from '../services/IspService';
import { IspData } from '../model/isp.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-isp-crud',
  templateUrl: './isp-crud.component.html',
  styleUrls: ['./isp-crud.component.css']
})
export class IspCRUDComponent implements OnInit, OnDestroy {
  private ispSubscription: Subscription;
  // It maintains registration form display status. By default it will be false.
  showNew = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType = 'Save';

  constructor(public ispService: IspService, private toaster: ToastrService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshIspList();
  }
  refreshIspList() {
    this.ispSubscription = this.ispService.getIsp().subscribe(
      (res: IspData[]) => {
        this.ispService.isps = res;
      },
      error => {
        this.toaster.error('Error in while getting list of ISP');
        return console.log(error);
      }
    );
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.ispService.ispSelected = {
      _id: '',
      name: '',
      max_speed: '',
      lowest_price: null,
      rating: null,
      description: '',
      contact_number: '',
      email: '',
      image: '',
      url: ''
    };
  }

  deleteIsp(isp: IspData): void {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.ispService.deleteIsp(isp._id).subscribe(
        res => {
          this.refreshIspList();
          this.toaster.success('Sucessfully deleted ISP');
        },
        error => {
          this.toaster.error('Error in ISP deletion');
          return console.log(error);
        }
      );
    }
  }

  // This method associate to New Button.
  onNew() {
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  onSave(form: NgForm) {
    if (this.submitType === 'Save') {
      this.ispService.createIsp(form.value).subscribe(res => {
        this.resetForm(form);
        this.refreshIspList();
        this.toaster.success('Sucessfully Created ISP!');
      });
    } else {
      // Update the existing properties values
      this.ispService.updateIsp(form.value).subscribe(res => {
        this.resetForm(form);
        this.refreshIspList();
        this.toaster.success('Sucessfully Updated ISP!');
      });
    }
  }

  onEdit(isp: IspData) {
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
    this.ispService.ispSelected = Object.assign({}, isp);
  }

  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
    this.resetForm();
  }

  ngOnDestroy(): void {
    this.ispSubscription.unsubscribe();
  }
}
