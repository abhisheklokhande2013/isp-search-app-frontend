import { Component, OnInit } from '@angular/core';
import { IspService } from '../../services/IspService';
import { IspData } from '../../model/isp.model';

@Component({
  selector: 'app-isp-list',
  templateUrl: './isp-list.component.html',
  styleUrls: ['./isp-list.component.css']
})
export class IspListComponent implements OnInit {
  filteredIsps: IspData[];
  private _searchTerm: string;
  showLoader = true;

  constructor(private ispService: IspService) {
    // This API call is to set initial ISP list
    this.ispService.getIsp().subscribe(
      (res: IspData[]) => {
        this.ispService.isps = res;
        this.filteredIsps = this.ispService.isps;
        this.showLoader = false;
      },
      error => {
        return console.log(error);
      }
    );
  }

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredIsps = this.filterIsps(value);
  }

  // This method is used for filtering the ISP list
  filterIsps(searchString: string): IspData[] {
    return this.ispService.isps.filter(
      isp => isp.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  // This methid is for sorting by name and price
  radioChangeHandler(event: any) {
    if (event.target.value === 'name') {
      this.filteredIsps = this.ispService.isps.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (event.target.value === 'price') {
      this.filteredIsps = this.ispService.isps.sort((a, b) =>
        a.lowest_price.toString().localeCompare(b.lowest_price.toString())
      );
    }
  }

  // This method is to show info of seleted ISP
  onSelect(isp: IspData) {
    // Change showIspInfo to true
    this.ispService.showIspInfo = true;
    // Display registration entry section.
    this.ispService.ispSelected = Object.assign({}, isp);
  }

  ngOnInit() {}
}
