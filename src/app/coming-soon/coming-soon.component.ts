import { Component } from '@angular/core';
import { EmailUtentiService } from '../services/email-utenti.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent {

  emailForm!: FormGroup;
  showSuccessMessage = false;

  constructor(private firebase: EmailUtentiService, private formBuilder: FormBuilder) { }

  //Nascondi il popup dopo 5 secondi
  hideSuccessMessage(): void {
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000); // 5000 millisecondi = 5 secondi
  }

  ngOnInit(): void {

    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

  }

  onSubmit() {
    //console.log(this.emailForm);

    this.firebase.insertEmail(
      'https://veris-immobiliare-1f0f2-default-rtdb.europe-west1.firebasedatabase.app/utenti.json',
      { email: this.emailForm.value.email }
    ).subscribe(data => { })

    this.emailForm.reset();
    this.showSuccessMessage = true;
    this.hideSuccessMessage();
  }

  /*
  onSubmitdue() {
    //console.log(this.emailForm);

    this.firebase.insertEmail(
      'https://veris-immobiliare-1f0f2-default-rtdb.europe-west1.firebasedatabase.app/utentidue.json',
      { email: this.emailForm.value.email }
    ).subscribe(data => { })

    this.emailForm.reset();
    this.showSuccessMessage = true;
    this.hideSuccessMessage();
  }*/
  


}