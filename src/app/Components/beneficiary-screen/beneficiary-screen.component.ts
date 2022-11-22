import { Beneficiary } from './../home/home';
import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

declare var window: any;

@Component({
  selector: 'app-beneficiary-screen',
  templateUrl: './beneficiary-screen.component.html',
  styleUrls: ['./beneficiary-screen.component.css'],
})
export class BeneficiaryScreenComponent implements OnInit {
  beneficiary: Beneficiary | undefined;
  formModal: any;

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('inativoModal')
    );
    this.service.data.subscribe((dataResponse) => {
      this.beneficiary = dataResponse;
      if (this.beneficiary?.situation !== 'Ativo') {
        this.formModal.show();
      }
    });
    // this.formModal.show();
  }
}
