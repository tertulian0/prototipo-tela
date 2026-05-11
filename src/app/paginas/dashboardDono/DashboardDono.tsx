import { Cabecalho } from '../../componentes/Cabecalho';
import { Rodape } from '../../componentes/Rodape';
import estilos from './DashboardDono.module.css';


export function DashboardDono() {
  const reservas = [
    {
      id: 1,
      quadra: 'Quadra de Futebol A',
      data: '05/05/2026',
      hora: '18:00-19:00',
      cliente: 'João Silva',
      status: 'Confirmada',
      valor: 'R$ 150',
    },
    {
      id: 2,
      quadra: 'Quadra de Vôlei B',
      data: '06/05/2026',
      hora: '15:00-16:00',
      cliente: 'Maria Santos',
      status: 'Pendente',
      valor: 'R$ 80',
    },
  ];

  return (
    <div className={estilos.conteiner}>
      <Cabecalho />

      <main className={estilos.conteudo}>
        <h1 className={estilos.tituloDashboard}>
          Dashboard do Proprietário
        </h1>
        <p className={estilos.subtituloDashboard}>Arena Sport Center</p>

        {/* Cards de Estatísticas */}
        <div className={estilos.cardsContainer}>
          {[
            { label: 'Reservas Hoje', valor: '12', tendencia: '+3 desde ontem' },
            { label: 'Receita Mensal', valor: 'R$ 15.450', tendencia: '+12% este mês' },
            { label: 'Taxa de Ocupação', valor: '82%', tendencia: '+5% esta semana' },
            { label: 'Total de Quadras', valor: '3', tendencia: '2 ativas, 1 manutenção' },
          ].map((card, i) => (
            <div
              key={i}
              className={estilos.card}
            >
              <div className={estilos.cardLabel}>
                {card.label}
              </div>
              <div className={estilos.cardValor}>
                {card.valor}
              </div>
              <div className={estilos.cardTendencia}>
                {card.tendencia}
              </div>
            </div>
          ))}
        </div>

        {/* Tabela de Reservas */}
        <div
          className={estilos.card}>
  
          <h2 className={estilos.cardTitulo}>
            Reservas Recentes
          </h2>
          <div className={estilos.conteinerTabela}>
            <table className={estilos.tabela}>
              <thead>
                <tr>
                  {['Quadra', 'Data', 'Horário', 'Cliente', 'Status', 'Valor'].map((h) => (
                    <th
                      key={h}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reservas.map((reserva) => (
                  <tr key={reserva.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td className={estilos.nomeQuadraReserva}>
                      {reserva.quadra}
                    </td>
                    <td className={estilos.dadosQuadraReserva}>
                      {reserva.data}
                    </td>
                    <td className={estilos.dadosQuadraReserva}>
                      {reserva.hora}
                    </td>
                    <td className={estilos.dadosQuadraReserva}>
                      {reserva.cliente}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      
                      <span
                        className={reserva.status === 'Confirmada' ? estilos.reservaConfirmada : estilos.reservaPendente}>
                        {reserva.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>{reserva.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/*  */}
      </main>

      <Rodape />
    </div>
  );
}
