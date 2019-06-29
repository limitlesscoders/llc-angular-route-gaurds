import { MatButtonModule,MatToolbarModule, MatCheckboxModule,MatCardModule,MatListModule,MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ],
})
export class CustomMaterialModule { }