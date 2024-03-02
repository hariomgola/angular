import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-t-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './t-form.component.html',
  styleUrl: './t-form.component.css',
})
export class TFormComponent {
  @ViewChild('f') signUpForm?: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  userFormData = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
    isSubmitted: false,
  };

  constructor() {}

  onSubmitTeamplateDrivenForm(form: NgForm) {
    console.log(`|> Angular template driven form value - `, form['value']);
  }

  onSubmitByViewChild() {
    this.userFormData.isSubmitted = true;
    console.log(
      `|> Angular template driven form with help of view child - `,
      this.signUpForm
    );
    this.userFormData.username = this.signUpForm?.value.userData.username;
    this.userFormData.email = this.signUpForm?.value.userData.email;
    this.userFormData.secretQuestion = this.signUpForm?.value.secret;
    this.userFormData.answer = this.signUpForm?.value.questionAnswer;
    this.userFormData.gender = this.signUpForm?.value.gender;

    // reseting our form
    this.signUpForm?.reset();
  }

  suggestUserName() {
    // Below methord will write all the value inspite of user has write
    if (false) {
      this.signUpForm?.setValue({
        userData: {
          username: 'AdminUser',
          email: '',
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'male',
      });
    }

    // Below methord will only write the value of username as provided
    this.signUpForm?.form.patchValue({
      userData: {
        username: 'hols',
      },
    });
  }
}
