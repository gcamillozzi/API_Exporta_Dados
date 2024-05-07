export interface DrgRegistroIag {
  id: number
  situacao: string | null
  caraterinternacao: string | null
  numerooperadora: string | null
  numeroregistro: string | null
  numeroatendimento: string | null
  numeroautorizacao: string | null
  datainternacao: Date | null
  dataautorizacao: Date | null
  dataalta: Date | null
  condicaoalta: string | null
  recaida: string | null
  origemreadmissao30dias: string | null
  origemrecaida30dias: string | null
  idinternacaorecaida: number | null
  idorigemrecaida: number | null
  totalhorasventilacaomecanica: string | null
  modalidadeinternacao: string | null
  datacadastroalta: Date | null
  usuariocadastroalta: string | null
  correcaoregistro: string | null
  usuariocorrecao: string | null
  dataultimorecalculo: Date | null
  internadooutrasvezes: string | null
  hospitalinternacaoanterior: string | null
  reinternacao: string | null
  dataprevistaalta: Date | null
  permanenprevistainter: number | null
  permanenciaprevistanaalta: number | null
  permanenciareal: number | null
  percentil: string | null
  procedencia: string | null
  ventilacaomecania: string | null
  datacadastro: Date | null
  usuariocadastro: string | null
  usuariocadastroalta2: string | null
  dataultimaalteracao: Date | null
  usuarioultimaalteracao: string | null
  codigo_instituicao: number | null
  nome_instituicao: string | null
  codigo_hospital: number | null
  nome_hospital: string | null
  codigopaciente_beneficiario: string | null
  plano_beneficiario: string | null
  datanascimento_beneficiario: Date | null
  sexo_beneficiario: string | null
  idadeemanos_beneficiario: number | null
  idadeemmeses_beneficiario: number | null
  idadeemdias_beneficiario: number | null
  nome_medico: string | null
  uf_medico: string | null
  crm_medico: string | null
  especialidade_medico: string | null
  medicoresponsavel_medico: string | null
  tipoatuacao_medico: string | null
  dataexecucao_procedimento: Date | null
  nome_medico_procedimento: string | null
  uf_medico_procedimento: string | null
  crm_medico_procedimento: string | null
  especialid_medico_proced: string | null
  tipatuacao_medico_proced: string | null
  datainicial_cti: Date | null
  datafinal_cti: Date | null
  condicaoalta_cti: string | null
  tipo_cti: string | null
  permanenciaprevistanaalta_cti: number | null
  permanenciareal_cti: number | null
  nome_medico_cti: string | null
  uf_medico_cti: string | null
  crm_medico_cti: string | null
  especialidade_medico_cti: string | null
  codigo_hospital_cti: number | null
  nome_hospital_cti: string | null
  codigo_cidprincipal_cti: string | null
  descricao_cidprincipal_cti: string | null
  codigo_drgbrasilrefinado_cti: string | null
  descri_drgbrasilrefinado_cti: string | null
  tipo_drgbrasilrefinado_cti: string | null
  codigo_mdc_cti: string | null
  descricao_mdc_cti: string | null
  leito_cti: string | null
  pesonascimento_rn: number | null
  idadegestacional_rn: number | null
  comprimento_rn: number | null
  sexo_rn: string | null
  nascidovivo_rn: string | null
  tocotraumatismo_rn: string | null
  apgar_rn: string | null
  apgarquintominuto_rn: number | null
  alta48horas_rn: string | null
  codigo_condadqui: string | null
  descricao_condadqui: string | null
  dataocorrencia_condadqui: Date | null
  datamanifestacao_condadqui: Date | null
  medico_condadqui: string | null
  grave_condadqui: string | null
  numeroatend_altaadmin: string | null
  numeroautorizacao_altaadmin: string | null
  dataautorizacao_altaadmin: Date | null
  dataatendiminicial_altaadmin: Date | null
  dataatendimfinal_altaadmin: Date | null
  dataanalise_analicrit: Date | null
  analisecritica_analicrit: string | null
  tipo_supventil: string | null
  local_supventil: string | null
  datainicial_supventil: Date | null
  datafinal_supventil: Date | null
  codigo_cidprinc: string | null
  descricao_cidprinc: string | null
  sensivelcuidadprima_cidprinc: string | null
  codigo_cidsecun: string | null
  descricao_cidsecun: string | null
  sondavesicaldedemora: string | null
  catetervascularcentral: string | null
  classificacaorobson_partadeq: string | null
  drgadmissional: string | null
  causaexterna: string | null
  cagrave: string | null
  gerenciavelatencaoprimaria: string | null
  gerenciavelemergencia: string | null
  idosofragil: string | null
  codigo_drgbrasilrefin: string | null
  descricao_drgbrasilrefin: string | null
  tipo_drgbrasilrefin: string | null
  peso_drgbrasilrefin: number | null
  codigo_mdc_drgbrasilrefin: string | null
  descricao_mdc_drgbrasilrefin: string | null
  leito: string | null
  descricao_causaext: string | null
  tempo_causaext: string | null
  datainicial_causaext: Date | null
  datafinal_causaext: Date | null
}

export interface CAPSDRGREGISTROIAG {
  ID: number
  SITUACAO: string | null
  CARATERINTERNACAO: string | null
  NUMEROOPERADORA: string | null
  NUMEROREGISTRO: string | null
  NUMEROATENDIMENTO: string | null
  NUMEROAUTORIZACAO: string | null
  DATAINTERNACAO: Date | null
  DATAAUTORIZACAO: Date | null
  DATAALTA: Date | null
  CONDICAOALTA: string | null
  RECAIDA: string | null
  ORIGEMREADMISSAO30DIAS: string | null
  ORIGEMRECAIDA30DIAS: string | null
  IDINTERNACAORECAIDA: number | null
  IDORIGEMRECAIDA: number | null
  TOTALHORASVENTILACAOMECANICA: string | null
  MODALIDADEINTERNACAO: string | null
  DATACADASTROALTA: Date | null
  USUARIOCADASTROALTA: string | null
  CORRECAOREGISTRO: string | null
  USUARIOCORRECAO: string | null
  DATAULTIMORECALCULO: Date | null
  INTERNADOOUTRASVEZES: string | null
  HOSPITALINTERNACAOANTERIOR: string | null
  REINTERNACAO: string | null
  DATAPREVISTAALTA: Date | null
  PERMANENPREVISTAINTER: number | null
  PERMANENCIAPREVISTANAALTA: number | null
  PERMANENCIAREAL: number | null
  PERCENTIL: string | null
  PROCEDENCIA: string | null
  VENTILACAOMECANIA: string | null
  DATACADASTRO: Date | null
  USUARIOCADASTRO: string | null
  USUARIOCADASTROALTA2: string | null
  DATAULTIMAALTERACAO: Date | null
  USUARIOULTIMAALTERACAO: string | null
  CODIGO_INSTITUICAO: number | null
  NOME_INSTITUICAO: string | null
  CODIGO_HOSPITAL: number | null
  NOME_HOSPITAL: string | null
  CODIGOPACIENTE_BENEFICIARIO: string | null
  PLANO_BENEFICIARIO: string | null
  DATANASCIMENTO_BENEFICIARIO: Date | null
  SEXO_BENEFICIARIO: string | null
  IDADEEMANOS_BENEFICIARIO: number | null
  IDADEEMMESES_BENEFICIARIO: number | null
  IDADEEMDIAS_BENEFICIARIO: number | null
  NOME_MEDICO: string | null
  UF_MEDICO: string | null
  CRM_MEDICO: string | null
  ESPECIALIDADE_MEDICO: string | null
  MEDICORESPONSAVEL_MEDICO: string | null
  TIPOATUACAO_MEDICO: string | null
  DATAEXECUCAO_PROCEDIMENTO: Date | null
  NOME_MEDICO_PROCEDIMENTO: string | null
  UF_MEDICO_PROCEDIMENTO: string | null
  CRM_MEDICO_PROCEDIMENTO: string | null
  ESPECIALID_MEDICO_PROCED: string | null
  TIPATUACAO_MEDICO_PROCED: string | null
  DATAINICIAL_CTI: Date | null
  DATAFINAL_CTI: Date | null
  CONDICAOALTA_CTI: string | null
  TIPO_CTI: string | null
  PERMANENCIAPREVISTANAALTA_CTI: number | null
  PERMANENCIAREAL_CTI: number | null
  NOME_MEDICO_CTI: string | null
  UF_MEDICO_CTI: string | null
  CRM_MEDICO_CTI: string | null
  ESPECIALIDADE_MEDICO_CTI: string | null
  CODIGO_HOSPITAL_CTI: number | null
  NOME_HOSPITAL_CTI: string | null
  CODIGO_CIDPRINCIPAL_CTI: string | null
  DESCRICAO_CIDPRINCIPAL_CTI: string | null
  CODIGO_DRGBRASILREFINADO_CTI: string | null
  DESCRI_DRGBRASILREFINADO_CTI: string | null
  TIPO_DRGBRASILREFINADO_CTI: string | null
  CODIGO_MDC_CTI: string | null
  DESCRICAO_MDC_CTI: string | null
  LEITO_CTI: string | null
  PESONASCIMENTO_RN: number | null
  IDADEGESTACIONAL_RN: number | null
  COMPRIMENTO_RN: number | null
  SEXO_RN: string | null
  NASCIDOVIVO_RN: string | null
  TOCOTRAUMATISMO_RN: string | null
  APGAR_RN: string | null
  APGARQUINTOMINUTO_RN: number | null
  ALTA48HORAS_RN: string | null
  CODIGO_CONDADQUI: string | null
  DESCRICAO_CONDADQUI: string | null
  DATAOCORRENCIA_CONDADQUI: Date | null
  DATAMANIFESTACAO_CONDADQUI: Date | null
  MEDICO_CONDADQUI: string | null
  GRAVE_CONDADQUI: string | null
  NUMEROATEND_ALTAADMIN: string | null
  NUMEROAUTORIZACAO_ALTAADMIN: string | null
  DATAAUTORIZACAO_ALTAADMIN: Date | null
  DATAATENDIMINICIAL_ALTAADMIN: Date | null
  DATAATENDIMFINAL_ALTAADMIN: Date | null
  DATAANALISE_ANALICRIT: Date | null
  ANALISECRITICA_ANALICRIT: string | null
  TIPO_SUPVENTIL: string | null
  LOCAL_SUPVENTIL: string | null
  DATAINICIAL_SUPVENTIL: Date | null
  DATAFINAL_SUPVENTIL: Date | null
  CODIGO_CIDPRINC: string | null
  DESCRICAO_CIDPRINC: string | null
  SENSIVELCUIDADPRIMA_CIDPRINC: string | null
  CODIGO_CIDSECUN: string | null
  DESCRICAO_CIDSECUN: string | null
  SONDAVESICALDEDEMORA: string | null
  CATETERVASCULARCENTRAL: string | null
  CLASSIFICACAOROBSON_PARTADEQ: string | null
  DRGADMISSIONAL: string | null
  CAUSAEXTERNA: string | null
  CAGRAVE: string | null
  GERENCIAVELATENCAOPRIMARIA: string | null
  GERENCIAVELEMERGENCIA: string | null
  IDOSOFRAGIL: string | null
  CODIGO_DRGBRASILREFIN: string | null
  DESCRICAO_DRGBRASILREFIN: string | null
  TIPO_DRGBRASILREFIN: string | null
  PESO_DRGBRASILREFIN: number | null
  CODIGO_MDC_DRGBRASILREFIN: string | null
  DESCRICAO_MDC_DRGBRASILREFIN: string | null
  LEITO: string | null
  DESCRICAO_CAUSAEXT: string | null
  TEMPO_CAUSAEXT: string | null
  DATAINICIAL_CAUSAEXT: Date | null
  DATAFINAL_CAUSAEXT: Date | null
}
export interface SearchAssistencialDataRequest {
  dataUltimaAlteracao: string
  ids?: string
  numeroAtendimento?: string[]
  numeroAutorizacao?: string[]
  dataAltaInicial?: string
  dataAltaFinal?: string
  dataInternacaoInicial?: string
  dataInternacaoFinal?: string
  dataCadastroInicial?: string
  dataCadastroFinal?: string
  dataCadastroAltaInicial?: string
  dataCadastroAltaFinal?: string
  cidPrincipal?: string[]
  cidPrincipalCapitulo?: string[]
  cidSecundario?: string[]
  cidSecundarioCapitulo?: string[]
  procedimento?: string[]
  classeDRG?: string[]
  situacao?: string
  page?: number
}
export interface SearchAssistencialHeader {
  id: string | null
  situacao: string | null
  caraterInternacao: string | null
  numeroOperadora: string | null
  numeroRegistro: string | null
  numeroAtendimento: string | null
  numeroAutorizacao: string | null
  dataInternacao: string | null
  dataAlta: string | null
  condicaoAlta: string | null
  dataAutorizacao: string | null
  internadoOutrasVezes: string | null
  hospitalInternacaoAnterior: string | null
  reinternacao: string | null
  recaida: string | null
  idOrigemRecaida: string | null
  origemReadmissao30Dias: string | null
  origemRecaida30Dias: string | null
  idInternacaoRecaida: string | null
  dataPrevistaAlta: string | null
  permanenciaPrevistaNaInternacao: string | null
  permanenciaPrevistaNaAlta: string | null
  permanenciaReal: string | null
  percentil: string | null
  procedencia: string | null
  ventilacaoMecanica: string | null
  totalHorasVentilacaoMecanica: string | null
  modalidadeInternacao: string | null
  dataCadastro: string | null
  usuarioCadastro: string | null
  dataCadastroAlta: string | null
  usuarioCadastroAlta: string | null
  dataUltimaAlteracao: string | null
  usuarioUltimaAlteracao: string | null
  correcaoRegistro: string | null
  usuarioCorrecao: string | null
  dataUltimoRecalculo: string | null
  leito: string | null
  condicaoAdquiridaGrave: string | null
  registroPacienteMae: string | null
  maeNaoIdentificada: string | null
  estado: string | null
  cidade: string | null
}
export interface SearchAssistencialInstituicao {
  id: string | null
  codigo: string | null
  nome: string | null
}
export interface SearchAssistencialHospital {
  id: string | null
  codigo: string | null
  nome: string | null
  cnes: string | null
}

export interface SearchAssistencialBeneficiario {
  id: string | null
  codigoPaciente: string | null
  plano: string | null
  dataNascimento: string | null
  sexo: string | null
  recemNascido: string | null
  particular: string | null
  idadeEmAnos: string | null
  idadeEmMeses: string | null
  idadeEmDias: string | null
}
export interface SearchAssistencialMedico {
  id: string | null
  nome: string | null
  uf: string | null
  crm: string | null
  codigoEspecialidade: string | null
  especialidade: string | null
  medicoResponsavel: string | null
  tipoAtuacao: string | null
}
export interface SearchAssistencialCidSecundario {
  id: string | null
  codigo: string | null
  descricao: string | null
}

export interface SearchAssistencialProcedimento {
  id: string | null
  codigo: string | null
  nome: string | null
  porte: string | null
  dataAutorizacao: string | null
  dataSolicitacao: string | null
  dataExecucao: string | null
  dataExecucaoFinal: string | null
  medicos: SearchAssistencialMedico[]
}

export interface SearchAssistencialCTI {
  id: string | null
  dataInicial: string | null
  dataFinal: string | null
  condicaoAlta: string | null
  tipo: string | null
  permanenciaPrevistaAlta: string | null
  permanenciaReal: string | null
  leito: string | null
  cidPrincipal: SearchAssistencialCidPrincipal | null,
  drgBrasilRefinado: SearchAssistencialDRGBrasilRefinado | null,
  hospital: SearchAssistencialHospital | null
  medico: SearchAssistencialMedico
}


export interface SearchAssistencialCidPrincipal {
  id: string | null
  codigo: string | null
  descricao: string | null
  sensivelCuidadoPrimario: string | null
}

export interface SearchAssistencialDRGBrasilRefinado {
  id: string | null
  codigo: string | null
  descricao: string | null
  tipo: string | null
  peso: string | null
  mdc: SearchAssistencialMDC
}
export interface SearchAssistencialMDC {
  id: string | null
  codigo: string | null
  descricao: string | null
}

export interface SearchAssistencialRecemNascido {
  id: string | null
  pesoNascimento: string | null
  idadeGestacional: string | null
  comprimento: string | null
  sexo: string | null
  nascidoVivo: string | null
  tocotraumatismo: string | null
  apgar: string | null
  apgarQuintoMinuto: string | null
  alta48horas: string | null
}

export interface SearchAssistencialCondicaoAdquirida {
  id: string | null
  codigo: string | null
  descricao: string | null
  dataOcorrencia: string | null
  dataManifestacao: string | null
  nome: string | null
  grave: string | null
}
export interface SearchAssistencialAltaAdministrativa {
  id: string | null
  numeroAtendimeno: string | null
  numeroAutorizacao: string | null
  dataAutorizacao: string | null
  dataAtendimentoInicial: string | null
  dataAtendimentoFinal: string | null
}

export interface SearchAssistencialAltaAdministrativa {
  id: string | null
  numeroAtendimeno: string | null
  numeroAutorizacao: string | null
  dataAutorizacao: string | null
  dataAtendimentoInicial: string | null
  dataAtendimentoFinal: string | null
}
export interface SearchAssistencialAnaliseCritica {
  id: string | null
  dataAnalise: string | null
  analiseCritica: string | null
}

export interface SearchAssistencialSuporteVentilatorio {
  id: string | null
  tipo: string | null
  tipoInvasivo: string | null
  local: string | null
  dataInicial: string | null
  dataFinal: string | null
  codigoCondicaoAdquirida: string | null
  descricaoCondicaoAdquirida: string | null
  dataCondicaoAdquirida: string | null
}

export interface SearchAssistencialDrgBrasil {
  id: string | null
  codigo: string | null
  descricao: string | null
  permanenciaPrevistaNainternacao: string | null
  permanenciaPrevistaNaAlta: string | null
  tipo: string | null
  peso: string | null
}

export interface SearchAssistencialDrgBrasil {
  id: string | null
  codigo: string | null
  descricao: string | null
  permanenciaPrevistaNainternacao: string | null
  permanenciaPrevistaNaAlta: string | null
  tipo: string | null
  peso: string | null
}
export interface SearchAssistencialSondaVesicalDeDemora {
  id: string | null
  local: string | null
  dataInicial: string | null
  dataFinal: string | null
  codigoCondicaoAdquirida: string | null
  descricaoCondicaoAdquirida: string | null
  dataOcorrenciaCondicaoAdquirida: string | null
}

export interface SearchAssistencialCateterVascularCentral {
  id: string | null
  local: string | null
  dataInicial: string | null
  dataFinal: string | null
  codigoCondicaAdquirida: string | null
  descricaoCondicaAdquirida: string | null
  dataCondicaAdquirida: string | null
}

export interface SearchAssistencialPartoAdequado {
  id: string | null
  classificacaoRobson: string | null
}

export interface SearchAssistencialAdmissional {
  id: string | null
  codigo: string | null
  descricao: string | null
}
export interface SearchAssistencialVariavel {
  id: string | null
  caGrave: string | null
  gerenciavelAtencaoPrimaria: string | null
  gerenciavelEmergencia: string | null
  idosoFragil: string | null
}

export interface SearchAssistencialCausaExterna {
  id: string | null
  descricao: string | null
  tempo: string | null
  dataInicial: string | null
  dataFinal: string | null
}

