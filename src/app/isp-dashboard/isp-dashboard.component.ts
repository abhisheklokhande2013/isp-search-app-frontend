import { Component, OnInit, OnDestroy } from '@angular/core';
import { IspService } from '../services/IspService';
import { IspData } from '../model/isp.model';

@Component({
  selector: 'app-isp-dashboard',
  templateUrl: './isp-dashboard.component.html',
  styleUrls: ['./isp-dashboard.component.css']
})
export class IspDashboardComponent implements OnInit {
  totalIspCount = 0;
  today: number = Date.now();
  apiCounter = 0;
  constructor(private ispService: IspService) {
    this.ispService.getIsp().subscribe(
      (res: IspData[]) => {
        this.ispService.isps = res;
        this.totalIspCount = this.ispService.isps.length;
        this.ispService.apiHitCounter += 1;
      },
      error => {
        return console.log(error);
      }
    );
  }
  ngOnInit() {
    this.apiCounter = this.ispService.apiHitCounter;
  }
}
