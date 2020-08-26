import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Hub } from '../dto/hub.model';
import { PickUp } from '../dto/pickup.model';
import { UrlConstant } from './url.constant';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  constructor(private http: HttpClient) { }


  hubSubject = new BehaviorSubject<Hub>(null);


  changeHubContext(h: Hub) {
    this.hubSubject.next(h);
  }

  getAllHubs(): Observable<Hub[]> {
    return this.http.get<Hub[]>(UrlConstant.GET_ALL_HUB).pipe(tap(t => { }));
  }

  getHubSubscritpion(): Observable<Hub> {
    return this.hubSubject.asObservable();
  }

}
