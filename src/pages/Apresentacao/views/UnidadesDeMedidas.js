import React from "react";
import ContentWithDescription from "../../../components/ContentWithDescription";

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
  </div>
);

export default UnidadesDeMedidas;
