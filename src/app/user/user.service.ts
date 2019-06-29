import { Injectable} from '@angular/core';
import { Subject,Observable} from 'rxjs';

@Injectable()
export class UserService {

  constructor() { }

  private userDetails:any;
  
  public setUserDetails(user): void {
    this.userDetails = user;
  }

  public getUserDetails(): any{
    return this.userDetails;
  }
}