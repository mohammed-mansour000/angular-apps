import { Observable } from 'rxjs';
import { Privilege } from './../models/privilege';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  privilegeUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPrivileges(): Observable<Privilege[]>{
    return this.http.get<Privilege[]>(this.privilegeUrl + "privileges");
  }

  addPrivilege(pr: Privilege): Observable<any>{
    return this.http.post<any>(this.privilegeUrl + "add-privilege", pr);
  }

  deletePrivilege(privilegeId: number): Observable<any>{
    return this.http.delete<any>(this.privilegeUrl + "delete-privilege/" + privilegeId);
  }


  getOnePrivilege(privilegeId: number): Observable<Privilege>{
    return this.http.get<Privilege>(this.privilegeUrl + "privilege/" + privilegeId);
  }

  editPrivilege(pr: Privilege, id: number): Observable<any>{
    return this.http.put<any>(this.privilegeUrl + "edit-privilege/" + id, pr);
  }
}
