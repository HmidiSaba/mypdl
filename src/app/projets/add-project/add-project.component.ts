import { Component, OnInit, Inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjetService } from 'src/app/service/projet.service';
@Component({
  selector: 'app-add-projet',
  templateUrl: './add-project.component.html',
  styles: [
  ]
})
export class AddProjectComponent implements OnInit {
  id !:number;
  Nom: any;
  dateD: any;
  dateF: any;
  Description: any;
  Responsable: any ;
  title: string | undefined;
  submitted: boolean | undefined;
  datePipe: any;
  constructor(public service: ProjetService, public fb: FormBuilder, 

  ) { }
  get f() { return this.service.formData.controls; }
  ngOnInit() {
    this.Nom = localStorage.getItem('Nom');
    if (this.service.choixmenu == "A") {
      this.infoForm();
      this.title = "Ajout projet";
      this.dateD = this.transformDate(new Date(Date.now()));
      this.Nom = (this.Nom).toString().substring(0, 4);
    
      this.f['Nom'].setValue(this.Nom);
      //this.onSelectMatricule(this.annee);
      
    }
    else { 
      this.title = "Modification projet";
      this.id = this.service.formData.value.id;
     }
    
    }
  infoForm() {
    this.service.formData = this.fb.group({
      id: null,
      Nom: ['', [Validators.required, Validators.minLength(5)]],
      dateD: ['', [Validators.required]],
      dateF:['', [Validators.required]],
      Description: ['', [Validators.required, Validators.minLength(5)]],
      Responsable: ['', [Validators.required, Validators.minLength(4)]],
      
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

 

  
  transformDate(date: any) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }



  
}

