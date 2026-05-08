import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';

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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Cabecalho />

      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Dashboard do Proprietário
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Arena Sport Center</p>

        {/* Cards de Estatísticas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {[
            { label: 'Reservas Hoje', valor: '12', tendencia: '+3 desde ontem' },
            { label: 'Receita Mensal', valor: 'R$ 15.450', tendencia: '+12% este mês' },
            { label: 'Taxa de Ocupação', valor: '82%', tendencia: '+5% esta semana' },
            { label: 'Total de Quadras', valor: '3', tendencia: '2 ativas, 1 manutenção' },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                {card.label}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {card.valor}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#16a34a' }}>{card.tendencia}</div>
            </div>
          ))}
        </div>

        {/* Tabela de Reservas */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
            Reservas Recentes
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  {['Quadra', 'Data', 'Horário', 'Cliente', 'Status', 'Valor'].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#6b7280',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reservas.map((reserva) => (
                  <tr key={reserva.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>{reserva.quadra}</td>
                    <td style={{ padding: '1rem', color: '#6b7280' }}>{reserva.data}</td>
                    <td style={{ padding: '1rem', color: '#6b7280' }}>{reserva.hora}</td>
                    <td style={{ padding: '1rem', color: '#6b7280' }}>{reserva.cliente}</td>
                    <td style={{ padding: '1rem' }}>
                      <span
                        style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: reserva.status === 'Confirmada' ? '#dcfce7' : '#fef3c7',
                          color: reserva.status === 'Confirmada' ? '#166534' : '#92400e',
                        }}
                      >
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
      </main>

      <Rodape />
    </div>
  );
}
