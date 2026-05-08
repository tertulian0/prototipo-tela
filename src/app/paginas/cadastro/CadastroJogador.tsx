import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import estilos from './Formulario.module.css';

export function CadastroJogador() {
  const navegar = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    telefone: '',
    cidade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro Jogador:', formData);
    // Aqui você faria a chamada à API
  };

  return (
    <div className={estilos.container}>
      <div className={estilos.card}>
        <button className={estilos.botaoVoltar} onClick={() => navegar('/cadastro')}>
          ← Voltar
        </button>

        <div className={estilos.header}>
          <h1 className={estilos.titulo}>Cadastro de Jogador</h1>
          <p className={estilos.subtitulo}>Crie sua conta para encontrar e reservar quadras</p>
        </div>

        <form className={estilos.form} onSubmit={handleSubmit}>
          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Nome Completo</label>
            <input
              type="text"
              name="nome"
              className={estilos.input}
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Email</label>
            <input
              type="email"
              name="email"
              className={estilos.input}
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              className={estilos.input}
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Telefone</label>
            <input
              type="tel"
              name="telefone"
              className={estilos.input}
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Cidade</label>
            <input
              type="text"
              name="cidade"
              className={estilos.input}
              placeholder="Sua cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </div>

          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Senha</label>
            <input
              type="password"
              name="senha"
              className={estilos.input}
              placeholder="••••••••"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>

          <div className={estilos.inputGroup}>
            <label className={estilos.label}>Confirmar Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              className={estilos.input}
              placeholder="••••••••"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={estilos.botao}>
            Cadastrar
          </button>
        </form>

        <div className={estilos.rodape}>
          Já tem uma conta?{' '}
          <span className={estilos.link} onClick={() => navegar('/login')}>
            Faça login
          </span>
        </div>
      </div>
    </div>
  );
}