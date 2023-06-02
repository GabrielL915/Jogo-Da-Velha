import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonUiModule } from '@jogo-da-velha/common-ui';
import { FeatureBoardModule } from '@jogo-da-velha/feature-board';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonUiModule, FeatureBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
