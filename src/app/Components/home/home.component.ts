import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { Beneficiary } from './home';
import { BeneficiaryScreenComponent } from './../beneficiary-screen/beneficiary-screen.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  identifierForm!: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private homeservice: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.identifierForm = this.fb.group({
      identifier: ['', Validators.required],
    });
  }

  async onSubmit() {
    // 557208610
    // 481561331, 557208610, 557271150, 863925570, 865333394 e 987122320
    if (this.identifierForm.valid) {
      // Mandar informação para o banco
      this.homeservice
        .getBeneficiaryById(this.identifierForm.value.identifier)
        .subscribe((response) => {
          this.data = response as Beneficiary;
          if (this.data.beneficiario.plano.nomePlano !== 'amil-ppu') {
            alert('Beneficiario não possui plano Amil PPU');
          } else {
            this.router.navigateByUrl('/beneficiary');
          }
          // this.router.navigateByUrl('/beneficiary');
        });
    } else {
      // Mandar erro
      console.log('Deu ruim');
    }
  }
}
