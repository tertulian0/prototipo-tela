import { Link } from 'react-router-dom';
import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';

export function CadastroQuadra() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Cabecalho />

      <main style={{ flex: 1, maxWidth: '896px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
        <Link
          to="/dono"
          style={{ display: 'flex', alignItems: 'center', color: '#16a34a', marginBottom: '1rem', textDecoration: 'none' }}
        >
          ← Voltar ao Dashboard
        </Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Cadastrar Nova Quadra
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Preencha as informações abaixo para cadastrar uma nova quadra esportiva
        </p>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <form>
            {/* Informações da Empresa */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                Informações da Empresa
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1rem',
                }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    placeholder="Arena Sport Center"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    CNPJ *
                  </label>
                  <input
                    type="text"
                    placeholder="00.000.000/0000-00"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Informações da Quadra */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                Informações da Quadra
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Nome da Quadra *
                  </label>
                  <input
                    type="text"
                    placeholder="Quadra de Futebol A"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Tipo de Esporte *
                  </label>
                  <select
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                    }}
                  >
                    <option value="">Selecione...</option>
                    <option value="futebol">Futebol</option>
                    <option value="volei">Vôlei</option>
                    <option value="basquete">Basquete</option>
                    <option value="tenis">Tênis</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Descrição da Quadra
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva as características e facilidades da quadra..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                    }}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Preços */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                Preços
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Preço por Hora (Diurno) *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '10px', color: '#6b7280' }}>
                      R$
                    </span>
                    <input
                      type="number"
                      placeholder="120.00"
                      style={{
                        width: '100%',
                        paddingLeft: '32px',
                        padding: '10px 12px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Preço por Hora (Noturno) *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '10px', color: '#6b7280' }}>
                      R$
                    </span>
                    <input
                      type="number"
                      placeholder="150.00"
                      style={{
                        width: '100%',
                        paddingLeft: '32px',
                        padding: '10px 12px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#16a34a',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Salvar Quadra
            </button>
          </form>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
