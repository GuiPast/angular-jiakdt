import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../entities/item.model';
import { Observable } from 'rxjs';

const URL_BASE:string= 'http://localhost:3000/item-list';
const httpOptions={
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ItemListService{
    
    constructor(private http: HttpClient){}
    getItemList(){
        return this.http.get(URL_BASE);
    }
    
    getItemId(id: number) {
        const url = `${URL_BASE}/${id}`;
        return this.http.get(url);
    }

    updateItem(item:Item): Observable<Item>{
        const url = `${URL_BASE}/${item.id}`;
        return this.http.put<Item>(url,item,httpOptions);
    }
    
    deleteItem(id:number):Observable<Item>{
        const url = `${URL_BASE}/${id}`;
        return this.http.delete<Item>(url);
    }

    addItem(item:Item){
        const url = `${URL_BASE}/`;
        return this.http.post<Item>(url,item,httpOptions);
    }

    
}