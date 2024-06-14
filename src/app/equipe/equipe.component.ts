import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})


export class EquipeComponent implements OnInit {
  numero: any;
  matricule: any;
  annee: any;
  date: any;
  anneeNais: any;
  nationaliteList: any = [];
  specialiteList: any = [];
  domaineList: any = [];
  classeList: any = [];
  classe:any;
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
  constructor(

  ) { 
    this.title ="Ajouter equipe";
  }
  ngOnInit() {
  }}