import { useNavigate } from 'react-router';
import estilos from './Login.module.css';
export function Login() {
    const navegar = useNavigate();
    return (
        <div className={estilos.conteiner}>
            <form action="" className={estilos.formulario}>
                <h1>Login/Cadastro</h1>
                <input type="text" placeholder="Digite seu email"/>
                <input type="password" placeholder="Digite sua senha"/>
                <div className={estilos.botoes}>
                    <button type="submit">Entrar</button>
                    <a type="button" onClick={() => navegar('/cadastro')}>Cadastrar</a>
                </div>
                <a type="button" onClick={() => navegar('/recuperar-senha')}>
                    Esqueci minha senha
                </a>
            </form>
            
        </div>
    );
}