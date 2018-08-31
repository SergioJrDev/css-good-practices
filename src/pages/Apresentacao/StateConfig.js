const StateConfig = {
  initial: "Indice",
  states: {
    Indice: {
      on: {
        NEXT: "BoasPraticas"
      }
    },
    BoasPraticas: {
      on: {
        PREV: "Indice",
        NEXT: "UnidadesDeMedidas"
      }
    },
    UnidadesDeMedidas: {
      on: {
        PREV: "BoasPraticas",
        NEXT: "VariaveisGlobais"
      }
    },
    VariaveisGlobais: {
      on: {
        PREV: "UnidadesDeMedidas",
        NEXT: "Metodologias"
      }
    },
    Metodologias: {
      on: {
        PREV: "VariaveisGlobais",
        NEXT: "Atomic"
      }
    },
    Atomic: {
      on: {
        NEXT: "FrameworksUI",
        PREV: "Metodologias"
      }
    },
    FrameworksUI: {
      on: {
        PREV: "Atomic",
        NEXT: "Grid"
      }
    },
    Grid: {
      on: {
        PREV: "FrameworksUI",
        NEXT: "CSSBeyond"
      }
    },
    CSSBeyond: {
      on: {
        PREV: "Grid"
      }
    }
  }
};

export default StateConfig;
