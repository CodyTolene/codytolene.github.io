import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { routesIndex } from './index.routes';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routesIndex),
  ],
  providers: [],
})
export class IndexModule {}
