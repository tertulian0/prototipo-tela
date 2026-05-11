import { Link, useLocation, useNavigate } from 'react-router-dom';
import estilos from './Cabecalho.module.css';

export function Cabecalho() {
  const localizacao = useLocation();
  const navegar = useNavigate();
  const ehAtivo = (caminho: string) => {
    return localizacao.pathname === caminho ? estilos.ativo : '';
  };

  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.conteiner}>
        <Link to="/" className={estilos.marca}>
          <div className={estilos.icone}>AS</div>
          <span>ArenaSync</span>
        </Link>

        <nav>
          <ul className={estilos.navegacao}>
            <li>
              <Link to="/" className={ehAtivo('/')}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/pesquisa" className={ehAtivo('/pesquisa')}>
                Quadras
              </Link>
            </li>
            <li>
              <Link to="/DashboardDono/dono" className={ehAtivo('/dashboardDono')}>
                Área do Dono
              </Link>
            </li>
            <li>
              <Link to="/admin" className={ehAtivo('/admin')} onClick={() => navegar('/admin')}>
                Admin
              </Link>
            </li>
          </ul>
        </nav>

        <div className={estilos.botoes}>
          <button className={estilos.botaoEntrada} onClick={() => navegar('/login')}>
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
}
