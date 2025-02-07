import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone:false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData = { name: '', email: '', message: '' };

  constructor(private http: HttpClient) {}

  submitForm(): void {
    // this.http.post('https://localhost:5001/api/contact', this.formData).subscribe(response => {
    //   alert('Message sent successfully!');
    // });
  }

  
  onSubmit() {
    alert("Thank you for reaching out! I will get back to you soon.");
  }
}
