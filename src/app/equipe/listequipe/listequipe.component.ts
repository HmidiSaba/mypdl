import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/service/equipe.service';

@Component({
  selector: 'app-listequipe',
  templateUrl: './listequipe.component.html',
  styleUrls: ['./listequipe.component.scss']
})
export class ListequipeComponent implements OnInit {
title: any;
equipes  : any[] = [];

  constructor(
    private equipeService:EquipeService,
    private router : Router,
    public fb:FormBuilder,

  ){
    
  }
  ngOnInit(): void {
    this.title ="Liste des equipes ";
    this.getEquipes();
  
  }

  getEquipes():void{
    this.equipeService.getEquipes().subscribe(data=>{
      console.log("ici data :" ,data);
      this.equipes =data;
    })
  }

  delete(id: any){
    this.equipeService.deleteEquipe(id).subscribe(data => {
     this.ngOnInit();
    })
    }

    update(id: any){
      this.router.navigate(['/equipe', id])
  }


}
