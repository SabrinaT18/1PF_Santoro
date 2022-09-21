
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
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {   MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatCheckboxModule} from '@angular/material/checkbox';


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
MatMenuModule,
MatRippleModule,
MatProgressSpinnerModule,
MatSnackBarModule,
MatDatepickerModule,
MatNativeDateModule,
MatCheckboxModule
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
    MatMenuModule,
MatRippleModule,
MatProgressSpinnerModule,
MatSnackBarModule,
MatDatepickerModule,
MatNativeDateModule,
MatCheckboxModule
  ]
})

export class MaterialModule { }