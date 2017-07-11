import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { RestClientService } from '../services'
import { Driver } from '../cls'

@Injectable()
export class DriverService {
  restService: RestClientService

  constructor(protected http: Http) {
    this.restService = new RestClientService("http://localhost:3000/driver", http)
  }

  getAll(skip?: Number, limit?: Number): Observable<Driver[]> {
    return this.restService.get(null);
  }

  get(id): Observable<Driver> {
    return this.restService.get(id);
  }

  update(driver: Driver): Observable<Driver>{
    return this.restService.put(driver, driver._id);
  }

  delete(driver: Driver): Observable<any> {
    return this.restService.delete(driver._id);
  }
}

@Injectable()
export class DriversResolver implements Resolve<Driver[]> {
  constructor(private driverService: DriverService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Driver[]> {
    return this.driverService.getAll();
  }
}

@Injectable()
export class DriverResolver implements Resolve<Driver> {
  constructor(private driverService: DriverService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Driver> {
    return this.driverService.get(route.params.id);
  }
}

