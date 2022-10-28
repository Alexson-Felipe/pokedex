import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RoutingModule, SharedModule],
})
export class PagesModule {}
