import "./styles.css";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";

export default function card({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={linhasDeCodigo} alt="códigos" />
              50
            </li>
            <li>
              <img src={compartilhamentos} alt="compartilhamentos" /> 15
            </li>
            <li>
              <img src={comentarios} alt="comentários" /> 12
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}
