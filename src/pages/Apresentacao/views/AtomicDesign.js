import React from "react";
import ContentWithDescription from "../../../components/ContentWithDescription";
import { CodeWrapper } from "../../../components";
import Resumo from "./../../../assets/Resumo.png";
import Atomos from "./../../../assets/Atomos.png";
import Moleculas from "./../../../assets/Moleculas.png";
import Organismos from "./../../../assets/Organismos.png";
import Templates from "./../../../assets/Templates.png";
import Pages from "./../../../assets/Pages.png";

const AtomicDesign = () => (
  <div>
    <ContentWithDescription
      special={
        <div>
          <p>
            o Atomic Design é um conceito hierárquico para construção de
            interfaces digitais.
          </p>
          <p>
            Toda a ideia se baseia no princípio de construir componentes de
            interfaces mínimos (botões, ícones, títulos, labels…), e combiná-los
            para montar estruturas mais complexas até conseguirmos montar
            páginas inteiras. Muito similar ao LEGO™ em muitos aspectos. E para
            ilustrar os conceitos buscou-se na química a metáfora dos átomos que
            se aglutinam e formam estruturas maiores.
          </p>
          <img src={Resumo} />
        </div>
      }
    />
    <ContentWithDescription
      title="Átomos"
      special={
        <div>
          <p>
            Elementos isolados da página (ex. form, label, a, button, ul, ol,
            li).
          </p>
          <img src={Atomos} />
        </div>
      }
    />
    <ContentWithDescription
      title="Moléculas"
      special={
        <div>
          <p>
            Grupo de elementos que se combinam (ex. listas, formulários, nav)
          </p>
          <img src={Moleculas} />
        </div>
      }
    />
    <ContentWithDescription
      title="Organismos"
      special={
        <div>
          <p>
            Áreas do site com um grupo de elementos (ex. header, sidebar,
            footer, menu)
          </p>
          <img src={Organismos} />
        </div>
      }
    />
    <ContentWithDescription
      title="Templates"
      special={
        <div>
          <p>Estrutura da página.</p>
          <img src={Templates} />
        </div>
      }
    />
    <ContentWithDescription
      title="Pages"
      special={
        <div>
          <p>Instâncias dos templates, com o conteúdo que o usuário irá ver.</p>
          <img src={Pages} />
        </div>
      }
    />
  </div>
);

export default AtomicDesign;
