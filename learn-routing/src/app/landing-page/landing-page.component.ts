import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ng-landing-page',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  passingData = {
    lang: '',
    langType: '',
  };
  queryParamsData = '';
  stateData: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  onInputTextFunction(type: string, event: Event) {
    const inputValue = (<HTMLTextAreaElement>event.target)?.value;

    if (type === 'language') {
      this.passingData.lang = inputValue;
      return;
    }

    if (type === 'languageType') {
      this.passingData.langType = inputValue;
      return;
    }
  }

  onPassingData() {
    this.router.navigate(
      ['code-language', this.passingData.lang, this.passingData.langType],
      {
        relativeTo: this.route,
      }
    );
  }

  onInputTextFunctionQueryParams(event: Event) {
    const inputValue = (<HTMLTextAreaElement>event.target)?.value;
    this.queryParamsData = inputValue;
  }

  onPassingDataQueryParams() {
    this.router.navigate(['code-lauguage-query'], {
      queryParams: { dataName: this.queryParamsData },
    });
    // Also in the same manner we can pass the fragment as well
    // this.router.navigate(['code-lauguage-query'], {
    //   queryParams: { dataName: this.queryParamsData },
    //   fragment: 'loading',
    // });
  }

  onPassingNavigateUrl() {
    this.router.navigateByUrl('/code-launguage-navigatebyurl', {
      state: { data: this.stateData },
    });
  }
}
