import React, { Component } from "react";
import { State, withStatechart } from "react-automata";
import StateConfig from "./StateConfig";
import { ContentWrapper } from "./../../components";
import "./../../style/index.css";
import {
  Indice,
  BoasPraticas,
  Frameworks,
  Grid,
  Metodologias,
  UnidadesDeMedidads,
  VariaveisGlobais
} from "./views";

class App extends Component {
  prevStep = () => this.props.transition("PREV");
  nextStep = () => this.props.transition("NEXT");

  render() {
    return (
      <div>
        <State value="Indice">
          <ContentWrapper title="Índice" component={Indice} />
        </State>
        <State value="BoasPraticas">
          <ContentWrapper title="Boas Práticas" component={BoasPraticas} />
        </State>
        <State value="UnidadesDeMedidas">
          <ContentWrapper
            title="Unidades de Medidas"
            component={UnidadesDeMedidads}
          />
        </State>
        <State value="VariaveisGlobais">
          <ContentWrapper
            title="Variáveis e estilos globais"
            component={VariaveisGlobais}
          />
        </State>
        <State value="Metodologias">
          <ContentWrapper title="Metodologias" component={Metodologias} />
        </State>
        <State value="FrameworksUI">
          <ContentWrapper title="Frameworks e UI-Kit" component={Frameworks} />
        </State>
        <State value="Grid">
          <ContentWrapper title="Grid" component={Grid} />
        </State>
        <State value="CSSBeyond">
          <ContentWrapper title="CSS além do layout" component={Indice} />
        </State>
        <button
          onClick={this.prevStep}
          className="btn btn-middle btn-middle-left"
        >
          Prev
        </button>
        <button
          onClick={this.nextStep}
          className="btn btn-middle btn-middle-right"
        >
          Next
        </button>
      </div>
    );
  }
}

export default withStatechart(StateConfig)(App);
