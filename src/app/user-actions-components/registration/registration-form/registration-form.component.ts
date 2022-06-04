import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  @Input() form: any;

  @Output() formSubmitted = new EventEmitter();
  constructor() { }

  onSubmit(): void {
    this.formSubmitted.emit();
  }
}
