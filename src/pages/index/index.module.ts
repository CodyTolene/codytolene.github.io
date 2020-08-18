import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { routesIndex } from './index.routes';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule.forChild(routesIndex),
  ],
  providers: [],
})
export class IndexModule {}
