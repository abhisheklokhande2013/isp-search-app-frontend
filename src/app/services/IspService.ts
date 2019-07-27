import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IspData } from '../model/isp.model';

@Injectable({
  providedIn: 'root'
})
export class IspService {
  isps: IspData[];
  ispSelected: IspData;
  showIspInfo: boolean;
  endpoint = 'http://localhost:8080/api';
  apiHitCounter = 0;
  constructor(private http: HttpClient) {}

  getIsp() {
    this.apiHitCounter += 1;
    return this.http.get<IspData[]>(this.endpoint + '/get');
  }
  getIspByName(name: string) {
    this.apiHitCounter += 1;
    return this.http.get(this.endpoint + '/get/' + name);
  }
  createIsp(isp: IspData) {
    this.apiHitCounter += 1;
    return this.http.post(this.endpoint + '/create', isp);
  }
  updateIsp(isp: IspData) {
    this.apiHitCounter += 1;
    return this.http.put(this.endpoint + '/update/' + isp._id, isp);
  }
  deleteIsp(id: string) {
    this.apiHitCounter += 1;
    return this.http.delete(this.endpoint + '/remove/' + id);
  }
}
