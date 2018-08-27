import React from "react";

const BoasPraticas = () => (
  <ul>
    <li>
      <p>
        Style guides ajudam a manter o mesmo padrão e identidade num site,
        reutilizando componentes ou estruturas. É muito utilizado em frameworks
        CSS e UI-Kits. Todos seguem o mesmo padrão de ter um componentes com
        variações de estilo dependendo de suas classes.
      </p>
    </li>
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
    <p>
      {`
          Um com a abordagem diferente é o Tachyons, que tem mini classes pré definidas e alteram apenas uma propriedade.
.f1 {font - size: 3rem; }
.f2 {font - size: 2.25rem; }
.f3 {font - size: 1.5rem; }
.i {font - style: italic; }
.b {font - weight: bold; }
.underline {text - decoration: underline; }
.bg-dark-red {background - color: var(--dark-red); }
.bg-red {background - color: var(--red); }
.bg-orange {background - color: var(--orange); }
.bw0 {border - width: 0; }
.bw1 {border - width: .125rem; }
.bw2 {border - width: .25rem; }
      
    `}
    </p>
  </ul>
);

export default BoasPraticas;
