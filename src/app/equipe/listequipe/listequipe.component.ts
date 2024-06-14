import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listequipe',
  templateUrl: './listequipe.component.html',
  styleUrls: ['./listequipe.component.scss']
})
export class ListequipeComponent implements OnInit {
title: any;
  constructor(){
    this.title ="Liste des equipes ";
  }
  ngOnInit(): void {
  }

}
