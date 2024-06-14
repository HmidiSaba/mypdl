import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-collab',
  templateUrl: './add-collab.component.html',
  styleUrls: ['./add-collab.component.scss']
})

export class AddCollabComponent implements OnInit {
  numero: any;
  matricule: any;
  annee: any;
  date: any;
  anneeNais: any;
  nationaliteList: any = [];
  specialiteList: any = [];
  domaineList: any = [];
  classeList: any = [];
  etablissementList: any = [];
  niveauList: any = [];
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message: any;
  submitted = false;
  title: any;
  isValid = true;
  id !:number;
  constructor() { }
  
  ngOnInit() {

}}


