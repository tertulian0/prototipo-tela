import estilos from './Rodape.module.css';

export function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.conteiner}>
        <p className={estilos.texto}>
          © 2026 QuadraEsporte - Sistema de Agendamento de Quadras Esportivas
        </p>
        <p className={estilos.textoSecundario}>
          Projeto TCC - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
