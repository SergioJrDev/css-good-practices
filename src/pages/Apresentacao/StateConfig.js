const StateConfig = {
  initial: "Metodologias",
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
        NEXT: "FrameworksUI"
      }
    },
    FrameworksUI: {
      on: {
        PREV: "Metodologias",
        NEXT: "Grid"
      }
    },
    Grid: {
      on: {
        PREV: "FrameworksUI"
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
