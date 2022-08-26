
import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
declarations: [
],  

imports: [
MatButtonModule,
MatCardModule,
MatIconModule,
MatInputModule,
MatFormFieldModule,
MatTableModule,
MatDialogModule,
MatSlideToggleModule, 
MatToolbarModule,
MatMenuModule
],


exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule
  ]
})

export class MaterialModule { }