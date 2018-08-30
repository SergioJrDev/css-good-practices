import React from "react";
import ContentWithDescription from "../../../components/ContentWithDescription";
import CodeWrapper from "../../../components/CodeWrapper";

const BoasPraticas = () => (
  <div>
    <ContentWithDescription
      title="Styled Component"
      special={
        <div>
          <p>
            Utilizando a lib Styled Component, é possível criar um componente
            estilizado, com propriedades dinâmicas e usa-lo em vários lugares.
            <CodeWrapper>{`export const Title = styled.h2'
  line-height: 2rem;
  font-weight: 500;
  font-size: 1.3rem;
  @media screen and (min-width: {sm}) {
    font-size: {props => props.size ? props.size : '1.7rem'};
  }'`}</CodeWrapper>
            ...
            <CodeWrapper lang="html">{`<Title size='18px'>Hello, World</Title>
`}</CodeWrapper>
          </p>
        </div>
      }
    />
    <ContentWithDescription
      title="CSS Inline"
      special={
        <div>
          <p>
            Style que é definido diretamente na tag.{" "}
            <CodeWrapper lang="html">{`<div style={{textAlign: 'right', display: 'inline'}}></div>
`}</CodeWrapper>
          </p>
          <p>
            Uma boa prática é criar um objeto global ou no componente pra
            compartilhar as mesmas propriedades nos componentes.
            <CodeWrapper>{`const style = {
  wrapper: {
    display: '',
    width: '100%',
  },
  withPad: {
    padding: 20,
  },
  borderRed: {
    border: '1px solid {red}',
  },
  cardHeader: {
    width: '100%',
    height: '20px',
  }
}`}</CodeWrapper>
            <CodeWrapper lang="html">{`<Component style={style.wrapper}>
  <Header style={[style.cardHeader, style.withPad]}></Header>
  <Content style={[style.withPad, style.borderRed]}></Content>
</Component>
`}</CodeWrapper>
          </p>
        </div>
      }
    />
    <ContentWithDescription
      title="BEM - (block, element, modifier)"
      special={
        <div>
          <p>
            Block: Grupo independente que identifica uma parte visual do site ou
            componente
            <CodeWrapper lang="css">
              .header .footer .sidebar .schedule
            </CodeWrapper>
          </p>
          <p>
            Element: São os descendentes que dependentes do block e que possui
            uma única função. São separados com __ (ex.{" "}
            <code className="language-html">
              {`<div class="schedule__full-width schedule__background-theme" />`}
            </code>
            )
          </p>
          <p>
            Modifier: É o estilo que altera a aparencia de um elemento ou block.
            (ex.
            <code className="language-html">
              {`
<div class="report-graph">
  <div class="report-graph__bar report-graph__bar_size_big" />
</div>`}
            </code>
            )
          </p>
        </div>
      }
    />
    <ContentWithDescription
      title="SMACSS"
      special={
        <div>
          <p>
            Possui cinco características: base, layout, module, state e a pouco
            importante theme.{" "}
          </p>
          <p>
            Base: Não é aplicada em classes ou ID's', geralmente usada em tags
            ou *, que afetam o site todo. (ex.{" "}
            <code className="language-css">*, button, a, p, h1, h2, h3 </code> )
          </p>
          <p>
            Layout: Elementos que são únicos e criam a estrutura da página (ex.{" "}
            <code className="language-css">header, footer, sidebar </code> ).
          </p>
          <p>
            Modules: Componentes da página, que são aninhados com classes ex.
            <code className="language-css">.box .title</code>, ao invés de tags
            ex. <code className="language-css">.box title</code>.
          </p>{" "}
          <p>
            O bloco de componentes devem ser independentes e funcionar em
            qualquer parte do site.{" "}
            <code className="language-html">
              {`<div class="button button-primary button-bordered"></div>`}
            </code>{" "}
            e isso torna mais fácil escrever com pré processador:
          </p>
          <CodeWrapper lang="css">
            {`.button {
  &-primary: {}
  &-bordered: {}
}`}
          </CodeWrapper>
          <p>
            Classes que gerenciam o estao do componente (ex.{" "}
            <code className="language-html">
              {`<div class=".is-actived .is-opened .is-current"></div>`}
            </code>{" "}
            e isso torna mais fácil escrever com pré processador:
          </p>
        </div>
      }
    />
  </div>
);

export default BoasPraticas;
