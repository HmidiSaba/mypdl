import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe';
import { EquipeService } from '../service/equipe.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})


export class EquipeComponent implements OnInit {
listEquipes : any[] | undefined;
equipes: Equipe[] =[];
equipeForm : any;
id : number | undefined;
mode : string = ''




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
 
  constructor(
    public equipeService: EquipeService,
    private router : Router,
  
    private route: ActivatedRoute ,
    public fb: FormBuilder

  ) { 
    this.title ="Ajouter equipe";
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
 
   
    if ( id  == null) {
      this.infoForm();
      this.title = "Ajout equipe";
      this.mode ='add'
  
      
    }
    else { 
      this.mode ='update'
      this.id = +id;
      this.title = "Modification equipe";
      this.infoForm();
      this.equipeService.getById(+id).subscribe(data => {
        console.log(data);
        this.equipeForm.controls.nomEquipe.setValue(data.nomEquipe);
        this.equipeForm.controls.projectName.setValue(data.projectName);
        
        
      })
     }
    


  

  }

  addEquipe(){
    if(this.mode == 'add'){   
     console.log(this.equipeForm.value)
      this.equipeService.createEquipe(this.equipeForm.value).subscribe(
        data =>{ console.log("add ok " , data);
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/listequipe']);
        });
        },
        error => {
          console.error('Error creating project', error);
        }
      );
     }else {



       this.equipeService. update(this.id , this.equipeForm.value).subscribe(
         data =>{ console.log(" update  ok " , data);
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/listequipe']);
        });
         },
         error => {
           console.error('Error creating equipe', error);
         }
       );
     
     }
    }
  




  infoForm() {
    this.equipeForm =  this.fb.group({
      id_eq: null,
      nomEquipe: ['', [Validators.required]],
      projectName: ['', [Validators.required]],

      
      
    });
  }


 
}