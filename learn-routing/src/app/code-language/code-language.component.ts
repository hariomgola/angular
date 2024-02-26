// Passing the Data through routing
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'code-language',
  standalone: true,
  imports: [],
  templateUrl: './code-language.component.html',
  styleUrl: './code-language.component.css',
})
export class CodeLanguageComponent implements OnInit, OnDestroy {
  langData: { lang?: string; type?: string } = {
    lang: '',
    type: '',
  };
  routerSub?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routerSub = this.route.params.subscribe((params: Params) => {
      this.langData.lang = params['lang']; // check the router file for params['lang']
      this.langData.type = params['type']; // check the router file for params['type']
    });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
