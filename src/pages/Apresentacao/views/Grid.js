import React from "react";
import CodeWrapper from "../../../components/CodeWrapper";
import ContentWithDescription from "../../../components/ContentWithDescription";

const Grid = () => (
  <div>
    <ContentWithDescription
      content="Criando GRID com Pré processador."
      special={
        <div>
          <p>Grid.styl</p>
          <CodeWrapper lang="css">
            {`.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
            
sm-grid(x) {
  for n in (1..x) {
    .sm - { n } - { x } {
      padding: 0 15px;
      width ((0% + n / x * 100));
    }
  }
}

@media screen and (min-width: sm) {
  .grid {
    sm-grid(12);
  }
}`}
          </CodeWrapper>
          <p>HTML</p>
          <CodeWrapper lang="html">
            {`<div class="grid">
  <div class="sm-4-12"></div>
  <div class="sm-4-12"></div>
  <div class="sm-4-12"></div>
</div>`}
          </CodeWrapper>
        </div>
      }
    />
    <ContentWithDescription
      content="Criando GRID com Pré processador."
      special={
        <div>
          <p>Grid.styl</p>
          <CodeWrapper>
            {`export const Grid = styled.div'
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
';
  
export const Column = styled.div'
  width: {props => (props.xs ? props.xs + "%" : "100%")};
  padding: 0 15px;
  @media screen and (min-width: {sm}) {
    width: {props => (props.sm ? props.sm + "%" : "100%")};
  }
  @media screen and (min-width: {md}) {
    width: {props => props.md ? props.md + "%" : props.sm ? props.sm + "%" : props.xs ? props.xs + "%" : "100%"};
    }
  @media screen and (min-width: {lg}) {
    width: {props => props.lg ? props.lg + "%" : props.md ? props.md + "%" : props.sm ? props.sm + "%" : props.xs ? props.xs + "%" : "100%"};
  }
';`}
          </CodeWrapper>
          <p>HTML</p>
          <CodeWrapper lang="html">
            {`<Grid>
  <Column sm={50} md={33} lg={25}>
    <div>...</div>
  </Column>
</Grid>`}
          </CodeWrapper>
        </div>
      }
    />
  </div>
);

export default Grid;
