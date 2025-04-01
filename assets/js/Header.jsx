// Arquivo: src/components/Header.jsx
import { FiDownload } from "react-icons/fi"; // Importação correta aqui

function Header() {
  return (
    <header>
      <a href="/curriculo.pdf" download>
        <FiDownload /> 
        Baixar Currículo
      </a>
    </header>
  );
}

export default Header;