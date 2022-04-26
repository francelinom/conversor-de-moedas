import { ConversorService } from './../services/conversor.service';
import { MoedaService } from './../services/moeda.service';
import { ConversaoResponse } from './../models/conversao-response.model';
import { Conversao } from './../models/conversao.model';
import { Moeda } from './../models/moeda.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit {
  moedas!: Moeda[];
  conversao!: Conversao;
  possuiErro!: boolean;
  conversaoResponse!: ConversaoResponse;

  @ViewChild('conversaoForm', { static: true }) conversaoForm!: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao('USD', 'BRL', 0);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      alert('Convertendo: ' + JSON.stringify(this.conversao));
    }
  }
}
