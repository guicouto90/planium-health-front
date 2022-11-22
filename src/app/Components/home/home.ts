export interface Beneficiary {
  id: number;
  name: string;
  situation: string;
  roles: string;
  beneficiaryNumber: string;
  cpf: string;
  planName: string;
}

interface BeneficiaryData {
  nomeBeneficiario: string;
  marcaOtica: string;
  cpf: number;
  situacao: string;
  tipoCobranca: string;
  nomeCobranca: string;
  sexo: string;
  dataInclusao: string;
  dataExclusao: string;
  dataNascimento: string;
  respFinanceiro: string;
  porteContrato: string;
  plano: Plan;
  telefones: Phone[];
  endereços: Address[];
  autorizacoes: Authorization[];
  mensagemRetorno: string;
  codigoRetorno: number;
}

interface Phone {
  classeContato: string;
  tipoContato: string;
  numDdd: string;
  numTelefone: string;
  email: string;
}

interface Plan {
  codPlano: string;
  nomePlano: string;
}

interface Address {
  seqEndereco: number;
  residencia: string;
  correspondencia: string;
  cobranca: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

interface Authorization {
  pedido: string;
}
