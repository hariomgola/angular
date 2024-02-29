import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-storage',
  standalone: true,
  imports: [],
  templateUrl: './code-storage.component.html',
  styleUrl: './code-storage.component.css',
})
export class CodeStorageComponent implements OnInit {
  sessionListener: any;
  constructor() {}
  ngOnInit() {
    this.bindSession();
  }
  bindSession() {
    try {
      if (typeof window !== undefined) {
        console.log(` |> Local Storage event Binded`);
        this.sessionListener = this.storageEventBindingFunction.bind(this);
        window.addEventListener('storage', this.sessionListener);
      }
    } catch (error) {
      //
    }
  }
  storageEventBindingFunction(event: any) {
    console.log(` |> ${event}`);
    if (event.key === 'isData' && event.value === 'yes') {
      console.log(` |> ${event.key} -- ${event.value}`);
    }
  }
}
