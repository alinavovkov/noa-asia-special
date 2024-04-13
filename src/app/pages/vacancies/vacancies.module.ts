import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { VacancyInfoComponent } from './vacancy-info/vacancy-info.component';
import { VacanciesRoutingModule } from './vacancies-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    VacanciesComponent,
    VacancyInfoComponent
  ],
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    SharedModule
  ]
})
export class VacanciesModule { }
