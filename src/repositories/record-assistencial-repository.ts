import { SearchAssistencialAdmissional, SearchAssistencialAltaAdministrativa, SearchAssistencialAnaliseCritica, SearchAssistencialBeneficiario, SearchAssistencialCateterVascularCentral, SearchAssistencialCausaExterna, SearchAssistencialCidPrincipal, SearchAssistencialCidSecundario, SearchAssistencialCondicaoAdquirida, SearchAssistencialCTI, SearchAssistencialDrgBrasil, SearchAssistencialDRGBrasilRefinado, SearchAssistencialHeader, SearchAssistencialHospital, SearchAssistencialInstituicao, SearchAssistencialMedico, SearchAssistencialPartoAdequado, SearchAssistencialProcedimento, SearchAssistencialRecemNascido, SearchAssistencialSondaVesicalDeDemora, SearchAssistencialSuporteVentilatorio, SearchAssistencialVariavel } from "../models/Assistencial"

export interface RecordAssistencialRepository {
  recordAssistencialHeader(data: SearchAssistencialHeader): Promise<void>
  recordAssistencialInstituicao(data: SearchAssistencialInstituicao): Promise<void>
  recordAssistencialHospital(data: SearchAssistencialHospital): Promise<void>
  recordAssistencialBeneficiario(data: SearchAssistencialBeneficiario): Promise<void>
  recordAssistencialMedico(data: SearchAssistencialMedico[]): Promise<void>
  recordAssistencialCidSecundario(data: SearchAssistencialCidSecundario[]): Promise<void>
  recordAssistencialProcedimento(data: SearchAssistencialProcedimento[]): Promise<void>
  recordAssistencialCTI(data: SearchAssistencialCTI[]): Promise<void>
  recordAssistencialRN(data: SearchAssistencialRecemNascido[]): Promise<void>
  recordAssistencialCondicaoAdquirida(data: SearchAssistencialCondicaoAdquirida[]): Promise<void>
  recordAssistencialAltaAdministrativa(data: SearchAssistencialAltaAdministrativa[]): Promise<void>
  recordAssistencialAnaliseCritica(data: SearchAssistencialAnaliseCritica[]): Promise<void>
  recordAssistencialSuporteVentilatorio(data: SearchAssistencialSuporteVentilatorio[]): Promise<void>
  recordAssistencialCidPrincipal(data: SearchAssistencialCidPrincipal): Promise<void>
  recordAssistencialDrgBrasil(data: SearchAssistencialDrgBrasil): Promise<void>
  recordAssistencialDrgBrasilRefinado(data: SearchAssistencialDRGBrasilRefinado): Promise<void>
  recordAssistencialSondaVesicalDemora(data: SearchAssistencialSondaVesicalDeDemora[]): Promise<void>
  recordAssistencialCateterVascular(data: SearchAssistencialCateterVascularCentral[]): Promise<void>
  recordAssistencialPartoAdequado(data: SearchAssistencialPartoAdequado): Promise<void>
  recordAssistencialAdmissional(data: SearchAssistencialAdmissional): Promise<void>
  recordAssistencialVariaveis(data: SearchAssistencialVariavel): Promise<void>
  recordAssistencialCausaExterna(data: SearchAssistencialCausaExterna[]): Promise<void>
  verificarValor(valor: any): string | null
  getSequence(): Promise<number>
}
