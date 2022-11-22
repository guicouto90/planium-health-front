import { Beneficiary } from './../home/home';
import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-beneficiary-screen',
  templateUrl: './beneficiary-screen.component.html',
  styleUrls: ['./beneficiary-screen.component.css'],
})
export class BeneficiaryScreenComponent implements OnInit {
  beneficiary: Beneficiary | undefined;
  constructor(private service: HomeService) {}
  ngOnInit(): void {
    this.service.data.subscribe((dataResponse) => {
      this.beneficiary = dataResponse;
      if (this.beneficiary?.beneficiario.situacao !== 'Ativo')
        alert('Benficiário está com o plano inativo');
    });
  }
}
