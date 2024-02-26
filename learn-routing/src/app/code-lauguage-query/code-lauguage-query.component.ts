// Passing the data through query
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'code-lauguage-query',
  standalone: true,
  imports: [],
  templateUrl: './code-lauguage-query.component.html',
  styleUrl: './code-lauguage-query.component.css',
})
export class CodeLauguageQueryComponent implements OnInit, OnDestroy {
  queryParamsData = '';
  routerSub?: Subscription;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.routerSub = this.route.queryParams.subscribe((queryParams: Params) => {
      this.queryParamsData = queryParams['dataName'];
    });
  }
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
