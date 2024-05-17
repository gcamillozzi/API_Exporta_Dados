import { RecordAssistencialRepository } from '../record-assistencial-repository'
import knex from '../../config/database'
import { writeLog } from '../../utils/writeFile'
import { send } from 'process'
import { SearchAssistencialAdmissional, SearchAssistencialAltaAdministrativa, SearchAssistencialAnaliseCritica, SearchAssistencialBeneficiario, SearchAssistencialCateterVascularCentral, SearchAssistencialCausaExterna, SearchAssistencialCidPrincipal, SearchAssistencialCidSecundario, SearchAssistencialCondicaoAdquirida, SearchAssistencialCTI, SearchAssistencialDrgBrasil, SearchAssistencialDRGBrasilRefinado, SearchAssistencialHeader, SearchAssistencialHospital, SearchAssistencialInstituicao, SearchAssistencialMedico, SearchAssistencialPartoAdequado, SearchAssistencialProcedimento, SearchAssistencialRecemNascido, SearchAssistencialSondaVesicalDeDemora, SearchAssistencialSuporteVentilatorio, SearchAssistencialVariavel } from '../../models/Assistencial'

export class KnexRecordAssistencialRepository
  implements RecordAssistencialRepository {
  verificarValor(valor: any): string {
    if (valor === null || valor === undefined || valor === '') {
      return null;
    } else {
      return `'${valor.toString().replace("'", "")}'`;
    }
  }
  async recordAssistencialCausaExterna(data: SearchAssistencialCausaExterna[]): Promise<void> {
    try {
      for (const causa of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_CAUSA_EXTERNA
      (
        ${this.verificarValor(causa.descricao)},
        ${this.verificarValor(causa.tempo)},
        ${this.verificarValor(causa.dataInicial)},
        ${this.verificarValor(causa.dataFinal)},
        ${this.verificarValor(causa.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialCateterVascular  => ", error);
    }
  }
  async recordAssistencialVariaveis(data: SearchAssistencialVariavel): Promise<void> {
    try {

      const result = await knex.raw(`
    BEGIN
    dataintegra.INM_DRG_VARIAVEIS
    (
      ${this.verificarValor(data.caGrave)},
      ${this.verificarValor(data.gerenciavelAtencaoPrimaria)},
      ${this.verificarValor(data.gerenciavelEmergencia)},
      ${this.verificarValor(data.idosoFragil)},
      ${this.verificarValor(data.id)}        
    );
    END;
  `)
      // console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialAdmissional => ", error);
    }
  }
  async recordAssistencialAdmissional(data: SearchAssistencialAdmissional): Promise<void> {
    try {

      const result = await knex.raw(`
    BEGIN
    dataintegra.INM_DRG_DRG_ADMISSIONAL
    (
      ${this.verificarValor(data.codigo)},
      ${this.verificarValor(data.descricao)},
      ${this.verificarValor(data.id)}        
    );
    END;
  `)
      // console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialAdmissional => ", error);
    }
  }
  async recordAssistencialPartoAdequado(data: SearchAssistencialPartoAdequado): Promise<void> {
    try {

      const result = await knex.raw(`
    BEGIN
    dataintegra.INM_DRG_PARTO_ADEQUADO
    (
      ${this.verificarValor(data.classificacaoRobson)},
      ${this.verificarValor(data.id)}        
    );
    END;
  `)
      // console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialDrgBrasilRefinado => ", error);
    }
  }
  async recordAssistencialCateterVascular(data: SearchAssistencialCateterVascularCentral[]): Promise<void> {
    try {
      for (const cateter of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.inm_drg_cat_vasc_central
      (
        ${this.verificarValor(cateter.local)},
        ${this.verificarValor(cateter.dataInicial)},
        ${this.verificarValor(cateter.dataFinal)},
        ${this.verificarValor(cateter.codigoCondicaAdquirida)},
        ${this.verificarValor(cateter.descricaoCondicaAdquirida)},
        ${this.verificarValor(cateter.dataCondicaAdquirida)},
        ${this.verificarValor(cateter.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialCateterVascular  => ", error);
    }
  }
  async recordAssistencialSondaVesicalDemora(data: SearchAssistencialSondaVesicalDeDemora[]): Promise<void> {
    try {
      for (const sonda of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_SONDA_VESICAL_DEMORA
      (
        ${this.verificarValor(sonda.local)},
        ${this.verificarValor(sonda.dataInicial)},
        ${this.verificarValor(sonda.dataFinal)},
        ${this.verificarValor(sonda.dataOcorrenciaCondicaoAdquirida)},
        ${this.verificarValor(sonda.descricaoCondicaoAdquirida)},
        ${this.verificarValor(sonda.descricaoCondicaoAdquirida)},
        ${this.verificarValor(sonda.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialSondaVesicalDemora  => ", error);
    }
  }
  async recordAssistencialDrgBrasilRefinado(data: SearchAssistencialDRGBrasilRefinado): Promise<void> {
    try {

      const result = await knex.raw(`
    BEGIN
    dataintegra.INM_DRG_BRASIL_REFINADO
    (
      ${this.verificarValor(data.codigo)},
      ${this.verificarValor(data.descricao)},
      ${this.verificarValor(data.tipo)},
      ${this.verificarValor(data.peso)},
      ${this.verificarValor(data.id)}        
    );
    END;
  `)
      // console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialDrgBrasilRefinado => ", error);
    }
  }
  async recordAssistencialDrgBrasil(data: SearchAssistencialDrgBrasil): Promise<void> {
    try {

      const result = await knex.raw(`
    BEGIN
    dataintegra.INM_DRG_DRG_BRASIL
    (
      ${this.verificarValor(data.codigo)},
      ${this.verificarValor(data.descricao)},
      ${this.verificarValor(data.permanenciaPrevistaNainternacao)},
      ${this.verificarValor(data.permanenciaPrevistaNaAlta)},
      ${this.verificarValor(data.tipo)},
      ${this.verificarValor(data.peso)},
      ${this.verificarValor(data.id)}        
    );
    END;
  `)
      // console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialDrgBrasil => ", error);
    }
  }
  async recordAssistencialCidPrincipal(data: SearchAssistencialCidPrincipal): Promise<void> {
    try {

      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_CID_PRINCIPAL
      (
        ${this.verificarValor(data.codigo)},
        ${this.verificarValor(data.descricao)},
        ${this.verificarValor(data.sensivelCuidadoPrimario)},
        ${this.verificarValor(data.id)}        
      );
      END;
    `)
      // console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialCidPrincipal => ", error);
    }
  }
  async recordAssistencialSuporteVentilatorio(data: SearchAssistencialSuporteVentilatorio[]): Promise<void> {
    try {
      for (const suporte of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_SUPORTE_VENTILARIO
      (
        ${this.verificarValor(suporte.tipo)},
        ${this.verificarValor(suporte.tipoInvasivo)},
        ${this.verificarValor(suporte.local)},
        ${this.verificarValor(suporte.dataInicial)},
        ${this.verificarValor(suporte.dataFinal)},
        ${this.verificarValor(suporte.codigoCondicaoAdquirida)},
        ${this.verificarValor(suporte.descricaoCondicaoAdquirida)},
        ${this.verificarValor(suporte.dataCondicaoAdquirida)},
        ${this.verificarValor(suporte.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialSuporteVentilatorio => ", error);
    }
  }
  async recordAssistencialAnaliseCritica(data: SearchAssistencialAnaliseCritica[]): Promise<void> {
    try {
      for (const analise of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_ANALISE_CRITICA

      (
        ${this.verificarValor(analise.dataAnalise)},
        ${this.verificarValor(analise.analiseCritica)},
        ${this.verificarValor(analise.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialAnaliseCritica => ", error);
    }
  }
  async recordAssistencialAltaAdministrativa(data: SearchAssistencialAltaAdministrativa[]): Promise<void> {
    try {
      for (const alta of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_ALTA_ADMINISTRATIVA
      (
        ${this.verificarValor(alta.numeroAtendimeno)},
        ${this.verificarValor(alta.numeroAutorizacao)},
        ${this.verificarValor(alta.dataAutorizacao)},
        ${this.verificarValor(alta.dataAtendimentoInicial)},
        ${this.verificarValor(alta.dataAtendimentoFinal)},
        ${this.verificarValor(alta.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialAltaAdministrativa => ", error);
    }
  }
  async recordAssistencialCondicaoAdquirida(data: SearchAssistencialCondicaoAdquirida[]): Promise<void> {
    try {
      for (const condicao of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_CONDICAO_ADQUIRIDA
      (
        ${this.verificarValor(condicao.codigo)},
        ${this.verificarValor(condicao.descricao)},
        ${this.verificarValor(condicao.dataOcorrencia)},
        ${this.verificarValor(condicao.dataManifestacao)},
        ${this.verificarValor(condicao.nome)},
        ${this.verificarValor(condicao.grave)},
        ${this.verificarValor(condicao.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialCondicaoAdquirida => ", error);
    }
  }
  async recordAssistencialRN(data: SearchAssistencialRecemNascido[]): Promise<void> {
    try {
      for (const rn of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_RN
      (
        ${this.verificarValor(rn.pesoNascimento)},
        ${this.verificarValor(rn.idadeGestacional)},
        ${this.verificarValor(rn.comprimento)},
        ${this.verificarValor(rn.sexo)},
        ${this.verificarValor(rn.nascidoVivo)},
        ${this.verificarValor(rn.tocotraumatismo)},
        ${this.verificarValor(rn.apgar)},
        ${this.verificarValor(rn.apgarQuintoMinuto)},
        ${this.verificarValor(rn.alta48horas)},
        ${this.verificarValor(rn.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialRN => ", error);
    }
  }
  async recordAssistencialCTI(data: SearchAssistencialCTI[]): Promise<void> {
    try {
      for (const cti of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.iNM_DRG_CTI
      (
        ${this.verificarValor(cti.dataInicial)},
        ${this.verificarValor(cti.dataFinal)},
        ${this.verificarValor(cti.condicaoAlta)},
        ${this.verificarValor(cti.tipo)},
        ${this.verificarValor(cti.permanenciaPrevistaAlta)},
        ${this.verificarValor(cti.permanenciaReal)},
        ${this.verificarValor(cti.leito)},
        ${this.verificarValor(cti.cidPrincipal.codigo)},
        ${this.verificarValor(cti.cidPrincipal.descricao)},
        ${this.verificarValor(cti.drgBrasilRefinado?.mdc?.codigo)},
        ${this.verificarValor(cti.drgBrasilRefinado?.mdc?.descricao)},
        ${this.verificarValor(cti.drgBrasilRefinado?.codigo)},
        ${this.verificarValor(cti.drgBrasilRefinado?.descricao)},
        ${this.verificarValor(cti.medico.crm)},
        ${this.verificarValor(cti.medico.uf)},
        ${this.verificarValor(cti.hospital.codigo)},
        ${this.verificarValor(cti.hospital.nome)},
        ${this.verificarValor(cti.medico.nome)},
        ${this.verificarValor(cti.drgBrasilRefinado.tipo)},
        ${this.verificarValor(cti.drgBrasilRefinado.peso)},
        ${this.verificarValor(cti.medico.codigoEspecialidade)},
        ${this.verificarValor(cti.medico.especialidade)},
        ${this.verificarValor(cti.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialCTI => ", error);
    }
  }
  async recordAssistencialProcedimento(data: SearchAssistencialProcedimento[]): Promise<void> {
    try {
      for (const procedimento of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_PROCEDIMENTO
      (
        ${this.verificarValor(procedimento.codigo)},
        ${this.verificarValor(procedimento.nome)},
        ${this.verificarValor(procedimento.porte)},
        ${this.verificarValor(procedimento.dataAutorizacao)},
        ${this.verificarValor(procedimento.dataSolicitacao)},
        ${this.verificarValor(procedimento.dataExecucao)},
         null,
         null,
         null,
         null,
         null,
        ${this.verificarValor(procedimento.dataExecucaoFinal)},
        null,
        ${this.verificarValor(procedimento.id)}        
      );
      END;
    `)
        for (const medico of procedimento.medicos) {
          const result = await knex.raw(`
              BEGIN
              dataintegra.INM_DRG_PROCEDIMENTO
              (
                ${this.verificarValor(procedimento.codigo)},
                ${this.verificarValor(procedimento.nome)},
                ${this.verificarValor(procedimento.porte)},
                ${this.verificarValor(procedimento.dataAutorizacao)},
                ${this.verificarValor(procedimento.dataSolicitacao)},
                ${this.verificarValor(procedimento.dataExecucao)},
                ${this.verificarValor(medico.nome)},
                ${this.verificarValor(medico.uf)},
                ${this.verificarValor(medico.crm)},
                ${this.verificarValor(medico.codigoEspecialidade)},
                ${this.verificarValor(medico.especialidade)},
                ${this.verificarValor(procedimento.dataExecucaoFinal)},
                ${this.verificarValor(medico.tipoAtuacao)},
                ${this.verificarValor(procedimento.id)}        
              );
              END;
  `)
          // console.log("resultado => ", result);
        }
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialProcedimento => ", error);
    }
  }

  async recordAssistencialCidSecundario(data: SearchAssistencialCidSecundario[]): Promise<void> {
    try {
      for (const cid of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_CID_SECUNDARIO
      (
        ${this.verificarValor(cid.codigo)},
        ${this.verificarValor(cid.descricao)},
        ${this.verificarValor(cid.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialCidSecundario => ", error);
    }
  }
  async recordAssistencialMedico(data: SearchAssistencialMedico[]): Promise<void> {
    try {
      for (const medico of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_MEDICO
      (
        ${this.verificarValor(medico.nome)},
        ${this.verificarValor(medico.uf)},
        ${this.verificarValor(medico.crm)},
        ${this.verificarValor(medico.codigoEspecialidade)},
        ${this.verificarValor(medico.especialidade)},
        ${this.verificarValor(medico.medicoResponsavel)},
        ${this.verificarValor(medico.tipoAtuacao)},  
        ${this.verificarValor(medico.id)}        
      );
      END;
    `)
        // console.log("resultado => ", result);
      }
    } catch (error) {
      console.log("error recordAssistencialMedico => ", error);
    }
  }
  async recordAssistencialBeneficiario(data: SearchAssistencialBeneficiario): Promise<void> {
    try {
      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_BENEFICIARIO
      (
        ${this.verificarValor(data.codigoPaciente)}, 
        ${this.verificarValor(data.plano)},  
        ${this.verificarValor(data.dataNascimento)},
        ${this.verificarValor(data.sexo)},
        ${this.verificarValor(data.recemNascido)},
        ${this.verificarValor(data.particular)},
        ${this.verificarValor(data.idadeEmAnos)},
        ${this.verificarValor(data.idadeEmMeses)},
        ${this.verificarValor(data.idadeEmDias)},
        ${this.verificarValor(data.id)}        
      );
      END;
    `)
      // console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialBeneficiario => ", error);
    }
  }
  async recordAssistencialHospital(data: SearchAssistencialHospital): Promise<void> {
    try {
      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_HOSPITAL(
        ${this.verificarValor(data.codigo)},  
        ${this.verificarValor(data.nome)},
        ${this.verificarValor(data.cnes)},
        ${this.verificarValor(data.id)}        
      );
      END;
    `)
      // console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialHospital => ", error);
    }
  }
  async recordAssistencialInstituicao(data: SearchAssistencialInstituicao): Promise<void> {
    try {
      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_INSTITUICAO(
        ${this.verificarValor(data.codigo)},  
        ${this.verificarValor(data.nome)},
        ${this.verificarValor(data.id)}        
      );
      END;
    `)
      // console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialInstituicao => ", error);
    }
  }


  async recordAssistencialHeader(data: SearchAssistencialHeader): Promise<void> {
    try {


      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_REGISTRO(
        ${this.verificarValor(data.id)}, 
        ${this.verificarValor(data.situacao)}, 
        ${this.verificarValor(data.caraterInternacao)},
        ${this.verificarValor(data.numeroOperadora)},
        ${this.verificarValor(data.numeroRegistro)},
        ${this.verificarValor(data.numeroAtendimento)},
        ${this.verificarValor(data.numeroAutorizacao)},
        ${this.verificarValor(data.dataInternacao)},
        ${this.verificarValor(data.dataAlta)},
        ${this.verificarValor(data.condicaoAlta)},
        ${this.verificarValor(data.dataAutorizacao)},
        ${this.verificarValor(data.internadoOutrasVezes)},
        ${this.verificarValor(data.hospitalInternacaoAnterior)},
        ${this.verificarValor(data.reinternacao)},
        ${this.verificarValor(data.recaida)},
        ${this.verificarValor(data.idOrigemRecaida)},
        ${this.verificarValor(data.origemReadmissao30Dias)},
        ${this.verificarValor(data.origemRecaida30Dias)},
        ${this.verificarValor(data.idInternacaoRecaida)},
        ${this.verificarValor(data.dataPrevistaAlta)},
        ${this.verificarValor(data.permanenciaPrevistaNaInternacao)},
        ${this.verificarValor(data.permanenciaPrevistaNaAlta)},
        ${this.verificarValor(data.permanenciaReal)},
        ${this.verificarValor(data.percentil)},
        ${this.verificarValor(data.procedencia)},
        ${this.verificarValor(data.ventilacaoMecanica)},
        ${this.verificarValor(data.totalHorasVentilacaoMecanica)},
        ${this.verificarValor(data.modalidadeInternacao)},
        ${this.verificarValor(data.dataCadastro)},
        ${this.verificarValor(data.usuarioCadastro)},
        ${this.verificarValor(data.dataCadastroAlta)},
        ${this.verificarValor(data.usuarioCadastroAlta)},
        ${this.verificarValor(data.dataUltimaAlteracao)},        
        ${this.verificarValor(data.usuarioUltimaAlteracao)},
        ${this.verificarValor(data.correcaoRegistro)},
        ${this.verificarValor(data.usuarioCorrecao)},
        ${this.verificarValor(data.dataUltimoRecalculo)},
        ${this.verificarValor(data.leito)},
        ${this.verificarValor(data.condicaoAdquiridaGrave)},
        ${this.verificarValor(data.registroPacienteMae)},
        ${this.verificarValor(data.maeNaoIdentificada)},
        ${this.verificarValor(data.estado)},
        ${this.verificarValor(data.cidade)}                                 
      );
      END;
    `)
      // console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialHeader => ", error);
    }
  }

  async getSequence(): Promise<number> {
    return await knex.raw(
      `select TIHFR.DRG_REGISTRO_IAG_SEQ.NEXTVAL  from dual`,
    )
  }
}
