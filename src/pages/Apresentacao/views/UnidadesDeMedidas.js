import React from "react";
import ContentWithDescription from "../../../components/ContentWithDescription";
import CodeWrapper from "../../../components/CodeWrapper"

const UnidadesDeMedidas = () => (
  <div>
    <ContentWithDescription title="px" content="Pixel" />
    <ContentWithDescription
      title="%"
      content="Porcentagem em relação ao elemento pai"
    />
    <ContentWithDescription
      title="vh "
      content="(view height) - Porcentagem em relação a altura da tela."
    />
    <ContentWithDescription
      title="vw "
      content="(view width) - Porcentagem em relação a largura da tela
"
    />
    <ContentWithDescription
      title=" vmin "
      content="(view min) - Porcentagem em relação a menor dimensão na tela
"
    />
    <ContentWithDescription
      title="vmax  "
      content="(view max) - Porcentagem em relação a maior dimensão na tela"
    />
    <ContentWithDescription
      title=" Outras unidades para fontes"
      content="em, rem, ex, ch"
    />
    <ContentWithDescription
      title="Função Calc()"
      content="Também é possível combinar todas essas unidades com a função calc() do CSS para calcular valores relativos."
      special={
        <div>
          <p>Grid.styl</p>
          <CodeWrapper lang="css">
            {`.content-wrapper {
  width: calc(100vw - 60px)
}`}
          </CodeWrapper>
        </div>}
    />
  </div>
);

export default UnidadesDeMedidas;
