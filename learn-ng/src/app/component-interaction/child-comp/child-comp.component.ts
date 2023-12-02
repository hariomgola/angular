import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: [],
})
export class ChildCompComponent implements OnChanges {
  // Simple decorator I can directly access the property masterData and outputMasterData
  @Input() masterData = '';
  @Output() outputMasterData = '';
  //
  @Input('Mdata') _masterData = '';
  @Output('OmData') _outputMasterData = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('|> ', changes);
  }
}
