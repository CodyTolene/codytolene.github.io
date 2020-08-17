import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { routesNotFound } from './not-found.routes';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild(routesNotFound)],
  providers: [],
})
export class NotFoundModule {}
