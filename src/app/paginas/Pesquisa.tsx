import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Filter, ArrowLeft } from 'lucide-react';
import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';
import estilos from './Pesquisa.module.css';

const horariosDisponiveis = [
  { id: 1, hora: '08:00 - 09:00', disponivel: true, preco: 'R$ 120' },
  { id: 2, hora: '09:00 - 10:00', disponivel: true, preco: 'R$ 120' },
  { id: 3, hora: '10:00 - 11:00', disponivel: false, preco: 'R$ 120' },
  { id: 4, hora: '11:00 - 12:00', disponivel: true, preco: 'R$ 120' },
  { id: 5, hora: '14:00 - 15:00', disponivel: true, preco: 'R$ 120' },
  { id: 6, hora: '15:00 - 16:00', disponivel: true, preco: 'R$ 120' },
  { id: 7, hora: '16:00 - 17:00', disponivel: false, preco: 'R$ 120' },
  { id: 8, hora: '17:00 - 18:00', disponivel: true, preco: 'R$ 120' },
  { id: 9, hora: '18:00 - 19:00', disponivel: true, preco: 'R$ 150' },
  { id: 10, hora: '19:00 - 20:00', disponivel: true, preco: 'R$ 150' },
  { id: 11, hora: '20:00 - 21:00', disponivel: true, preco: 'R$ 150' },
  { id: 12, hora: '21:00 - 22:00', disponivel: false, preco: 'R$ 150' },
];

const quadras = [
  {
    id: 1,
    nome: 'Arena Sport Center',
    esporte: 'Futebol',
    preco: 'R$ 120',
    localizacao: 'Centro - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
    horarios: horariosDisponiveis
  },
  {
    id: 2,
    nome: 'Quadra Vôlei Pro',
    esporte: 'Vôlei',
    preco: 'R$ 80',
    localizacao: 'Zona Sul - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop',
    horarios: horariosDisponiveis
  },
  {
    id: 3,
    nome: 'Arena de Basquete',
    esporte: 'Basquete',
    preco: 'R$ 100',
    localizacao: 'Zona Oeste - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
    horarios: horariosDisponiveis
  },
  {
    id: 4,
    nome: 'Tênis Club Premium',
    esporte: 'Tênis',
    preco: 'R$ 150',
    localizacao: 'Jardins - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop',
    horarios: horariosDisponiveis
  },
];

export function Pesquisa() {
  const [dataSelecionada, setDataSelecionada] = useState('2026-05-05');
  const [esporteSelecionado, setEsporteSelecionado] = useState('Futebol');
  const navegar = useNavigate();
  return (
    <div className={estilos.pagina}>
      <Cabecalho />

      <main className={estilos.conteudo}>
        <div className={estilos.breadcrumb}>
          <Link to="/">
            <ArrowLeft size={16} style={{ display: 'inline', marginRight: '0.25rem' }} />
            Voltar para início
          </Link>
        </div>

        <h1 className={estilos.titulo}>Pesquisar Disponibilidade</h1>
        <p className={estilos.descricao}>
          Selecione a data, horário e modalidade para encontrar quadras disponíveis
        </p>

        <div className={estilos.container}>
          {/* Filtros Sidebar */}
          <aside className={estilos.filtros}>
            <h2 className={estilos.tituloFiltros}>
              <Filter size={20} />
              Filtros
            </h2>

            <div className={estilos.grupo}>
              <label className={estilos.rotulo}>
                <Calendar size={16} style={{ display: 'inline', marginRight: '0.25rem' }} />
                Selecione a Data
              </label>
              <input
                type="date"
                value={dataSelecionada}
                onChange={(e) => setDataSelecionada(e.target.value)}
                className={estilos.campo}
              />
            </div>

            <div className={estilos.grupo}>
              <label className={estilos.rotulo}>Modalidade Esportiva</label>
              <select
                value={esporteSelecionado}
                onChange={(e) => setEsporteSelecionado(e.target.value)}
                className={estilos.campo}
              >
                <option>Futebol</option>
                <option>Vôlei</option>
                <option>Basquete</option>
                <option>Tênis</option>
              </select>
            </div>

            <div className={estilos.grupo}>
              <label className={estilos.rotulo}>Localização</label>
              <select className={estilos.campo}>
                <option>Todas as regiões</option>
                <option>Centro</option>
                <option>Zona Sul</option>
                <option>Zona Norte</option>
                <option>Zona Leste</option>
                <option>Zona Oeste</option>
              </select>
            </div>

            <div className={estilos.grupo}>
              <label className={estilos.rotulo}>Faixa de Preço</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Mín"
                  className={estilos.campo}
                  style={{ flex: 1 }}
                />
                <span style={{ color: 'var(--cor-texto-leve)', alignSelf: 'center' }}>até</span>
                <input
                  type="number"
                  placeholder="Máx"
                  className={estilos.campo}
                  style={{ flex: 1 }}
                />
              </div>
            </div>

            <button className={estilos.botaoAplicar}>Aplicar Filtros</button>
          </aside>

          {/* Resultados */}
          <section className={estilos.resultados}>
            <h1>Resultados da Pesquisa</h1>
            {quadras.map((quadra) => (
            <div className={estilos.resultadoItem}>
              <img src={quadra.imagem} alt={quadra.nome} className={estilos.imagemResultado} />
              <div className={estilos.informacoesQuadra}>
                <h2 className={estilos.nomeQuadra}>{quadra.nome}</h2>
                <p className={estilos.dadosQuadra}>{quadra.esporte}</p>
                <p className={estilos.dadosQuadra}>{quadra.preco}</p>
                <p className={estilos.dadosQuadra}>{quadra.localizacao}</p>
              </div>
              <button className={estilos.botaoReservar} onClick={() => navegar(`/quadra/${quadra.id}`)}>
                Reserve agora
              </button>
            </div>
            ))}
          </section>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
