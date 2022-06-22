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

	apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';
	uselessFact: UselessFact = {
		id: '', language: '', permalink: '', source: '', source_url: '', text: ''
	};

	constructor(private http: HttpClient,
              private clipboard: ClipboardService,
              private toastr: ToastrService) {}

	ngOnInit(): void {
		this.loadFact();
	}

	loadFact() {
		this.http.get<UselessFact>(this.apiUrl)
			.subscribe(
				data => {
					this.uselessFact = data;
				}
			);
	}

	copyFactUrl() {
		this.clipboard.copy(this.uselessFact.permalink);
		this.toastr.success('Copied useless fact to clipboard!');
	}



}
