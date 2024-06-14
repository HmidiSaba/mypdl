import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-collab',
  templateUrl: './list-collab.component.html',
  styleUrls: ['./list-collab.component.scss']
})

export class ListCollabComponent implements OnInit {
  Enseignant :any;
  SearchText:any;
  p :number = 1;
  constructor() { }

  ngOnInit() {

  }

}