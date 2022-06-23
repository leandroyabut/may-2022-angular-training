import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UselessFact} from './useless-fact.interface';
import {ClipboardService} from 'ngx-clipboard';
import {ToastrService} from 'ngx-toastr';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
  }


}
