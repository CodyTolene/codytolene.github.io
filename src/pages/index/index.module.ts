import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
];

@NgModule({
  declarations: [IndexComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class IndexModule {}
