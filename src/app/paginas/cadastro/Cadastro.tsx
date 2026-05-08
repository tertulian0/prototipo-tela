import { useNavigate } from 'react-router-dom';
import estilos from './Cadastro.module.css';

export function Cadastro() {
  const navegar = useNavigate();

  return (
    <div className={estilos.container}>
      <div className={estilos.card}>
        <h1 className={estilos.titulo}>Criar Conta</h1>
        <p className={estilos.subtitulo}>
          Escolha o tipo de cadastro que melhor se adequa a você
        </p>

        <div className={estilos.opcoes}>
          {/* Botão Jogador */}
          <button
            className={estilos.botao}
            onClick={() => navegar('/cadastro/jogador')}
          >
            <div className={estilos.icone}>👤</div>
            <p className={estilos.label}>Sou Jogador</p>
            <p className={estilos.descricao}>
              Encontre quadras e reserve suas aulas
            </p>
          </button>

          {/* Botão Dono */}
          <button
            className={estilos.botao}
            onClick={() => navegar('/cadastro/dono')}
          >
            <div className={estilos.icone}>🏢</div>
            <p className={estilos.label}>Sou Dono</p>
            <p className={estilos.descricao}>
              Gerencie suas quadras e reservas
            </p>
          </button>
        </div>

        <div className={estilos.rodape}>
          Já tem uma conta?{' '}
          <span
            className={estilos.link}
            onClick={() => navegar('/login')}
          >
            Faça login
          </span>
        </div>
      </div>
    </div>
  );
}
