import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Inicio } from './paginas/Inicio';
import { Pesquisa } from './paginas/Pesquisa';
import { Reserva } from './paginas/Reserva';
import { DashboardDono } from './paginas/DashboardDono';
import { CadastroQuadra } from './paginas/CadastroQuadra';
import { DashboardAdmin } from './paginas/DashboardAdmin';
import { Login } from './paginas/login/Login';
import { Cadastro } from './paginas/cadastro/Cadastro';
import { CadastroJogador } from './paginas/cadastro/CadastroJogador';
import { CadastroDonoQuadra } from './paginas/cadastro/CadastroDonoQuadra';
import { Quadra } from './paginas/quadra/Quadra';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/cadastro/jogador',
    element: <CadastroJogador />,
  },
  {
    path: '/cadastro/dono',
    element: <CadastroDonoQuadra />,
  },
  {
    path: '/quadra/:id',
    element: <Quadra />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/pesquisa',
    element: <Pesquisa />,
  },
  {
    path: '/reserva',
    element: <Reserva />,
  },
  {
    path: '/dono',
    element: <DashboardDono />,
  },
  {
    path: '/dono/cadastrar-quadra',
    element: <CadastroQuadra />,
  },
  {
    path: '/admin',
    element: <DashboardAdmin />,
  },
]);

export function Aplicacao() {
  return <RouterProvider router={rotas} />;
}
