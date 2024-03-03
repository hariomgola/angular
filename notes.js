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

const ComponentIntroduction = () => `
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
  - There is 2 type of Directives in Angular
      $ Attribute Directive  - Didn't manipulate the dom
            - ngClass
            - ngStyle
            - ngModel
      $ Structural Directive - Directly manipulate the dom
            - *ngIf
            - *ngFor
            - *ngSwitch

# Example of custom directives
  $ TypeScript
    @Directive({
      selector:'[appTurnGreen]'
    })
    export class TurnGreenDirectives{
    }
  $ HTML
    <p appTurnGreen> Text is in Green color </p>

# Important notes
 - Use of * in Structure Directives means that it will going to change the structure of the DOM.
 - <p [ngClass]="{odd:num%2 !=0}"></p> - Here the odd class will only be applies if num will not retun 0 when divided by 2
 - <p [ngStyle]="{backgroundColor: num%2==0 ? 'blue': 'red'}"></p> - Here odd will be red and even will be blue
 - Command for creating custom directives ng g d highlighting

# Creating a custom Directive (Attribute directive)

 $ Typescript
 import { Directive, ElementRef, OnInit } from '@angular/core';
 @Directive({
   selector: '[appHighlighting]',
 })
 export class highlightingDirective implements OnInit {
   constructor(readonly elementRef: ElementRef) {}
   ngOnInit(): void {
     this.elementRef.nativeElement.style.backgroundColor = 'green';
   }
 }
 $ Html
 <p appHighlighting>Directive Component</p>
 
# Creating a custom Directive (Structural Directive)
 - Temp Code to show how structural directives work
    <p *ngIf="true">Some data</p>
    $ Actual How Angular reads it
    <ng-template [ngIf]="true">
      <p> Some data</p>
    </ng-template>

 - Sample code for Custom Structural Directives
  import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef,
  } from '@angular/core';
  @Directive({
    selector: '[unless]',
  })
  export class UnlessDirective implements OnInit {
    @Input() set unless(condition: boolean) {
      if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
    }
    constructor(
      private templateRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
    ) {}
    ngOnInit() {}
  }

# UseCase of Structural Directives
  *ngif
   - Used to conditional view the tag on behalf of condition passed
   - *ngIf="condition"
  *ngIf-else
   - Used to conditional view the if and else tag work simpilar to programming if else
   - *ngIF="condition; else template_name"
   - ngStyle and ngClass also work on same manner.
  *ngFor
   - Used to iterate throught the list or an arrray
   - *ngFor="let item of Items; index as i"
  *ngSwitch
   - Used as same as programming switch
    <div [ngSwitch]="'data'">
       <p *ngSwitchCase="'data'">Data is present<p>
       <p *ngSwitchDefault>No Data is Present</p> 
    </div>
`;

const componentInteraction = () => `
# Component interaction
 - @Input(): To pass the value from child component to parent component.
 - @Output(): To pass the value from child component to parent component.

# Component interaction using alais
 - @Input('inData'): To pass the value from child component to parent component as inData.
 - @Output('outData'): To pass the value from child component to parent component as outData.

# Remebering 
 - [] -> Input from parent component
 - () -> Output from parent component

 // Simple decorator I can directly access the property masterData and outputMasterData
 @Input() masterData = '';
 @Output() outputMasterData = new EventEmitter<any>();
 // I can't directly access the property of _masterdata and _outputMasterdata
 // I have to use Mdata and OmData for input and output respectiverly in parent component
 @Input('Mdata') _masterData = '';
 @Output('OmData') _outputMasterData = new EventEmitter<any>();

# View encapsulation
 - Its majourly used for applying css outside the component or dynamically injecetd component
 - View Encapsulation has internally 3 properties 
   # Emulated - By default.
   # None - CSS will be applied globally.
   # Native - CSS will be applied to shadow dom present inside the component.

 @Component({
  selector:'app-hari',
  template:'<h3>App is working<h3>',
  style: [''],
  encapsulation: ViewEncapsulation.None
 })

# Local reference in template.
 - Html Code
  <input type="text" #nameInput>
  <button (click)="onButtonClick(nameInput)">Add Name</button>
 - TS Code
  onButoonClick(nameInput: HTMLInputElement){
    console.log('-=>',nameInput.value)
  }

# Local reference (ViewChild)
 - Html Code
  <input type="text" #textInput>
 - TS code
  import {ViewChild} from '@angular/core'
  @ViewChild('textInput',{static:true}) textInput : ElementRef
  ngonInit(){
    console.log('----->',this.textInput)
  }

# ng-content (Important topics)
 - Html Code
  $ Parent Component
    <app-child>
      <p> Data from the parent component </p>
    <app-child>

  $ Child Component
   <ng-content></ng-content>  // Will provide all the content present inside the app-child selector

# ContentChild
 - Its main use is when paid is loaded we can't acccess of viewchild property on afterinit.
 - But with the help of ContentChild we can directly access the content child.
`;

const componentLifeCycle = () => `
# Angular LifeCycle
  - ngOnChange             - Called after a bound input property changes.
  - ngOnInit               - Called once the component is initialized. (Will run after the constructor)
  - ngDoCheck              - Called during every change detection run.
  - ngAfterContentInit     - Called After content (ng-content) has been projected into view.
  - ngAfterContentChecked  - Called every time the  projected content has been checked.
  - ngAfterViewInit        - Called after angular initialize the component view and children
  - ngAfterViewChecked     - Called every time the view (and child views) has been checked.
  - ngOnDestry             - Called once the component is about to be destroyed.
`;

const angularServices = () => `
# Angular Services
 - Angular Services is required to elimate the dublicasy of code.
 - Angular uses hierarchical injector (dependency injector).

# Dependency Injection
 - As its name suggest dependency + injection
 - Here dependency mean any service we are using in our component that means our component depends on that service.
 - Injection means injecting the dependency into our class.

# Sample Service Code

export class ConsoleService {
  log(data: any) {
    console.log(' |> ',data);
  }
}

# Component Code
import {ConsoleService} from './consoleService.service'
@Component({
  selector:'',
  providers:[ConsoleService] // here if we write the service it will create an instance of the service
})
constructor(readonly consoleService:ConsoleService)
consoleService.log('console message');

-- Advisable is to always use the services with injectable in angular 6+
@Injectable({
  providedIn: 'root'
})
`;

const RoutingInAngular = () => `
# Routing in Angular
 - Routing help us to navigate within the 2 component in application which is not connected directly.
 - Things Required to setup routing in Angular
    * Step 1: we have to add the <base href="/"> tag in our index.html
    * Step 2: we simply need to create app-routing.module.ts
         - import app-routing.module.ts to app.module.ts and put it in import array.
         - In app.routing.module.ts we simple need to pass the route in form of object
            {
              path:'userdefine path',
              component:'component which above path is navigating to'
            }
         - last we simply need to use <router-outlet></router-outlet> where we want to show the route component
         
# Important points  
 - routerLink='/user' - this is the absolute path
 - routerLink='user' - this is relative path
 - routerLink='../user' - this is the absolute path whic suggested to go only one level up

# 1 -- Padding data through Route
 - { path:'user/:id',component: userComponent }
 - here id will be any varaiable adn can be easily retrieve with help of ActivatedRoute.
 - Like wise we can also bind 2 or more data with it as mentioned below.
 - { path:'user/:id/:name', component: userComponent }

 ~ Code to retreive the data
    constructor(private route: ActivatedRoute){ }
    idData = this.route.snapshot.params['id']
    nameData = this.route.snapshot.params['name']

 ~ url - localhost:4200/users/1/hari   here id will be 1 and name will be hari
 ~ Above mentioned code will not work when i added <a [routerLink]=['/user','100','Java']>Not Work<a/>
 above scenerio will not work even though the url is changed because angular already loaded the component.
 to make the above scenerio work we are going to use the observables.

 ~ Code to retreive data using observables.
   constructor(private route: ActivatedRoute){ 
    this.route.params
           .subscribe((params:Params)=>{
            this.idData = params['id']
            this.nameData = params['name']
           })
   }

# 2 -- Passing data through Query parametes and fragments (?,&&)
 - Using HTMl Code
   <a
     [routerLink]="['/users',5,'edit']"
     [queryParams]="{isAdminUser:'false'}"
     [fragment]= "loading"
     ></a>
 - Using TypeScript Code
  this.route.navigate(['/users',5,'edit'], {queryParams:{isAdminUser:'false'}}, fragment:'loading')
 
 - Url - localHost:4200/users/5/edit?isAdminUser=false#loading 

 - Reteriving code to get the query params
    constructor(private route:ActivatedRoute){}
    ngOnInit(){
      console.log(this.route.snapshot.queryParams)
      console.log(this.route.snapshot.fragment)
    }

# queryParamsHandling
 this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  

# WildCart Route
 - Wildcart route is used when the we simply configure the landing page of application or an error page in the application.
 - Landing page - Execute when general url is trigerred in application
      {
        path:'',
        component: landingPageComponent,
      }
 - Error page - Execute when user navigate to some route which is not configured or not available in application. 
      {
        path:'**',
        component: errorPageCompoent,
      }

# Introduction to Route Guards
 - Running some function when the component is going to execute. Example we want to provide some route to admin user or login user only.
 - 
`;

const GuardInAngular = () => `
# Angular Guard
 - Angular Guard is used to restrict the user from entering into certain routes which the user don't have permission to it.
 - Its mainly for 3 type
   ~ canActivate       - Used the Protect the route when used
   ~ canActivateChild  - Used to protect only the child route when used. Parent route will be free to roam.
   ~ canDeactivate     - Used to check if user is ready to move to another route or not. 
`;

const FormAngular = () => `
# Angular Forms
 - Angular User 2 approach to interact and work with form 
 - Template Driven - angular infers the form object from the dom (Mainly written in template).
 - Reactive - Form is created programmatically and synchronized with the dom (Mainly written in ts file).

# Template Driven Froms
 - In Template driven form approach we are registering all the property ans code directly in html.
 - we are making user of ngModel and name="property value", key value which we need to have access for.
 - Submit should be pass like this - (ngSubmit)="onSubmitTeamplateDrivenForm(f)" #f="ngForm" in form level
 - Type Script code getting the value should be 
    onSubmitTeamplateDrivenForm(form: NgForm) {
      console.log('|> Angular template driven form value - ', form['value']);
    }
 - Please refer to the t-form.component files in ng-learn for refernce
 - We are also access the form without even passing the form refernce on submit with the help of viewChild.
   @ViewChild('f') signUpForm?: NgForm;
   onSubmitByViewChild() {
      console.log(
        '|> Angular template driven form with help of view child - ',
        this.signUpForm?.['value']
      );
    }
  
# State in Template Driven Forms
 - ngModel when putten in any tag. It will registered the property of an form
 - ngModelGroup - Help to group the propertied inside the conatiner or in the div tag

# Reactive Form
 - Form is created dynamically in typescript file all logic and validation done here.
 - Reactive form follows the below mentioned hierachy in html template.
     > formGroup
        > formGroupName
            > formControlName
     > formArrayName (important)
`;

const PipeInAngular = () => `
# Pipe
 - Pipe are feature which basically allows the you to transfer the output into template
 - Pipe are of 2 type on basis of creation and 2 type on basis of functionality.
   > Build in pipe
   > Custom pipe
   > pure pipe
   > impure pipe
`;

module.exports = {
  "Introduction To Angular": IntroductionToAngular,
  "Angular Architecture": AngularArchitecture,
  "Component Introduction": ComponentIntroduction,
  "Data Binding": DataBinding,
  "Directives in Angular": Directives,
  "Component Interaction": componentInteraction,
  "Component LifeCycle": componentLifeCycle,
  "Services in Angular": angularServices,
  "Routing in Angular": RoutingInAngular,
  "Guards in Angular": GuardInAngular,
  "Forms in Angular": FormAngular,
  "Pipes in Angular": PipeInAngular,
};
