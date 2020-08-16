import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: IndexComponent,
    data: {
      description: "Cody Tolene's Portfolio Website",
      title: 'Portfolio',
    },
    path: '',
  },
];

@NgModule({
  declarations: [IndexComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class IndexModule {}
