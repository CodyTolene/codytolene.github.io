import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { routesIndex } from './index.routes';

@NgModule({
  declarations: [IndexComponent],
  imports: [RouterModule.forChild(routesIndex)],
  providers: [],
})
export class IndexModule {}
