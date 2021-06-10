import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost/application-back-end/mypage.php').subscribe(data => {
  
    this.data.push(data);
    console.log(this.data);
   
    
    }, error => console.error(error));
  
  }
  
  refresh()
  {
    this.data.length=0;
    this.http.get('http://localhost/application-back-end/mypage.php').subscribe(data => {
    this.data.push(data);
    
    console.log(this.data);
   
    
    }, error => console.error(error));
  }
  deleterepas(id: string)
  {
    var myFormData = new FormData();
      myFormData.append('id', id);
      return this.http.post('http://localhost/application-back-end/mypage.php', myFormData).subscribe(() => {
      
      
      alert("Repas has been deleted successfully.");
      this.refresh();
        
    });
  }
  ngOnInit(): void {
  }
}