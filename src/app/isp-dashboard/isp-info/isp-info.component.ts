import { Component, OnInit } from '@angular/core';
import { IspService } from '../../services/IspService';

@Component({
  selector: 'app-isp-info',
  templateUrl: './isp-info.component.html',
  styleUrls: ['./isp-info.component.css']
})
export class IspInfoComponent implements OnInit {
  constructor(public ispService: IspService) {
  }

  ngOnInit() {
  }
}
