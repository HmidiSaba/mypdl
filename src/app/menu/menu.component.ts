import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
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

