const StateConfig = {
  initial: 'Indice',
  states: {
    Indice: {
      on: {
        NEXT: 'BoasPraticas',
      },
    },
    BoasPraticas: {
      on: {
        PREV: 'Indice',
        NEXT: 'VariaveisGlobais'
      },
    },
    VariaveisGlobais: {
      on: {
        PREV: 'BoasPraticas',
        NEXT: 'Escopo'
      },
    },
    Escopo: {
      on: {
        PREV: 'VariaveisGlobais',
        NEXT: 'Metodologias'
      },
    },
    Metodologias: {
      on: {
        PREV: 'Escopo',
        NEXT: 'Organizacao'
      },
    },
    Organizacao: {
      on: {
        PREV: 'Metodologias',
        NEXT: 'StyleGuide'
      },
    },
    StyleGuide: {
      on: {
        PREV: 'Organizacao',
        NEXT: 'FrameworksUI'
      },
    },
    FrameworksUI: {
      on: {
        PREV: 'StyleGuide',
        NEXT: 'Flex'
      },
    },
    Flex: {
      on: {
        PREV: 'FrameworksUI',
        NEXT: 'Grid'
      },
    },
    Grid: {
      on: {
        PREV: 'Flex',
        NEXT: 'CSSBeyond'
      },
    },
    CSSBeyond: {
      on: {
        PREV: 'Grid',
      },
    },
  },
}

export default StateConfig;
