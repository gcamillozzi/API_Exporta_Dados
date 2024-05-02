import { RecordAssistencialRepository } from '../record-assistencial-repository'
import knex from '../../config/database'
import { writeLog } from '../../utils/writeFile'
import { send } from 'process'
import { SearchAssistencialAdmissional, SearchAssistencialAltaAdministrativa, SearchAssistencialAnaliseCritica, SearchAssistencialBeneficiario, SearchAssistencialCateterVascularCentral, SearchAssistencialCausaExterna, SearchAssistencialCidPrincipal, SearchAssistencialCidSecundario, SearchAssistencialCondicaoAdquirida, SearchAssistencialCTI, SearchAssistencialDrgBrasil, SearchAssistencialDRGBrasilRefinado, SearchAssistencialHeader, SearchAssistencialHospital, SearchAssistencialInstituicao, SearchAssistencialMedico, SearchAssistencialPartoAdequado, SearchAssistencialProcedimento, SearchAssistencialRecemNascido, SearchAssistencialSondaVesicalDeDemora, SearchAssistencialSuporteVentilatorio, SearchAssistencialVariavel } from '../../models/Assistencial'

export class KnexRecordAssistencialRepository
  implements RecordAssistencialRepository {
  async recordAssistencialCausaExterna(data: SearchAssistencialCausaExterna[]): Promise<void> {
    try {
      for (const causa of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_CAUSA_EXTERNA
      (
        '${causa.descricao}',
        '${causa.tempo}',
        '${causa.dataInicial}',
        '${causa.dataFinal}',
        '${causa.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
      '${data.caGrave}',
      '${data.gerenciavelAtencaoPrimaria}',
      '${data.gerenciavelEmergencia}',
      '${data.id}'        
    );
    END;
  `)
      console.log("resultado => ", result);

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
      '${data.codigo}',
      '${data.descricao}',
      '${data.id}'        
    );
    END;
  `)
      console.log("resultado => ", result);

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
      '${data.classificacaoRobson}',
      '${data.id}'        
    );
    END;
  `)
      console.log("resultado => ", result);

    } catch (error) {
      console.log("error recordAssistencialDrgBrasilRefinado => ", error);
    }
  }
  async recordAssistencialCateterVascular(data: SearchAssistencialCateterVascularCentral[]): Promise<void> {
    try {
      for (const cateter of data) {
        const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_CATETER_VASCULAR_CENTRAL
      (
        '${cateter.local}',
        '${cateter.dataInicial}',
        '${cateter.dataFinal}',
        '${cateter.codigoCondicaAdquirida}',
        '${cateter.descricaoCondicaAdquirida}',
        '${cateter.dataCondicaAdquirida}',
        '${cateter.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${sonda.local}',
        '${sonda.dataInicial}',
        '${sonda.dataFinal}',
        '${sonda.dataOcorrenciaCondicaoAdquirida}',
        '${sonda.descricaoCondicaoAdquirida}',
        '${sonda.descricaoCondicaoAdquirida}',
        '${sonda.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
      '${data.codigo}',
      '${data.descricao}',
      '${data.tipo}',
      '${data.peso}',
      '${data.id}'        
    );
    END;
  `)
      console.log("resultado => ", result);

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
      '${data.codigo}',
      '${data.descricao}',
      '${data.permanenciaPrevistaNainternacao}',
      '${data.permanenciaPrevistaNaAlta}',
      '${data.tipo}',
      '${data.peso}',
      '${data.id}'        
    );
    END;
  `)
      console.log("resultado => ", result);

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
        '${data.codigo}',
        '${data.descricao}',
        '${data.sensivelCuidadoPrimario}',
        '${data.id}'        
      );
      END;
    `)
      console.log("resultado => ", result);

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
        '${suporte.tipo}',
        '${suporte.tipoInvasivo}',
        '${suporte.local}',
        '${suporte.dataInicial}',
        '${suporte.dataFinal}',
        '${suporte.codigoCondicaoAdquirida}',
        '${suporte.descricaoCondicaoAdquirida}',
        '${suporte.dataCondicaoAdquirida}',
        '${suporte.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${analise.dataAnalise}',
        '${analise.analiseCritica}',
        '${analise.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${alta.numeroAtendimeno}',
        '${alta.numeroAutorizacao}',
        '${alta.dataAutorizacao}',
        '${alta.dataAtendimentoInicial}',
        '${alta.dataAtendimentoFinal}',
        '${alta.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${condicao.codigo}',
        '${condicao.descricao}',
        '${condicao.dataOcorrencia}',
        '${condicao.dataManifestacao}',
        '${condicao.nome}',
        '${condicao.grave}',
        '${condicao.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${rn.pesoNascimento}',
        '${rn.idadeGestacional}',
        '${rn.comprimento}',
        '${rn.sexo}',
        '${rn.nascidoVivo}',
        '${rn.tocotraumatismo}',
        '${rn.apgar}',
        '${rn.apgarQuintoMinuto}',
        '${rn.alta48horas}',
        '${rn.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${cti.dataInicial}',
        '${cti.dataFinal}',
        '${cti.condicaoAlta}',
        '${cti.tipo}',
        '${cti.permanenciaPrevistaAlta}',
        '${cti.permanenciaReal}',
        '${cti.leito}',
        '${cti.cidPrincipal.codigo}',
        '${cti.cidPrincipal.descricao}',
        '${cti.drgBrasilRefinado?.mdc?.codigo}',
        '${cti.drgBrasilRefinado?.mdc?.descricao}',
        '${cti.drgBrasilRefinado?.codigo}',
        '${cti.medico.crm}',
        '${cti.medico.uf}',
        '${cti.hospital.codigo}',
        '${cti.hospital.nome}',
        '${cti.medico.nome}',
        '${cti.drgBrasilRefinado.tipo}',
        '${cti.drgBrasilRefinado.peso}',
        '${cti.medico.codigoEspecialidade}',
        '${cti.medico.especialidade}',
        '${cti.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${procedimento.codigo}',
        '${procedimento.nome}',
        '${procedimento.porte}',
        '${procedimento.dataAutorizacao}',
        '${procedimento.dataSolicitacao}',
        '${procedimento.dataExecucao}',
        'null',
        'null',
        'null',
        'null',
        'null',
        '${procedimento.dataExecucaoFinal}',
        'null',
        '${procedimento.id}'        
      );
      END;
    `)
        for (const medico of procedimento.medicos) {
          const result = await knex.raw(`
              BEGIN
              dataintegra.INM_DRG_PROCEDIMENTO
              (
                '${procedimento.codigo}',
                '${procedimento.nome}',
                '${procedimento.porte}',
                '${procedimento.dataAutorizacao}',
                '${procedimento.dataSolicitacao}',
                '${procedimento.dataExecucao}',
                '${medico.nome}',
                '${medico.uf}',
                '${medico.crm}',
                '${medico.codigoEspecialidade}',
                '${medico.especialidade}',
                '${procedimento.dataExecucaoFinal}',
                '${medico.tipoAtuacao}',
                '${procedimento.id}'        
              );
              END;
  `)
          console.log("resultado => ", result);
        }
        console.log("resultado => ", result);
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
        '${cid.codigo}',
        '${cid.descricao}',
        '${cid.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${medico.nome}',
        '${medico.uf}',
        '${medico.crm}',
        '${medico.codigoEspecialidade}',
        '${medico.especialidade}',
        '${medico.medicoResponsavel}',
        '${medico.tipoAtuacao}',  
        '${medico.id}'        
      );
      END;
    `)
        console.log("resultado => ", result);
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
        '${data.codigoPaciente}',  
        '${data.dataNascimento}',
        '${data.sexo}',
        '${data.recemNascido}',
        '${data.particular}',
        '${data.idadeEmAnos}',
        '${data.idadeEmMeses}',
        '${data.idadeEmDias}',
        '${data.id}'        
      );
      END;
    `)
      console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialBeneficiario => ", error);
    }
  }
  async recordAssistencialHospital(data: SearchAssistencialHospital): Promise<void> {
    try {
      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_HOSPITAL(
        '${data.codigo}',  
        '${data.nome}',
        '${data.cnes}',
        '${data.id}'        
      );
      END;
    `)
      console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialHospital => ", error);
    }
  }
  async recordAssistencialInstituicao(data: SearchAssistencialInstituicao): Promise<void> {
    try {
      const result = await knex.raw(`
      BEGIN
      dataintegra.INM_DRG_INSTITUICAO(
        '${data.codigo}',  
        '${data.nome}',
        '${data.id}'        
      );
      END;
    `)
      console.log("resultado => ", result);
    } catch (error) {
      console.log("error recordAssistencialInstituicao => ", error);
    }
  }


  async recordAssistencialHeader(data: SearchAssistencialHeader): Promise<void> {
    try {


      const result = await knex.raw(`
      BEGIN
      dataintegra.prc_inm_exporta_dados_drg(
        '${data.id}', 
        '${data.situacao}', 
        '${data.caraterInternacao}',
        '${data.numeroOperadora}',
        '${data.numeroRegistro}',
        '${data.numeroAtendimento}',
        '${data.numeroAutorizacao}',
        '${data.dataInternacao}',
        '${data.dataAlta}',
        '${data.condicaoAlta}',
        '${data.dataAutorizacao}',
        '${data.internadoOutrasVezes}',
        '${data.hospitalInternacaoAnterior}',
        '${data.reinternacao}',
        '${data.recaida}',
        '${data.idOrigemRecaida}',
        '${data.origemReadmissao30Dias}',
        '${data.origemRecaida30Dias}',
        '${data.idInternacaoRecaida}',
        '${data.dataPrevistaAlta}',
        '${data.permanenciaPrevistaNaInternacao}',
        '${data.permanenciaPrevistaNaAlta}',
        '${data.permanenciaReal}',
        '${data.percentil}',
        '${data.procedencia}',
        '${data.ventilacaoMecanica}',
        '${data.totalHorasVentilacaoMecanica}',
        '${data.modalidadeInternacao}',
        '${data.dataCadastro}',
        '${data.usuarioCadastro}',
        '${data.dataCadastroAlta}',
        '${data.usuarioCadastroAlta}',
        '${data.dataUltimaAlteracao}',        
        '${data.usuarioUltimaAlteracao}',
        '${data.correcaoRegistro}',
        '${data.usuarioCorrecao}',
        '${data.dataUltimoRecalculo}',
        '${data.leito}',
        '${data.condicaoAdquiridaGrave}',
        '${data.registroPacienteMae}',
        '${data.maeNaoIdentificada}',
        '${data.estado}',
        '${data.cidade}'                                 
      );
      END;
    `)
      console.log("resultado => ", result);
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
