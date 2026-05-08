import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Search as IconePesquisa } from 'lucide-react';
import { Cabecalho } from '../componentes/Cabecalho';
import { Rodape } from '../componentes/Rodape';
import estilos from './Inicio.module.css';

const quadras = [
  {
    id: 1,
    nome: 'Arena Sport Center',
    esporte: 'Futebol',
    preco: 'R$ 120',
    localizacao: 'Centro - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    nome: 'Quadra Vôlei Pro',
    esporte: 'Vôlei',
    preco: 'R$ 80',
    localizacao: 'Zona Sul - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    nome: 'Arena de Basquete',
    esporte: 'Basquete',
    preco: 'R$ 100',
    localizacao: 'Zona Oeste - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    nome: 'Tênis Club Premium',
    esporte: 'Tênis',
    preco: 'R$ 150',
    localizacao: 'Jardins - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop'
  },
];

export function Inicio() {

  return (
    <div className={estilos.pagina}>
      <Cabecalho />
      <main className={estilos.conteudo}>
        {/* Seção Hero */}
        <section className={estilos.heroSection}>
          <div className={estilos.containerHero}>
            <h1 className={estilos.titulo}>
              Reserve sua quadra esportiva com facilidade
            </h1>
            <p className={estilos.subtitulo}>
              Encontre e reserve quadras de futebol, vôlei, basquete e tênis na sua região
            </p>
            <Link to="/pesquisa" className={estilos.botaoPrimario}>
              Reservar Agora
            </Link>
          </div>
        </section>

        {/* Seção de Pesquisa */}
        <section className={estilos.secaoPesquisa}>
          <div className={estilos.cartaoPesquisa}>
            <div className={estilos.grupoCampo}>
              <label className={estilos.rotulo}>Pesquisar quadras</label>
              <input
                type="text"
                placeholder="Digite o nome ou localização..."
                className={estilos.campo}
              />
            </div>
            <div className={estilos.grupoCampo}>
              <label className={estilos.rotulo}>Esporte</label>
              <select className={estilos.campo}>
                <option>Todos</option>
                <option>Futebol</option>
                <option>Vôlei</option>
                <option>Basquete</option>
                <option>Tênis</option>
              </select>
            </div>
            <Link to="/pesquisa" className={estilos.botaoBuscar}>
              <IconePesquisa size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
              Buscar
            </Link>
          </div>
        </section>

        {/* Seção de Quadras */}
        <section className={estilos.secaoQuadras}>
          <h2 className={estilos.tituloSecao}>Quadras Disponíveis</h2>
          <div className={estilos.gridQuadras}>
            {quadras.map((quadra) => (
              <div key={quadra.id} className={estilos.cartaoQuadra}>
                <img
                  src={quadra.imagem}
                  alt={quadra.nome}
                  className={estilos.imagemQuadra}
                />
                <div className={estilos.conteudoCartao}>
                  <span className={estilos.badgeEsporte}>{quadra.esporte}</span>
                  <h3 className={estilos.nomeQuadra}>{quadra.nome}</h3>
                  <div className={estilos.localizacao}>
                    <MapPin size={16} />
                    {quadra.localizacao}
                  </div>
                  <div className={estilos.preco}>{quadra.preco}/hora</div>
                  <Link to="/pesquisa" className={estilos.botaoReservar}>
                    Reservar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Características */}
        <section className={estilos.secaoCaracteristicas}>
          <div className={estilos.containerCaracteristicas}>
            <h2 className={estilos.tituloCaracteristicas}>
              Por que escolher QuadraEsporte?
            </h2>
            <div className={estilos.gridCaracteristicas}>
              <div className={estilos.caracteristica}>
                <div className={estilos.iconeCaracteristica}>
                  <IconePesquisa size={32} color="var(--cor-primaria)" />
                </div>
                <h3 className={estilos.tituloCaracteristica}>Fácil de Encontrar</h3>
                <p className={estilos.descricaoCaracteristica}>
                  Busque quadras por localização, esporte e disponibilidade
                </p>
              </div>
              <div className={estilos.caracteristica}>
                <div className={estilos.iconeCaracteristica}>
                  <Clock size={32} color="var(--cor-secundaria)" />
                </div>
                <h3 className={estilos.tituloCaracteristica}>Reserve em Minutos</h3>
                <p className={estilos.descricaoCaracteristica}>
                  Processo rápido e seguro de reserva online
                </p>
              </div>
              <div className={estilos.caracteristica}>
                <div className={estilos.iconeCaracteristica}>
                  <DollarSign size={32} color="var(--cor-primaria)" />
                </div>
                <h3 className={estilos.tituloCaracteristica}>Melhor Preço</h3>
                <p className={estilos.descricaoCaracteristica}>
                  Compare preços e escolha a melhor opção
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}
