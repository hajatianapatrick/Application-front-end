import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-repas',
  templateUrl: './add-repas.component.html',
  styleUrls: ['./add-repas.component.css']
})
export class AddRepasComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }
  get f() { return this.registerForm.controls; }
  onSubmit() {
  this.submitted = true;
        if (this.registerForm.invalid) {
    
              return;
        }
    else
    {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    
    myFormData.append('name', this.registerForm.value.name);
    myFormData.append('price', this.registerForm.value.price);
    myFormData.append('quantity', this.registerForm.value.quantity);
    return this.http.post('http://localhost/application-back-end/mypage.php/', myFormData).subscribe(() => {
      this.router.navigateByUrl('repas');
      
      
        
    });
    }
    }
  ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            quantity: ['', [Validators.required]]
        });
  }

}
