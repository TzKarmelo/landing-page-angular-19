import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  
  constructor(private formaBuilder: FormBuilder) { 

    this.contactForm = this.formaBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(10)]]
    });

  }  

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
