import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { RestClientService } from '../services'
import { Client } from '../cls'

@Injectable()
export class ClientService {
  restService: RestClientService

  constructor(protected http: Http) {
    this.restService = new RestClientService("http://localhost:3000/client", http)
  }

  getAll(skip?: Number, limit?: Number): Observable<Client[]> {
    return this.restService.get(null);
  }

  get(id): Observable<Client> {
    return this.restService.get(id);
  }

  update(client: Client): Observable<Client>{
    return this.restService.put(client, client._id);
  }

  delete(client: Client): Observable<any> {
    return this.restService.delete(client._id);
  }
}

@Injectable()
export class ClientsResolver implements Resolve<Client[]> {
  constructor(private clientService: ClientService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Client[]> {
    return this.clientService.getAll();
  }
}

@Injectable()
export class ClientResolver implements Resolve<Client> {
  constructor(private clientService: ClientService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Client> {
    return this.clientService.get(route.params.id);
  }
}

