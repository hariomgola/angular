const IntroductionToAngular = () => `
# Introduction to Angular
  - Angular is javaScript frameWork to allow you to craete reactive Single-page Application.
  - Single page application doesn't refresh/load when navigate around the pages.
# Angular Concept
  - Basic (binding and structure)
  - Component and DataBindings
  - Directives
  - Services & Dependency Injection
  - Routing
  - Observables
  - Forms
  - Pipes
  - Http
  - Authentication
  - Optimization & NgModules
  - Deployment
  - Animation & Testing
# Angular Different Version
  - Angular (Angular 1) have issue with performance for big application and it also termed as angular
  - Angular 2 - Released in 2016 and have many advantage over the orgional angular js
  - Angular 4 - Angular 3 was skipped due to internal issue as well as naming convention
  - Angular 9/10/11/12---17 - Angular team release every new version of angular in 6 months and follows symentaning approach
  - In Simple Angular is the end is a JS framework, changing your DOM('HTML') at RunTime!
# Setup angular Application or IDE
  - npm install -g @angular/cli    -   Install angular cli using the below command
  - ng new my-first-app            -   Craete a new project with project name as my-first-app
  - ng serve or npm start          -   To start the application
`;

const AngularArchitecture = () => `
# Angular App Architecture (Rendered)
  - Only [index.html] file is served in the browser by Angular.
  - [index.html] is the single page which served in a browser to rendered as a single page application.
  - In [index.html] you see [<app-root></app-root>] is changed by manipulating dom in real time to get the access for same.
  - In [main.ts] you see [platformBrowserDynamic().bootstrapModule(AppModule)] which bootstraps the AppModule component.
  - In [app.module.ts] you can see [bootstrap: [AppComponent]], bootstrap array which list all the components which angular use.
    
      |_ index.html                 (single page that going to render in browser)
        |_ main.ts                  (main.ts file contains menthod to bootstrap into the app.module.ts)
          |_ app.module.ts          (Contains all the bootstrap component array to renederde)
            |_ app.component.ts     (Contains the dependency for the component which going to be rendered)

 # Notes
   - @component, @Ngmodule is a decorater that will define the predefine functionality in angular
`;

const ComponentIntrocuction = () => `
# Angular Component (ng g c server)
  - Component are the key feature of Angular. Whole Application are divided into smaller component to build up the whole application.
  - Root/App Component are the main component Which we gona add another component into this.
  - Component is simply a typeScript class with special decorator [@Component] which tell Angular.
  - [@Component] Decorator told angular. I am a Angular component insted of a simple typeScript file.
  - While creating a new Component which we need to add same in our app.module.ts

# Using InlineTemplate HTML or CSS
  - For Using the Inline HTML and CSS we need to change below mentioned property in the component decorator.
    templateUrl   -     template
    styleUrls      -     style
  
  # Different ways to use component selectors
    - Use of selector in different html element
      selector: 'app-server'      -           <app-server></app-server>
      selector: '[app-server]'    -           <div app-server></div>
      selector: '.app-server'     -           <div class="app-server"></div>
`;

const DataBinding = () => `
# Data Binding (Communication b/w the typeScript and HTML)
  # Output Data ( TS -> HTML )
    - String Interpolation ({{data}})              | variable type is changed to string
    - Property Binding ([property]="data")         | variable type is maintained
  # Input Data (HTML -> TS) 
    - Event Binding ((event)="expression")
  # Two Way DataBinding
    - [(ngModel)] = "data"

# String Interpolation - {{}}
  - String interpolation is used to pass data from component file to html file.
  - String interpolation can only be able to output the string value only.
  - String interpolation will convert all value into string while passing it to the html file.

# Property Binding - []
  - Property binding is used to pass data from component file to html file.
  - Property binding can pass the data as it is. if value is boolean it will pass the boolean data only.

# Event Binding - ()
  - Event Binding is used to pass data from html file to component file
  - In event binding we have special symbol $event to provide value of target for same.

# Two way Binding - [(ngModel)]
  - Two way binging is used to pass interconnect the data within the html and ts file
  - It can be used with anytype of value and also used to disable the field as well as print someinput.
`;

const Directives = () => `
# Directives in Angular
  - Directives are instruction giving to the DOM.
  - Component are also a kind of directives since we are giving instruction to DOM.
# custome Directives
  - Will going to use in later section
# Example of custom directives
--- TypeScript
  @Directive({
    selector:'[appTurnGreen]'
  })
  export class TurnGreenDirectives{
  }
--- HTML
<p appTurnGreen> Text is in Green color </p>
# Build in Directives
  - *ngIf
  - *ngFor
`;

module.exports = {
  "Introduction To Angular": IntroductionToAngular,
  "Angular Architecture": AngularArchitecture,
  "Component Introcuction": ComponentIntrocuction,
  "Data Binding": DataBinding,
  Directives: Directives,
};
