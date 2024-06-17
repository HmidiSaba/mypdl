import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjetService } from 'src/app/service/projet.service';
import { Project2Service } from 'src/app/service/project2.service';



@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})


export class ListProjectComponent implements OnInit {
  SearchText :any;
  title: any;
  projects  : any[] = [];
  constructor(public crudApi:ProjetService,
    private project2Srevice:  Project2Service,
    private router: Router, public fb: 
    FormBuilder,
    private matDialog: MatDialog,
    ) { }

  ngOnInit() {
    this.title = "Liste des projets";
    this.getProjects();

  }
  getProjects(): void {
  /*  this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        this.projects = data;
      },
      error => {
        console.error('Error fetching projects', error);
      }
    );*/
    this.project2Srevice.getProjects().subscribe(data => {
      console.log("ici data :" , data);
      this.projects = data;
      
    } )
  }

  addProjet() {
    this.crudApi.choixmenu = "A";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    this.matDialog.open(AddProjectComponent, dialogConfig);
  }

   delete(id: any){
   this.project2Srevice.deleteProject(id).subscribe(data => {
    this.ngOnInit();
   })
   }

    update(id: any){
       this.router.navigate(['/projet', id])
   }
}








