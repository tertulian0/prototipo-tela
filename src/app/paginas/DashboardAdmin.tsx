import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';

export function DashboardAdmin() {
  const aprovacoesPendentes = [
    {
      id: 1,
      empresa: 'Arena Sport Center',
      proprietario: 'João Silva',
      cnpj: '12.345.678/0001-90',
      quadras: 3,
      data: '28/04/2026',
    },
    {
      id: 2,
      empresa: 'Quadra Pro Sports',
      proprietario: 'Maria Santos',
      cnpj: '98.765.432/0001-10',
      quadras: 2,
      data: '29/04/2026',
    },
  ];

  const proprietarios = [
    {
      id: 1,
      empresa: 'Arena Sport Center',
      proprietario: 'Carlos Souza',
      cnpj: '45.678.901/0001-23',
      quadras: 4,
      receita: 'R$ 15.450',
    },
    {
      id: 2,
      empresa: 'Mega Arena',
      proprietario: 'Ana Paula',
      cnpj: '23.456.789/0001-56',
      quadras: 6,
      receita: 'R$ 23.890',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Cabecalho />

      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Painel Administrativo
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Gerencie proprietários, quadras e aprovações
        </p>

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
            { label: 'Total de Proprietários', valor: '24' },
            { label: 'Total de Quadras', valor: '87' },
            { label: 'Cadastros Pendentes', valor: '3' },
            { label: 'Receita Total (mês)', valor: 'R$ 125.450' },
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
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>{card.valor}</div>
            </div>
          ))}
        </div>

        {/* Tabela de Aprovações Pendentes */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
            Cadastros Pendentes de Aprovação
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
                  {['ID', 'Empresa', 'Proprietário', 'CNPJ', 'Quadras', 'Data', 'Ações'].map((h) => (
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
                {aprovacoesPendentes.map((aprovacao) => (
                  <tr key={aprovacao.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>#{aprovacao.id}</td>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>{aprovacao.empresa}</td>
                    <td style={{ padding: '1rem', color: '#6b7280' }}>{aprovacao.proprietario}</td>
                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                      {aprovacao.cnpj}
                    </td>
                    <td style={{ padding: '1rem', color: '#6b7280', textAlign: 'center' }}>
                      {aprovacao.quadras}
                    </td>
                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                      {aprovacao.data}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <button
                        style={{
                          backgroundColor: '#1e40af',
                          color: 'white',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          marginRight: '0.5rem',
                        }}
                      >
                        Aprovar
                      </button>
                      <button
                        style={{
                          backgroundColor: '#ef4444',
                          color: 'white',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                        }}
                      >
                        Rejeitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Proprietários Registrados */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
            Proprietários Registrados
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
                  {['ID', 'Empresa', 'Proprietário', 'CNPJ', 'Quadras', 'Receita', 'Ações'].map((h) => (
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
                {proprietarios.map((prop) => (
                  <tr key={prop.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>#{prop.id}</td>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>{prop.empresa}</td>
                    <td style={{ padding: '1rem', color: '#6b7280' }}>{prop.proprietario}</td>
                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                      {prop.cnpj}
                    </td>
                    <td style={{ padding: '1rem', color: '#6b7280', textAlign: 'center' }}>
                      {prop.quadras}
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>{prop.receita}</td>
                    <td style={{ padding: '1rem' }}>
                      <button
                        style={{
                          backgroundColor: '#1e40af',
                          color: 'white',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                        }}
                      >
                        Editar
                      </button>
                    </td>
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
