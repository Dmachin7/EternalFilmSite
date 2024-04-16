import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'; // Import emailjs-com instead of emailjs

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  active = "hide";
  blur = "nothing";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      more_info: ['', Validators.required],
    });
  }

  async send() {
    emailjs.init('MCcnwyu5O2xdIM28G');
    await emailjs.send("service_5huoqtr", "template_kgxwedm", {
      to_name: "Eternal Film & Production Co.",
      full_name: this.form.value.full_name,
      email: this.form.value.email,
      date: this.form.value.date,
      more_info: this.form.value.more_info,
      reply_to: this.form.value.email
    });

    this.blur = 'blur';
    this.active = 'show';

    setTimeout(() => {
      this.blur = 'nothing';
      this.active = 'hide';
    }, 5000);

    this.form.reset();
  }
}
