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

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  identifierForm!: FormGroup;
  loginForm!: FormGroup;
  data: any;
  formModal: any;
  modalLogin: any;
  registerModal: any;

  login = {
    identifier: '',
    password: '',
  };

  register = {
    identifier: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('errorModal')
    );
    this.modalLogin = new window.bootstrap.Modal(
      document.getElementById('loginModal')
    );
    this.registerModal = new window.bootstrap.Modal(
      document.getElementById('registroModal')
    );

    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.identifierForm = this.fb.group({
      identifier: ['', Validators.required],
    });

    if (localStorage.getItem('accredited')) {
      this.modalLogin.hide();
    } else {
      this.modalLogin.show();
    }
  }

  onSubmit() {
    // 557208610
    // 481561331, 557208610, 557271150, 863925570, 865333394 e 987122320
    if (this.identifierForm.valid) {
      // Mandar informação para o banco
      this.homeService
        .getBeneficiaryById(this.identifierForm.value.identifier)
        .subscribe((response) => {
          console.log(response);
          this.data = response as Beneficiary;
          if (!this.data) {
            this.formModal.show();
          } else {
            this.router.navigateByUrl('/beneficiary');
          }
          /* if (this.data.beneficiario.planName !== 'amil-ppu') {
            alert('Beneficiario não possui plano Amil PPU');
          } else {
            this.router.navigateByUrl('/beneficiary');
          } */
        });
    } else {
      // Mandar erro
      console.log('Deu ruim');
    }
  }

  onClickModalButton() {
    this.formModal.hide();
  }

  onClickRegisterButton() {
    this.modalLogin.hide();
    this.registerModal.show();
  }

  onClickLogoffButton() {
    localStorage.removeItem('accredited');
    this.router.navigateByUrl('/home');
    this.modalLogin.show();
  }

  async onClickLoginButton() {
    console.log(this.login);
    const token = await this.homeService.loginAccredited(
      this.login.identifier,
      this.login.password
    );
    if (token) {
      localStorage.setItem(
        'accredited',
        JSON.stringify({
          identifier: this.login.identifier,
          token: token.data.token,
        })
      );
      this.modalLogin.hide();
      this.login.identifier = '';
      this.login.password = '';
    }
  }

  async onClickRegisterAccredited() {
    if (
      this.register.identifier.length === 0 ||
      this.register.password.length === 0 ||
      this.register.confirmPassword.length === 0
    ) {
      alert('Todos os campos devem ser preenchidos');
    } else if (this.register.password !== this.register.confirmPassword) {
      alert('Senhas digitadas são diferentes');
    } else if (
      this.register.identifier.length > 0 &&
      this.register.password.length > 0 &&
      this.register.confirmPassword.length > 0
    ) {
      try {
        await this.homeService.registerAccredited(
          this.register.identifier,
          this.register.password
        );
        this.registerModal.hide();
        this.modalLogin.show();
        this.register.identifier = '';
        this.register.password = '';
        this.register.confirmPassword = '';
        alert('Prestador cadastrado com sucesso');
      } catch (error) {
        alert('Falha ao cadastrar');
      }
    }
  }
}
