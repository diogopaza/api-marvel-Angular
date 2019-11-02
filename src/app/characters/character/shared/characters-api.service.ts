import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  publicKey ='ad1eb0732b0af6ca4e60f5e816810074';
  privateKey = '7afc78cb1c6914aced3e82001b54f7e68215cf41';
  timeStamp = 'secret';
  stringToHash = this.timeStamp + this.privateKey + this.publicKey;
  hash = Md5.hashStr(this.stringToHash);
  URL_API = 'http://gateway.marvel.com/v1/public/characters?ts='+this.timeStamp
   +'&apikey='+this.publicKey
    +'&hash='+this.hash;
  
  constructor(private http: HttpClient) { }
  getAllCharacters(): Observable<any>{
    console.log("executando observable da api")
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any) => data.data.results))
  }

}
