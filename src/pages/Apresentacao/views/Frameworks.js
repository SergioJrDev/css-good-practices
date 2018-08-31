import React from "react";
import ContentWithDescription from "../../../components/ContentWithDescription";
import CodeWrapper from "../../../components/CodeWrapper";
import Button from "react-bootstrap/lib/Button";

const BoasPraticas = () => (
  <div>
    <ContentWithDescription
      content=" Todos possuem um style guides, que ajuda a manter o mesmo padrão e identidade num site, reutilizando componentes ou estruturas. É muito utilizado em frameworks CSS e UI-Kits. Todos seguem o mesmo padrão de ter um componentes com variações de estilo dependendo de suas classes."
      special={
        <div>
          <CodeWrapper lang="html">
            {`<Button>Default</Button>
<Button bsStyle="primary">Primary</Button>
<Button bsStyle="success">Success</Button>
<Button bsStyle="info">Info</Button>
<Button bsStyle="warning">Warning</Button>
<Button bsStyle="danger">Danger</Button>
<Button bsStyle="link">Link</Button>`}
          </CodeWrapper>
        </div>
      }
    />
    <ContentWithDescription
      content="Lista de alguns dos UI-Kits CSS."
      special={
        <ul>
          <li>
            <p>AntDesign</p>
          </li>
          <li>
            <p>Material UI</p>
          </li>
          <li>
            <p>Bootstrap</p>
          </li>
          <li>
            <p>UIKit</p>
          </li>
          <li>
            <p>Semantic UI</p>
          </li>
          <li>
            <p>Pure CSS</p>
          </li>
          <li>
            <p>Tachyons</p>
          </li>
        </ul>
      }
    />
    <ContentWithDescription
      content="Um com a abordagem diferente é o Tachyons, que tem mini classes pré definidas e alteram apenas uma propriedade."
      special={
        <div>
          <CodeWrapper lang="css">
            {`.f1 { font-size: 3rem; }
.f2 { font-size: 2.25rem; }
.f3 { font-size: 1.5rem; }
.i { font-style: italic; }
.b { font-weight: bold; }
.underline { text-decoration: underline; }
.bg-dark-red { background-color: var(--dark-red); }
.bg-red { background-color: var(--red); }
.bg-orange { background-color: var(--orange); }
.bw0 { border-width: 0; }
.bw1 { border-width: .125rem; }
.bw2 { border-width: .25rem; }
`}
          </CodeWrapper>
        </div>
      }
    />
  </div>
);

export default BoasPraticas;
