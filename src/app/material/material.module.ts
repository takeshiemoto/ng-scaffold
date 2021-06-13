import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatBadgeModule, MatIconModule],
  exports: [MatToolbarModule, MatButtonModule, MatBadgeModule, MatIconModule],
})
export class MaterialModule {}
