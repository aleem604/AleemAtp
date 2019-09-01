import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldFilterPipe } from './field-filter.pipe';
import { MomentPipe } from './moment.pipe';
import { TruncatePipe } from './tuncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FieldFilterPipe, MomentPipe,TruncatePipe],
  exports: [FieldFilterPipe, MomentPipe, TruncatePipe]
})
export class PipesModule { }
