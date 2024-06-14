import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logOut() {
  throw new Error('Method not implemented.');
  }
   name :any;
   id :any;
   role : any;
  userService: any;
  
    ngOnInit(): void {
      this.name = localStorage.getItem("name");
      this.id = localStorage.getItem("idUser");
      this.role =localStorage.getItem("role");
    }
  
  }
  