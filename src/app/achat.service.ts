import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AchatService {

  private _achatUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  private headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') ) };

  postFile(
 
    prix: string,
    tel: string 
    ){
      const endpoint = 'http://localhost:8000/api/achat';
      const formData: FormData = new FormData();


      formData.append('prix', prix);
      formData.append('tel', tel);
    
      return this.http.post(endpoint, formData,this.headers);
  
    }
}
