import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjetService } from 'src/app/service/projet.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})


export class ListProjectComponent implements OnInit {
  SearchText :any;
  title: any;
  constructor(public crudApi:ProjetService,
    private router: Router, public fb: FormBuilder,
    private matDialog: MatDialog,
    ) { }

  ngOnInit() {
    this.title = "Liste des projets";


  }

  addProjet() {
    this.crudApi.choixmenu = "A";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    this.matDialog.open(AddProjectComponent, dialogConfig);
  }
}








