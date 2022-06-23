import { Component, OnInit } from '@angular/core';
import {UselessFact} from '../interfaces/useless-fact.interface';
import {HttpClient} from '@angular/common/http';
import {ClipboardService} from 'ngx-clipboard';
import {ToastrService} from 'ngx-toastr';
import {UselessFactsService} from '../services/useless-facts.service';

@Component({
	selector: 'app-useless-facts',
  template: `
    <div class="container p-5 mx-auto col-lg-5">
      <div class="bg-dark text-light rounded p-3">
        <h4>Useless Facts</h4>
      </div>

      <div class="card my-2">
        <div class="card-body">

          <p>{{uselessFact.text}}</p>

          <p class="fst-italic text-secondary small">
            Source: <a [href]="uselessFact.source_url" class="link-secondary">{{uselessFact.source}}</a>
          </p>

        </div>

        <div class="card-footer">
          <button class="btn btn-primary me-2" (click)="loadFact()">Get Fact</button>
          <button class="btn btn-primary mx-2" (click)="copyFactUrl()">Share This Fact</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./useless-facts.component.sass']
})
export class UselessFactsComponent implements OnInit {

  uselessFact: UselessFact = {
    id: '', language: '', permalink: '', source: '', source_url: '', text: ''
  };

  constructor(private uselessFactService: UselessFactsService,
              private clipboard: ClipboardService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadFact();
  }

  loadFact() {
    this.uselessFactService.getUselessFact()
      .subscribe(
        fact => this.uselessFact = fact
      );
  }

  copyFactUrl() {
    this.clipboard.copy(this.uselessFact.permalink);
    this.toastr.success('Copied useless fact to clipboard!');
  }

}
