import { Component, OnInit, Inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjetService } from 'src/app/service/projet.service';
import { Project } from 'src/app/model/project';
import { Project2Service } from 'src/app/service/project2.service';
import { ListProjectComponent } from '../list-project/list-project.component';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-project.component.html',
  styles: [
  ]
})
export class AddProjectComponent implements OnInit {
  listProjects : any;
  projects: Project[] = [];
  currentProject: Project = { name: '', datedebut: new Date(), dateFin: new Date(), description: '' };

 
  name: any;
  datedebut: any;
  dateFin: any;
  description: any;
  Responsable: any ;
  title: string | undefined;
  submitted: boolean | undefined;
  datePipe: any;
  projectForm :  any ;
  mode : string = ''
  id : number | undefined;
 
  constructor(public service: ProjetService, public fb: FormBuilder,  private route: ActivatedRoute ,
    private project2Srevice:  Project2Service,
    private router : Router,

  ) { }
  get f() { return this.service.formData.controls; }
  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
 
   
    if ( id  == null) {
      this.infoForm();
      this.title = "Ajout projet";
      this.mode ='add'
  
      
    }
    else { 
      this.mode ='update'
      this.id = +id;
      this.title = "Modification projet";
      this.infoForm();
      this.project2Srevice.getById(+id).subscribe(data => {
        console.log(data);
        this.projectForm.controls.name.setValue(data.name);
        this.projectForm.controls.datedebut.setValue( new Date (data.datedebut));
        this.projectForm.controls.dateFin.setValue( new Date( data.dateFin));
        this.projectForm.controls.description.setValue(data.description);
    
        
      })
     }
    
    }

    addProject(){
     if(this.mode == 'add'){   
      console.log(this.projectForm.value)
       this.project2Srevice.createProject(this.projectForm.value).subscribe(
         data =>{ console.log("add ok " , data);
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/listprojet']);
        });
         },
         error => {
           console.error('Error creating project', error);
         }
       );
      }else {



        this.project2Srevice. update(this.id , this.projectForm.value).subscribe(
          data =>{ console.log(" update  ok " , data);
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate(['/listprojet']);
          });
          },
          error => {
            console.error('Error creating project', error);
          }
        );
      
      }
     }
   



  infoForm() {
    this.projectForm =  this.fb.group({
      id: null,
      name: ['', [Validators.required, Validators.minLength(5)]],
      datedebut: ['', [Validators.required]],
      dateFin:['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      responsable: ['', [Validators.required, Validators.minLength(4)]],
      
    });
  }
  /*onSelectMatricule(ann: number) {
   
    this.service.getMatricule(ann).subscribe(
      response => {
        this.numero = response;
        if (this.numero == 0)
        {
          this.numero = (ann * 10000) +  1;
        }
        else
        {
          this.numero =  this.numero + 1;
        }
        

        this.f['matricule'].setValue(this.numero);
      }
    );
  }*/

  ResetForm() {
    this.service.formData.reset();
  }
  onSubmit() {
    this.submitted = true;
    
  }

 

 
 
  



  
}

