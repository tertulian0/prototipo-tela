import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import estilos from './Quadra.module.css';
import { Cabecalho } from '../../componentes/Cabecalho';
import { Rodape } from '../../componentes/Rodape';

import foto1 from './assets/jonathan-petersson-ARU18GpF6QQ-unsplash.jpg';
import foto2 from './assets/vienna-reyes-qCrKTET_09o-unsplash.jpg';
import foto3 from './assets/wesley-tingey-dKCKiC0BQtU-unsplash.jpg';


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
const imagens = [
    foto1,
    foto2,
    foto3
];
const quadras = [
  {
    id: 1,
    nome: 'Arena Sport Center',
    esporte: 'Futebol',
    preco: 'R$ 120',
    localizacao: 'Centro - São Paulo',          
    imagem: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=600&fit=crop',
    imagens,
    horarios: horariosDisponiveis
  },
  {
    id: 2,
    nome: 'Quadra Vôlei Pro',
    esporte: 'Vôlei',
    preco: 'R$ 80',
    localizacao: 'Zona Sul - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1200&h=600&fit=crop',
    imagens,
    horarios: horariosDisponiveis
  },
  {
    id: 3,
    nome: 'Arena de Basquete',
    esporte: 'Basquete',
    preco: 'R$ 100',
    localizacao: 'Zona Oeste - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=600&fit=crop',
    imagens,
    horarios: horariosDisponiveis
  },
  {
    id: 4,
    nome: 'Tênis Club Premium',
    esporte: 'Tênis',
    preco: 'R$ 150',
    localizacao: 'Jardins - São Paulo',
    imagem: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&h=600&fit=crop',
    imagens,
    horarios: horariosDisponiveis
  },
];


export function Quadra() {
  const { id } = useParams<{ id: string }>();
  const [quadra, setQuadra] = useState<typeof quadras[0] | undefined>();
  const [imagemPrincipal, setImagemPrincipal] = useState(0);
  const navegar = useNavigate();

  useEffect(() => {
    const quadraEncontrada = quadras.find(q => q.id === parseInt(id || '0'));
    setQuadra(quadraEncontrada);
    setImagemPrincipal(0);
  }, [id]);

  if (!quadra) {
    return (
      <div className={estilos.pagina}>
        <Cabecalho />
        <h1>Quadra não encontrada</h1>
        <Rodape />
      </div>
    );
  }

  return (
    <div className={estilos.pagina}>
        <Cabecalho />
        <main className={estilos.conteudo}>
            <h1 className={estilos.titulo}>Detalhes da Quadra</h1>
            
            <div className={estilos.galeria}>
                <div className={estilos.imagemPrincipal}>
                    <img 
                        src={quadra.imagens?.[imagemPrincipal] || quadra.imagem} 
                        alt={`${quadra.nome} - Foto ${imagemPrincipal + 1}`}
                        className={estilos.fotoGrande}
                    />
                </div>
                
                {quadra.imagens && quadra.imagens.length > 1 && (
                    <div className={estilos.miniaturas}>
                        {quadra.imagens.map((img, idx) => (
                            <button
                                key={idx}
                                className={`${estilos.miniatura} ${
                                    imagemPrincipal === idx ? estilos.ativa : ''
                                }`}
                                onClick={() => setImagemPrincipal(idx)}
                                aria-label={`Ver foto ${idx + 1}`}
                            >
                                <img src={img} alt={`Miniatura ${idx + 1}`} />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className={estilos.containerDetalhes}>
                <div className={estilos.cartaoQuadra}>
                    <h2 className={estilos.nomeQuadra}>{quadra.nome}</h2>
                    
                    <div className={estilos.informacoesGrid}>
                        <div className={estilos.info}>
                            <span className={estilos.label}>Esporte</span>
                            <span className={estilos.valor}>{quadra.esporte}</span>
                        </div>
                        <div className={estilos.info}>
                            <span className={estilos.label}>Preço</span>
                            <span className={estilos.valor}>{quadra.preco}</span>
                        </div>
                        <div className={estilos.info}>
                            <span className={estilos.label}>Localização</span>
                            <span className={estilos.valor}>{quadra.localizacao}</span>
                        </div>
                    </div>

                    <div className={estilos.horariosContainer}>
                        <h3 className={estilos.tituloHorarios}>Horários Disponíveis</h3>
                        <div className={estilos.horariosGrid}>
                            {quadra.horarios.map((horario) => (
                                <button
                                    key={horario.id}
                                    className={`${estilos.botaoHorario} ${
                                        horario.disponivel ? estilos.disponivel : estilos.indisponivel
                                    }`}
                                    disabled={!horario.disponivel}
                                >
                                    <span className={estilos.hora}>{horario.hora}</span>
                                    <span className={estilos.precoHorario}>{horario.preco}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className={estilos.botaoReservar} onClick={() => navegar('/reserva')}>
                        Fazer Reserva
                    </button>
                </div>
            </div>
        </main>
        <Rodape />
    </div>
  );
}