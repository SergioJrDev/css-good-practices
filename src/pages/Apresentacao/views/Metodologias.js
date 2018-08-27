import React from "react";

const BoasPraticas = () => (
  <ul>
    <li>
      <p>
        SMACSS Possui cinco características: base, layout, module, state e a
        pouco importante theme. Base: Não é aplicada em classes ou ID's',
        geralmente usada em tags ou *, que afetam o site todo. Layout: Elementos
        que são únicos e criam a estrutura da página (ex. header, footer e
        sidebar) Modules: Componentes da página, que são aninhados com classes
        ex. .box .title, ao invés de tags ex. .box h2. O bloco de componentes
        devem ser independentes e funcionar em qualquer parte do site.
        class="button button-primary button-bordered" e isso torna mais fácil
        escrever com pré processador
        {`.button 
      {
        & -primary: {
        ...
        }
      &-bordered: {
        ...
        }
      }`}
        State: Classes que gerenciam o estao do componente (ex. .is-actived,
        .is-opened, .is-current) BEM - (block, element, modifier) Block: Grupo
        independente que identifica uma parte visual do site ou componente (ex.
        .header, .footer, .sidebar, .schedule) Element: São os descendentes que
        dependentes do block e que possui uma única função. São separados com __
        (ex. schedule__full-width schedule__background-theme) Modifier: É o
        estilo que altera a aparencia de um elemento ou block. (ex. menu
        menu_big-size)
        {`
                <div class="report-graph">
          <div class="report-graph__bar">...</div>
          <div class="report-graph__bar report-graph__bar_size_big">...</div>
        </div>
        `}
      </p>
    </li>
  </ul>
);

export default BoasPraticas;
