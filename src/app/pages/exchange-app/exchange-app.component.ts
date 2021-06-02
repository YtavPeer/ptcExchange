import { Component, OnInit } from '@angular/core';
import {ExchangeService} from '../../services/exchange.service';

@Component({
  selector: 'app-exchange-app',
  templateUrl: './exchange-app.component.html',
  styleUrls: ['./exchange-app.component.scss']
})
export class ExchangeAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
