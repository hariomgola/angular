import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'child-lifecycle',
  template: `<p>{{ counter }}</p>
    <p>Child LifeCycle Component</p>
    <ng-content></ng-content>`,
})
export class ChildLifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() parentCounter = 0;
  counter = 0;
  constructor() {
    this.selfCallingFunction();
    console.log('=-> constructor');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('=-> ngOnChanges');
  }
  ngOnInit() {
    console.log('=-> ngOnInit');
  }
  ngDoCheck() {
    console.log('=-> ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('=-> ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('=-> ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('=-> ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('=-> ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('=-> ngOnDestroy');
  }
  selfCallingFunction() {
    setTimeout(() => {
      console.log('=-=-=-=--> Data is changing <--=-=-=-=');
      this.counter += 1;
      this.selfCallingFunction();
    }, 2000);
  }
}
