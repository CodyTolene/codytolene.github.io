import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    component: NotFoundComponent,
    data: {
      description: "Cody Tolene's Portfolio Website",
      title: '404: Not Found',
    },
    path: '',
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class NotFoundModule {}
