import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';

const estilos = {
  pagina: {
    minHeight: '100vh',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    backgroundColor: '#f9fafb',
  },
  conteudo: {
    flex: 1,
    maxWidth: '896px',
    margin: '0 auto',
    width: '100%',
    padding: '2rem 1rem',
  },
  titulo: {
    fontSize: '1.875rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  descricao: {
    color: '#6b7280',
    marginBottom: '2rem',
  },
  container: {
    display: 'grid' as const,
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
  cartao: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  botaoPrimario: {
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    width: '100%',
    fontSize: '1rem',
  },
  botaoSecundario: {
    backgroundColor: 'white',
    color: '#16a34a',
    padding: '1rem',
    borderRadius: '8px',
    border: '2px solid #16a34a',
    cursor: 'pointer',
    fontWeight: 500,
    width: '100%',
    fontSize: '1rem',
  },
};

export function Reserva() {
  const [confirmada, setConfirmada] = useState(false);

  if (confirmada) {
    return (
      <div className="pagina" style={estilos.pagina}>
        <Cabecalho />
        <main style={estilos.conteudo}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '500px',
            }}
          >
            <div style={estilos.cartao}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#dcfce7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <CheckCircle size={48} color="#16a34a" />
              </div>
              <h1 style={{ textAlign: 'center', fontSize: '1.875rem', marginBottom: '1rem' }}>
                Reserva Confirmada!
              </h1>
              <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>
                Sua reserva foi realizada com sucesso. Você receberá um e-mail de confirmação
                em breve.
              </p>

              <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Código da Reserva</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a', marginBottom: '1rem' }}>
                  #QE2026-4589
                </div>
                <div
                  style={{
                    borderTop: '1px solid #bbf7d0',
                    paddingTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Quadra:</span>
                    <span style={{ fontWeight: 500 }}>Arena Sport Center</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Data:</span>
                    <span style={{ fontWeight: 500 }}>05/05/2026</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Horário:</span>
                    <span style={{ fontWeight: 500 }}>18:00 - 19:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Valor:</span>
                    <span style={{ fontWeight: 500 }}>R$ 150,00</span>
                  </div>
                </div>
              </div>

              <Link to="/" style={estilos.botaoPrimario as any}>
                Voltar para Início
              </Link>
              <Link
                to="/pesquisa"
                style={{ ...estilos.botaoSecundario, marginTop: '1rem' } as any}
              >
                Nova Reserva
              </Link>
            </div>
          </div>
        </main>
        <Rodape />
      </div>
    );
  }

  return (
    <div className="pagina" style={estilos.pagina}>
      <Cabecalho />
      <main style={estilos.conteudo}>
        <h1 style={estilos.titulo}>Confirmar Reserva</h1>
        <p style={estilos.descricao}>Revise os detalhes da sua reserva antes de confirmar</p>

        <div style={estilos.container}>
          <div style={estilos.cartao}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Detalhes da Reserva
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Calendar color="#16a34a" />
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Data</div>
                  <div style={{ fontWeight: 500 }}>Segunda-feira, 05 de Maio de 2026</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="#16a34a" />
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Horário</div>
                  <div style={{ fontWeight: 500 }}>18:00 - 19:00 (1 hora)</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <DollarSign color="#16a34a" />
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Valor por Hora</div>
                  <div style={{ fontWeight: 500 }}>R$ 150,00</div>
                </div>
              </div>
            </div>
          </div>

          <div style={estilos.cartao}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Resumo
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Valor da hora</span>
                <span>R$ 150,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Duração</span>
                <span>1 hora</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Taxa de serviço</span>
                <span>R$ 5,00</span>
              </div>
              <div
                style={{
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                }}
              >
                <span>Total</span>
                <span style={{ color: '#16a34a' }}>R$ 155,00</span>
              </div>
            </div>

            <button
              onClick={() => setConfirmada(true)}
              style={{ ...estilos.botaoPrimario, marginBottom: '0.75rem' } as any}
            >
              Confirmar Reserva
            </button>
            <Link
              to="/pesquisa"
              style={estilos.botaoSecundario as any}
            >
              Cancelar
            </Link>

            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontSize: '0.75rem', color: '#1e40af' }}>
                <strong>Política de Cancelamento:</strong> Cancelamentos gratuitos até 24h antes do
                horário agendado.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}
