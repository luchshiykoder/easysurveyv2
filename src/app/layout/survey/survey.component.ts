import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  param: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('routeParam: ' + this.route.snapshot.paramMap.get('type'));
    this.param = this.route.snapshot.paramMap.get('type');
  }

}
