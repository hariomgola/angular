import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent implements OnInit {
  // Data for String Interpolation
  sData: any = 'This is String Interpolation Data';
  sDataFunction() {
    return 'Hi I am sData from function';
  }
  // Data for Property Biniding
  disableCheck: boolean = false;
  // Data for Event Bindinng
  eData = "Currently no data present"
  onButtonClickFunction(){
    this.eData = "Button is Clicked"
  }
  textData:any = ''
  onTextInput(e:Event){
    console.log('onTextInput---->',(<HTMLInputElement>e.target).value)
    this.textData = (<HTMLInputElement>e.target).value
  }

  constructor() {
    setTimeout(()=>{
      this.disableCheck = true
      console.log('Button disable --',this.disableCheck)
    },2000)
  }

  ngOnInit(): void {}
}
