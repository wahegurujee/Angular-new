import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { RestClientService } from '../../shared/services/rest-client.service';


@Injectable()
export class Module1Service {

  constructor(private restClientService: RestClientService) {
  }

  getUsers() {
    return this.restClientService.get(environment.serviceUrls.getUsers);
  }

  createUser(dataToBeSent) {
    return this.restClientService.post(environment.serviceUrls.createUser, dataToBeSent);
  }

  updateUser(dataToBeSent) {
    return this.restClientService.put(environment.serviceUrls.updateUser, dataToBeSent);
  }

  deleteUsers(dataToBeSent) {
    return this.restClientService.delete(environment.serviceUrls.deleteUsers, dataToBeSent);
  }

}
