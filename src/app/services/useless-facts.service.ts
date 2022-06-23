import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UselessFact} from '../interfaces/useless-fact.interface';

@Injectable({
  providedIn: 'root'
})
export class UselessFactsService {

  apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';

  constructor(private http: HttpClient) { }

  getUselessFact() {
    return this.http.get<UselessFact>(this.apiUrl);
  }
}
