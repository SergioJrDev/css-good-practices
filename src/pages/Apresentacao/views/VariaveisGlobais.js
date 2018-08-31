import React from "react";
import CodeWrapper from "../../../components/CodeWrapper";
import ContentWithDescription from "../../../components/ContentWithDescription";

const VariaveisGlobais = () => (
  <div>
    <ContentWithDescription content="Para manter um padrão e ser mais fácil de dar manutenção num site é recomendável atribuir algumas propriedades em CSS, como paletas de cores, espaçamentos, media queries breakpoints, font-family." />
    <ContentWithDescription
      title="Variáveis Nativas CSS"
      special={
        <div>
          <p>
            Utilizando a lib Styled Component, é possível criar um componente
            estilizado, com propriedades dinâmicas e usa-lo em vários lugares.
            <CodeWrapper lang="css">{`

:root {
 --xs: 320px;
 --sm: 768px;
 --md: 992px;
 --lg: 1200;
 --padding: 20px;
 --font-family: "Times New Roman", Times, serif;
 --font-size: 18px;
 --theme: #CC123D;
 --darker: #333;
 --lighter: #CCC123;
}
`}</CodeWrapper>
            ...
            <CodeWrapper lang="css">{`
            
@media screen and (min-width: var(--sm)) {
 .header {
   background: var(--theme);
 }
}

`}</CodeWrapper>
          </p>
        </div>
      }
    />
    <ContentWithDescription
      title="Alterando variáveis CSS com JS"
      special={
        <div>
          <p>
            Também é possível alterar os valores das variáveis CSS com JS.
            <CodeWrapper>{`
            
var html = document.getElementsByTagName('html')[0];
html.setAttribute("style", "--theme: #6ccd53");

`}</CodeWrapper>
          </p>
        </div>
      }
    />
    <ContentWithDescription
      title="Suporte"
      special={
        <div>
          <p>
            Mas variáveis CSS não são suportadas pelo IE. A solução é criar as
            variáveis no pré-processador.
            <CodeWrapper lang="css">{`
            
$xs: 320px;
$sm: 768px;
$md: 992px;
$lg: 1200;
$padding: 20px;
$font-family: "Times New Roman", Times, serif;
$font-size: 18px;
$theme: #CC123D;
$darker: #333;
$lighter: #CCC123;
`}</CodeWrapper>
          </p>
        </div>
      }
    />
  </div>
);

export default VariaveisGlobais;
