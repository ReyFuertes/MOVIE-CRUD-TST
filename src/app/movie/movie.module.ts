import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MoviewViewComponent } from './movie-view/movie-view.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviewViewComponent
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  declarations: [
    MoviewViewComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class MovieModule { }