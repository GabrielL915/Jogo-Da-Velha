import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CommonUiModule } from '@jogo-da-velha/common-ui';
@NgModule({
  imports: [CommonModule, CommonUiModule],
  declarations: [BoardComponent],
  exports: [BoardComponent],
})
export class FeatureBoardModule {}
