import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
   MatPaginatorModule, MatSortModule, MatTableModule

} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AppMaterialModule {}
