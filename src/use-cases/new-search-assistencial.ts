/* eslint-disable no-unreachable-loop */
import { AssistencialRepository } from '../repositories/search-assistencial-repository'

import { RecordLocalAssistencialRepository } from '../repositories/record-local-assistencial-repository'
import { RecordAssistencialRepository } from '../repositories/record-assistencial-repository'
import {
  SearchAssistencialAdmissional,
  SearchAssistencialAltaAdministrativa,
  SearchAssistencialAnaliseCritica,
  SearchAssistencialBeneficiario,
  SearchAssistencialCateterVascularCentral,
  SearchAssistencialCausaExterna,
  SearchAssistencialCidPrincipal,
  SearchAssistencialCidSecundario,
  SearchAssistencialCondicaoAdquirida,
  SearchAssistencialCTI,
  SearchAssistencialDataRequest,
  SearchAssistencialDrgBrasil,
  SearchAssistencialDRGBrasilRefinado,
  SearchAssistencialHeader,
  SearchAssistencialHospital,
  SearchAssistencialInstituicao,
  SearchAssistencialMedico,
  SearchAssistencialPartoAdequado,
  SearchAssistencialProcedimento,
  SearchAssistencialRecemNascido,
  SearchAssistencialSondaVesicalDeDemora,
  SearchAssistencialSuporteVentilatorio,
  SearchAssistencialVariavel,

} from '../models/Assistencial'

export class SearchAssistencial {
  constructor(
    private assistencialRepository: AssistencialRepository,
    private recordAssistencialKnexRepository: RecordAssistencialRepository,
    private recordAssistencialRepository: RecordLocalAssistencialRepository,
  ) { }

  async execute(
    data: SearchAssistencialDataRequest,
  ): Promise<void> {
    let hasPage: boolean = true;

    for (let counterPages = 1; hasPage == true; counterPages++) {
      const assistencial = await this.assistencialRepository.searchAssistencial(
        {
          ...data,
          page: counterPages,
        },
      )
      if (assistencial.items.length == 0) {
        hasPage = false;
        break;
      }
      try {

        for (const registro of assistencial.items) {
          const ID_INTEGRA: number = parseInt(registro.id)
          const searchAssistencialHeader: SearchAssistencialHeader = {
            id: registro.id,
            situacao: registro.situacao,
            caraterInternacao: registro.caraterInternacao,
            numeroOperadora: registro.numeroOperadora,
            numeroRegistro: registro.numeroRegistro,
            numeroAtendimento: registro.numeroAtendimento,
            numeroAutorizacao: registro.numeroAutorizacao,
            dataInternacao: registro.dataInternacao,
            dataAlta: registro.dataAlta,
            condicaoAlta: registro.condicaoAlta,
            dataAutorizacao: registro.dataAutorizacao,
            internadoOutrasVezes: registro.internadoOutrasVezes,
            hospitalInternacaoAnterior: registro.hospitalInternacaoAnterior,
            reinternacao: registro.reinternacao,
            recaida: registro.recaida,
            idOrigemRecaida: registro.idOrigemRecaida,
            origemReadmissao30Dias: registro.origemReadmissao30Dias,
            origemRecaida30Dias: registro.origemRecaida30Dias,
            idInternacaoRecaida: registro.idInternacaoRecaida,
            dataPrevistaAlta: registro.dataPrevistaAlta,
            permanenciaPrevistaNaInternacao: registro.permanenciaPrevistaNaInternacao,
            permanenciaPrevistaNaAlta: registro.permanenciaPrevistaNaAlta,
            permanenciaReal: registro.permanenciaReal,
            percentil: registro.percentil,
            procedencia: registro.procedencia,
            ventilacaoMecanica: registro.ventilacaoMecanica,
            totalHorasVentilacaoMecanica: registro.totalHorasVentilacaoMecanica,
            modalidadeInternacao: registro.modalidadeInternacao,
            dataCadastro: registro.dataCadastro,
            usuarioCadastro: registro.usuarioCadastro,
            dataCadastroAlta: registro.dataCadastroAlta,
            usuarioCadastroAlta: registro.usuarioCadastroAlta,
            dataUltimaAlteracao: registro.dataUltimaAlteracao,
            usuarioUltimaAlteracao: registro.usuarioUltimaAlteracao,
            correcaoRegistro: registro.correcaoRegistro,
            usuarioCorrecao: registro.usuarioCorrecao,
            dataUltimoRecalculo: registro.dataUltimoRecalculo,
            leito: registro.leito,
            condicaoAdquiridaGrave: registro.condicaoAdquiridaGrave,
            registroPacienteMae: registro.registroPacienteMae,
            maeNaoIdentificada: registro.maeNaoIdentificada,
            estado: registro.estado,
            cidade: registro.cidade,
          };
          //console.log("searchAssistencialHeader => ", searchAssistencialHeader);
          await this.recordAssistencialKnexRepository.recordAssistencialHeader(searchAssistencialHeader);          
          const searchAssistencialInstituicao: SearchAssistencialInstituicao = {
            id: searchAssistencialHeader.id,
            codigo: registro.instituicao.codigo,
            nome: registro.instituicao.nome,
          };
          // console.log("searchAssistencialInstituicao => ", searchAssistencialInstituicao);
          await this.recordAssistencialKnexRepository.recordAssistencialInstituicao(searchAssistencialInstituicao);
          const SearchAssistencialHospital: SearchAssistencialHospital = {
            id: searchAssistencialHeader.id,
            codigo: registro.hospital.codigo,
            nome: registro.hospital.nome,
            cnes: registro.hospital.cnes,
          };
          // console.log("SearchAssistencialHospital => ", SearchAssistencialHospital);
          await this.recordAssistencialKnexRepository.recordAssistencialHospital(SearchAssistencialHospital);

          const SearchAssistencialBeneficiario: SearchAssistencialBeneficiario = {
            id: searchAssistencialHeader.id,
            codigoPaciente: registro.beneficiario.codigoPaciente,
            plano: registro.beneficiario.plano,
            dataNascimento: registro.beneficiario.dataNascimento,
            sexo: registro.beneficiario.sexo,
            recemNascido: registro.beneficiario.recemNascido,
            particular: registro.beneficiario.particular,
            idadeEmAnos: registro.beneficiario.idadeEmAnos,
            idadeEmDias: registro.beneficiario.idadeEmDias,
            idadeEmMeses: registro.beneficiario.idadeEmMeses,
          };
          // console.log("SearchAssistencialBeneficiario => ", SearchAssistencialBeneficiario);
          await this.recordAssistencialKnexRepository.recordAssistencialBeneficiario(SearchAssistencialBeneficiario);
          const searchAssistencialMedicos: SearchAssistencialMedico[] = [];
          registro.medico.forEach((element) => {
            searchAssistencialMedicos.push({
              id: searchAssistencialHeader.id,
              nome: element.nome,
              uf: element.uf,
              crm: element.crm,
              codigoEspecialidade: element.codigoEspecialidade,
              especialidade: element.especialidade,
              medicoResponsavel: element.medicoResponsavel,
              tipoAtuacao: element.tipoAtuacao,
            });
          });
          //console.log("searchAssistencialMedicos => ", searchAssistencialMedicos);
          await this.recordAssistencialKnexRepository.recordAssistencialMedico(searchAssistencialMedicos);
          const SearchAssistencialCidSecundario: SearchAssistencialCidSecundario[] = [];
          registro.cidSecundario.forEach((element) => {
            SearchAssistencialCidSecundario.push({
              id: searchAssistencialHeader.id,
              codigo: element.codigo,
              descricao: element.descricao
            });
          });
          // console.log("SearchAssistencialCidSecundario => ", SearchAssistencialCidSecundario);
          await this.recordAssistencialKnexRepository.recordAssistencialCidSecundario(SearchAssistencialCidSecundario);
          const SearchAssistencialProcedimento: SearchAssistencialProcedimento[] = [];
          registro.procedimento.forEach((element) => {
            SearchAssistencialProcedimento.push({
              id: searchAssistencialHeader.id,
              codigo: element.codigo,
              nome: element.nome,
              porte: element.porte,
              dataAutorizacao: element.dataAutorizacao,
              dataSolicitacao: element.dataSolicitacao,
              dataExecucao: element.dataExecucao,
              dataExecucaoFinal: element.dataExecucaoFinal,
              medicos: element.medico.map((elementMedico) => {
                return {
                  nome: elementMedico.nome,
                  uf: elementMedico.uf,
                  crm: elementMedico.crm,
                  codigoEspecialidade: elementMedico.codigoEspecialidade,
                  especialidade: elementMedico.especialidade,
                  medicoResponsavel: elementMedico.medicoResponsavel,
                  tipoAtuacao: elementMedico.tipoAtuacao,
                };
              })
            });
          });
          // console.log("SearchAssistencialProcedimento => ", SearchAssistencialProcedimento[0].medicos);
          await this.recordAssistencialKnexRepository.recordAssistencialProcedimento(SearchAssistencialProcedimento);
          const SearchAssistencialCTI: SearchAssistencialCTI[] = [];
          registro.cti.forEach((element) => {
            SearchAssistencialCTI.push({
              id: searchAssistencialHeader.id,
              dataInicial: element.dataInicial,
              dataFinal: element.dataFinal,
              condicaoAlta: element.condicaoAlta,
              tipo: element.tipo,
              permanenciaPrevistaAlta: element.permanenciaPrevistaNaAlta,
              permanenciaReal: element.permanenciaReal,
              leito: element.leito,
              medico: {
                id: searchAssistencialHeader.id,
                nome: element.medico?.nome,
                uf: element.medico?.uf,
                crm: element.medico?.crm,
                codigoEspecialidade: element.medico?.codigoEspecialidade,
                especialidade: element.medico?.especialidade,
                medicoResponsavel: element.medico?.medicoResponsavel,
                tipoAtuacao: element.medico?.tipoAtuacao,
              },
              cidPrincipal: {
                id: searchAssistencialHeader.id,
                codigo: element.cidPrincipal.codigo,
                descricao: element.cidPrincipal.descricao,
                sensivelCuidadoPrimario: element.cidPrincipal.sensivelCuidadoPrimario,
              },
              drgBrasilRefinado: {
                id: searchAssistencialHeader.id,
                codigo: element.drgBrasilRefinado.codigo,
                descricao: element.drgBrasilRefinado.descricao,
                tipo: element.drgBrasilRefinado.tipo,
                peso: element.drgBrasilRefinado.peso,
                mdc: {
                  id: searchAssistencialHeader.id,
                  codigo: element.drgBrasilRefinado.mdc.codigo,
                  descricao: element.drgBrasilRefinado.mdc.descricao
                }
              },
              hospital: {
                id: searchAssistencialHeader.id,
                codigo: element.hospital?.codigo,
                nome: element.hospital?.nome,
                cnes: element.hospital?.cnes,
              }
            });
          });
          //console.log("SearchAssistencialCTI => ", SearchAssistencialCTI);
          await this.recordAssistencialKnexRepository.recordAssistencialCTI(SearchAssistencialCTI);
          const SearchAssistencialRecemNascido: SearchAssistencialRecemNascido[] = [];
          registro.rn.forEach((element) => {
            SearchAssistencialRecemNascido.push({
              id: searchAssistencialHeader.id,
              pesoNascimento: element.pesoNascimento,
              idadeGestacional: element.idadeGestacional,
              comprimento: element.comprimento,
              sexo: element.sexo,
              nascidoVivo: element.nascidoVivo,
              tocotraumatismo: element.tocotraumatismo,
              apgar: element.apgar,
              apgarQuintoMinuto: element.apgarQuintoMinuto,
              alta48horas: element.alta48horas,
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialRN(SearchAssistencialRecemNascido);
          // console.log("SearchAssistencialRecemNascido => ", SearchAssistencialRecemNascido);
          const SearchAssistencialCondicaoAdquirida: SearchAssistencialCondicaoAdquirida[] = [];
          registro.condicaoAdquirida.forEach((element) => {
            SearchAssistencialCondicaoAdquirida.push({
              id: searchAssistencialHeader.id,
              codigo: element.codigo,
              descricao: element.descricao,
              dataOcorrencia: element.dataOcorrencia,
              dataManifestacao: element.dataManifestacao,
              nome: element.nome,
              grave: element.grave,
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialCondicaoAdquirida(SearchAssistencialCondicaoAdquirida);
          //console.log("SearchAssistencialCondicaoAdquirida => ", SearchAssistencialCondicaoAdquirida);
          const SearchAssistencialAltaAdministrativa: SearchAssistencialAltaAdministrativa[] = [];
          registro.altaAdministrativa.forEach((element) => {
            SearchAssistencialAltaAdministrativa.push({
              id: searchAssistencialHeader.id,
              numeroAtendimeno: element.numeroAtendimento,
              numeroAutorizacao: element.numeroAutorizacao,
              dataAutorizacao: element.dataAutorizacao,
              dataAtendimentoInicial: element.dataAtendimentoInicial,
              dataAtendimentoFinal: element.dataAtendimentoFinal,
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialAltaAdministrativa(SearchAssistencialAltaAdministrativa);
          // console.log("SearchAssistencialAltaAdministrativa => ", SearchAssistencialAltaAdministrativa);

          const SearchAssistencialAnaliseCritica: SearchAssistencialAnaliseCritica[] = [];
          registro.analiseCritica.forEach((element) => {
            SearchAssistencialAnaliseCritica.push({
              id: searchAssistencialHeader.id,
              dataAnalise: element.dataAnalise,
              analiseCritica: element.analiseCritica
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialAnaliseCritica(SearchAssistencialAnaliseCritica);
          // console.log("SearchAssistencialAnaliseCritica => ", SearchAssistencialAnaliseCritica);

          const SearchAssistencialSuporteVentilatorio: SearchAssistencialSuporteVentilatorio[] = [];
          registro.suporteVentilatorio.forEach((element) => {
            SearchAssistencialSuporteVentilatorio.push({
              id: searchAssistencialHeader.id,
              tipo: element.tipo,
              tipoInvasivo: element.tipoInvasivo,
              local: element.local,
              dataInicial: element.dataInicial,
              dataFinal: element.dataFinal,
              codigoCondicaoAdquirida: element.condicaoAdquirida?.codigo,
              descricaoCondicaoAdquirida: element.condicaoAdquirida?.descricao,
              dataCondicaoAdquirida: element.condicaoAdquirida?.dataOcorrencia,
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialSuporteVentilatorio(SearchAssistencialSuporteVentilatorio);
          // console.log("SearchAssistencialSuporteVentilatorio => ", SearchAssistencialSuporteVentilatorio);
          const SearchAssistencialCidPrincipal: SearchAssistencialCidPrincipal = {
            id: searchAssistencialHeader.id,
            codigo: registro.cidPrincipal.codigo,
            descricao: registro.cidPrincipal.descricao,
            sensivelCuidadoPrimario: registro.cidPrincipal.sensivelCuidadoPrimario,
          };
          await this.recordAssistencialKnexRepository.recordAssistencialCidPrincipal(SearchAssistencialCidPrincipal);
          // console.log("SearchAssistencialCidPrincipal => ", SearchAssistencialCidPrincipal);
          const SearchAssistencialDrgBrasil: SearchAssistencialDrgBrasil = {
            id: searchAssistencialHeader.id,
            codigo: registro.drgBrasil?.codigo,
            descricao: registro.drgBrasil?.descricao,
            permanenciaPrevistaNaAlta: registro.drgBrasil?.permanenciaPrevistaNaAlta,
            permanenciaPrevistaNainternacao: registro.drgBrasil?.permanenciaPrevistaNaInternacao,
            tipo: registro.drgBrasil?.tipo,
            peso: registro.drgBrasil?.peso,
          };
          await this.recordAssistencialKnexRepository.recordAssistencialDrgBrasil(SearchAssistencialDrgBrasil);
          // console.log("SearchAssistencialDrgBrasil => ", SearchAssistencialDrgBrasil);
          const SearchAssistencialDRGBrasilRefinado: SearchAssistencialDRGBrasilRefinado = {
            id: searchAssistencialHeader.id,
            codigo: registro.drgBrasilRefinado.codigo,
            descricao: registro.drgBrasilRefinado.descricao,
            tipo: registro.drgBrasilRefinado.tipo,
            peso: registro.drgBrasilRefinado.peso,
            mdc: null,
          };
          await this.recordAssistencialKnexRepository.recordAssistencialDrgBrasilRefinado(SearchAssistencialDRGBrasilRefinado);
          // console.log("SearchAssistencialDRGBrasilRefinado => ", SearchAssistencialDRGBrasilRefinado);
          // return;
          const SearchAssistencialSondaVesicalDeDemora: SearchAssistencialSondaVesicalDeDemora[] = [];
          registro.sondaVesicalDeDemora.forEach((element) => {
            // console.log("condicaoAdquiridaSondaVesicalDeDemora => ", element.condicaoAdquiridaSondaVesicalDeDemora);
            SearchAssistencialSondaVesicalDeDemora.push({
              id: searchAssistencialHeader.id,
              local: element.local,
              dataInicial: element.dataInicial,
              dataFinal: element.dataFinal,
              codigoCondicaoAdquirida: element.condicaoAdquiridaSondaVesicalDeDemora?.codigo,
              descricaoCondicaoAdquirida: element.condicaoAdquiridaSondaVesicalDeDemora?.descricao,
              dataOcorrenciaCondicaoAdquirida: element.condicaoAdquiridaSondaVesicalDeDemora?.dataOcorrencia,
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialSondaVesicalDemora(SearchAssistencialSondaVesicalDeDemora);
          //console.log("SearchAssistencialSondaVesicalDeDemora => ", SearchAssistencialSondaVesicalDeDemora);

          const SearchAssistencialCateterVascularCentral: SearchAssistencialCateterVascularCentral[] = [];
          registro.cateterVascularCentral.forEach((element) => {
            //console.log("SearchAssistencialCateterVascularCentral ========> ", element.condicaoAdquiridaCateterVascularCentral);

            SearchAssistencialCateterVascularCentral.push({
              id: searchAssistencialHeader.id,
              local: element.local,
              dataInicial: element.dataInicial,
              dataFinal: element.dataFinal,
              codigoCondicaAdquirida: element.condicaoAdquiridaCateterVascularCentral?.codigo,
              descricaoCondicaAdquirida: element.condicaoAdquiridaCateterVascularCentral?.descricao,
              dataCondicaAdquirida: element.condicaoAdquiridaCateterVascularCentral?.dataOcorrencia,
            });
          });
          await this.recordAssistencialKnexRepository.recordAssistencialCateterVascular(SearchAssistencialCateterVascularCentral);
          // console.log("SearchAssistencialCateterVascularCentral => ", SearchAssistencialCateterVascularCentral);

          const SearchAssistencialPartoAdequado: SearchAssistencialPartoAdequado = {
            id: searchAssistencialHeader.id,
            classificacaoRobson: registro.partoAdequado?.classificacaoRobson
          };
          // console.log("SearchAssistencialPartoAdequado => ", SearchAssistencialPartoAdequado);
          await this.recordAssistencialKnexRepository.recordAssistencialPartoAdequado(SearchAssistencialPartoAdequado);
          const SearchAssistencialAdmissional: SearchAssistencialAdmissional = {
            id: searchAssistencialHeader.id,
            codigo: registro.drgAdmissional.codigo,
            descricao: registro.drgAdmissional.descricao,
          };
          await this.recordAssistencialKnexRepository.recordAssistencialAdmissional(SearchAssistencialAdmissional);
          // console.log("SearchAssistencialAdmissional => ", SearchAssistencialAdmissional);
          //return;
          const SearchAssistencialVariaveis: SearchAssistencialVariavel = {
            id: searchAssistencialHeader.id,
            caGrave: registro.variaveis.caGrave,
            gerenciavelAtencaoPrimaria: registro.variaveis.gerenciavelAtencaoPrimaria,
            gerenciavelEmergencia: registro.variaveis.gerenciavelEmergencia,
            idosoFragil: registro.variaveis.idosoFragil
          };
          await this.recordAssistencialKnexRepository.recordAssistencialVariaveis(SearchAssistencialVariaveis);
          // console.log("SearchAssistencialVariaveis => ", SearchAssistencialVariaveis);
          const SearchAssistencialCausaExterna: SearchAssistencialCausaExterna[] = [];
          registro.causaExterna.forEach((element) => {
            SearchAssistencialCausaExterna.push({
              id: searchAssistencialHeader.id,
              descricao: element.descricao,
              tempo: element.tempo,
              dataInicial: element.dataInicial,
              dataFinal: element.dataFinal,
            });
          });
          
        }
      } catch (error) {
        console.error('Erro ao inserir dados:', error)
        throw error
      }
    }
    return
  }
}
