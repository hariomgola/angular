import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: `
    <p>{{ componentHeader }}</p>
    <ng-container>
      <div>
        <p>{{ masterData }}</p>
        <p>{{ _masterData }}</p>
      </div>
      <button (click)="onClickInputFiled()">child -> parent</button>
    </ng-container>
  `,
  styleUrls: [],
})
export class ChildCompComponent implements OnChanges {
  componentHeader = 'Child Component';
  // Simple decorator I can directly access the property masterData and outputMasterData
  @Input() masterData = '';
  @Output() outputMasterData = new EventEmitter<any>();
  // I can't directly access the property of _masterdata and _outputMasterdata
  // I have to use Mdata and OmData for input and output respectiverly in parent component
  @Input('Mdata') _masterData = '';
  @Output('OmData') _outputMasterData = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('|> ', changes);
  }
  onClickInputFiled() {
    this.outputMasterData.emit({
      data: 'JavaScript',
      Launguage: 'FrontEnd',
    });
    this._outputMasterData.emit({
      data: 'Java',
      Language: 'BackEnd',
    });
  }
}
