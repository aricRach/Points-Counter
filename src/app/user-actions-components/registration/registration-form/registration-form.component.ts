import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Input() form: any;

  @Output() formSubmitted = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formSubmitted.emit();
  }
}
