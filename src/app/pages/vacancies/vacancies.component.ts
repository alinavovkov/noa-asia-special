import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent implements  OnInit  {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }
}
