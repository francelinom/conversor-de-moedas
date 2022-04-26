import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './conversor/conversor.component';

@NgModule({
  declarations: [ConversorComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConversorComponent],
})
export class ConversorModule {}
