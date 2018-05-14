import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './../app.service';


@Component({
  selector: 'app-age-result',
  templateUrl: './age-result.component.html',
  styleUrls: ['./age-result.component.css']
})
export class AgeResultComponent implements OnInit {

  m_ageGuess: number;
  m_imgDataBASE64: string;
  m_resultText: string;

  constructor(
    private AppService: AppService,
    private Router: Router,
  ) { }


  ngOnInit() {
    this.m_ageGuess = this.AppService.GetAgeGuess();
    this.m_imgDataBASE64 = this.AppService.GetBASE64();

    if (this.m_ageGuess <= 18) {
      this.m_resultText = "Wow - you look " + this.m_ageGuess + ". You're not even old enough to use this app.";
    }
    else if (this.m_ageGuess > 18 && this.m_ageGuess <= 35) {
      this.m_resultText = "Nice - " + this.m_ageGuess + ". In your prime.";
    }
    else if (this.m_ageGuess > 35 && this.m_ageGuess <= 55) {
      this.m_resultText = "You're really old - like " + this.m_ageGuess + " maybe?";
    }
    else if (this.m_ageGuess > 55) {
      this.m_resultText = this.m_ageGuess + ". Like at good bottle of wine you age with grace.";
    }

  }

}
