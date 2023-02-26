/**
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
    - Angular 9/10/11/12 - Angular team release every new version of angular in 6 months and follows symentaning approach

    - In Simple Angular is the end is a JS framework, changing your DOM('HTML') at RunTime!

  # Setup angular Application or IDE
    - npm install -g @angular/cli    -   Install angular cli using the below command
    - ng new my-first-app            -   Craete a new project with project name as my-first-app
    - ng serve or npm start          -   To start the application

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

  # Data Binding (Communication b/w the typeScript and HTML)
      # Output Data ( TS -> HTML )
        - String Interpolation ({{data}})              | variable type is changed to string
        - Property Binding ([property]="data")         | variable type is maintained
      # Input Data (HTML -> TS) 
        - Event Binding ((event)="expression")
      # Two Way DataBinding
        - [(ngModel)] = "data"













































 */
