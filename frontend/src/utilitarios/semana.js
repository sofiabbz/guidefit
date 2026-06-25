export function obterChaveSemana(data) {
  const d = new Date(Date.UTC(data.getFullYear(), data.getMonth(), data.getDate()));
  const diaSemana = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - diaSemana);
  const inicioAno = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const numeroSemana = Math.ceil((((d - inicioAno) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(numeroSemana).padStart(2, '0')}`;
}

export function obterIntervaloSemana(data) {
  const d = new Date(data);
  const diaSemana = d.getDay() || 7;
  const segunda = new Date(d);
  segunda.setDate(d.getDate() - diaSemana + 1);
  const domingo = new Date(segunda);
  domingo.setDate(segunda.getDate() + 6);
  const formatar = (data) => data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  return `${formatar(segunda)} - ${formatar(domingo)}`;
}