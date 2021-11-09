import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roleUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(this.roleUrl + "roles");
  }

  addRole(role: Role): Observable<any>{
    return this.http.post<any>(this.roleUrl + "add-role", role);
  }

  deleteRole(roleId: number): Observable<any>{
    return this.http.delete<any>(this.roleUrl + "delete-role/" + roleId);
  }

  getOneRole(roleId: number): Observable<Role>{
    return this.http.get<Role>(this.roleUrl + "role/" + roleId);
  }

  editRole(pr: Role): Observable<any>{
    return this.http.put<any>(this.roleUrl + "edit-role/", pr);
  }
}
