import React from "react";
import ContentWithDescription from "../../../components/ContentWithDescription";

const BoasPraticas = () => (
  <div>
    <ContentWithDescription
      title="Prefira usar classes como seletor, ao invés de ID's ou tags"
      content="ID's tem a limitação de ser único, além de não permitir repetição.
        Dependendo, selecionar uma tag pode afetar o estado global."
    />
    <ContentWithDescription
      title="Use pré seletores especiais somente em casos especiais"
      special={
        <p>
          Utilize{" "}
          <code className="language-css">
            > + ~ :nth-child :first-of-type :not
          </code>{" "}
          especificamente para fazer algo diferente no layout ou dar manutenção
          num código legado.
        </p>
      }
    />
    <ContentWithDescription
      title="Mobile First"
      content="Sempre utilize 100% para definir o width dos elementos do layout (Listas, Tabelas, Cards, Imagens) e caso queira controlá lo, envolva-o num wrapper com with fixo (em %, como uma grid, por exemplo), para deixa-lo responsívo."
    />
    <ContentWithDescription
      title="Media Queries"
      content="Defina os valores dos breakpoints em variáveis (ex, xs: 320px, sm: 720px, md: 992px, lg: 1200px) para serem reutilizadas nas media queries. Se possível, sempre use min-width() e max-width() somente pra consertar os problemas no mobile (ex: max_xs: xs - 1px, max_sm: sm - 1px, max_md: md - 1px, max_lg: lg - 1px)."
    />
    <ContentWithDescription
      title="Pré-processadores"
      content="Evite nesting em mais de 3 níveis. Aumenta o tamanho do CSS final e fica difícil pra ler."
    />
    <ContentWithDescription
      title="Prefira usar classes como seletor, ao invés de ID's ou tags."
      content="Evite nesting em mais de 3 níveis. Aumenta o tamanho do CSS final e fica difícil pra ler."
    />
  </div>
);

export default BoasPraticas;
