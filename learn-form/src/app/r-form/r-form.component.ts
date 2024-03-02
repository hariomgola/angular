import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-r-form',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './r-form.component.html',
  styleUrl: './r-form.component.css',
})
export class RFormComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;
  forbiddenUserNames = ['amar', 'aman'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.signUpForm.valueChanges.subscribe((value: any) => {
      console.log('value changes listener - ', value);
    });
    this.signUpForm.statusChanges.subscribe((value: any) => {
      console.log('Form status - ', value);
    });
  }
  setFormValue() {
    // This will set the full value of the form.
    this.signUpForm.setValue({
      userData: {
        username: 'hari',
        email: 'temp@temp.com',
      },
      gender: 'male',
      hobbies: [],
    });
    // This will set the one property of the form
    this.signUpForm.patchValue({
      userData: {
        username: 'temp',
      },
    });
  }

  buildForm() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onFormSubmit() {
    console.log('---->', this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobbie() {
    // dynamically adding the form and the hobbie over here
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getHobbies() {
    return <FormArray>this.signUpForm.get('hobbies');
  }

  // creating a custom validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forBiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'temp@temp.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
