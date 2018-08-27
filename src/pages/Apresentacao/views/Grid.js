import React from "react";

const Grid = () => (
  <ul>
    <li>
      <p>
        Criando GRID com Stylus
        {`
    sm-grid(x) {
	for n in (1..x) {
		.sm - { n } - { x } {
      padding: 0 15px;
			width ((0% + n / x * 100));
		}
	}
}

.grid {
        display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
    
@media screen and (min-width: sm) {
	.grid {
      sm-grid(12);
    }
  }
  
  .grid
    .sm-4-12
    .sm-4-12
    .sm-4-12
  
    `}
        Grid com Styled Component
        {`
      const Grid = styled.div'
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
  ';
  
  const Column = styled.div'
  width: {props => (props.xs ? props.xs + "%" : "100%")};
      padding: 0 15px;
  @media screen and (min-width: {sm}) {
        width: {props => (props.sm ? props.sm + "%" : "100%")};
    }
  @media screen and (min-width: {md}) {
        width: {props =>
          props.md
            ? props.md + "%"
            : props.sm
              ? props.sm + "%"
              : props.xs
                ? props.xs + "%"
                : "100%"};
    }
  @media screen and (min-width: {lg}) {
        width: {props =>
          props.lg
            ? props.lg + "%"
            : props.md
              ? props.md + "%"
              : props.sm
                ? props.sm + "%"
                : props.xs
                  ? props.xs + "%"
                  : "100%"};
    }
  ';
  
<Grid>
        <Column sm={50} md={33} lg={25}>
          <div>...</div>
        </Column>
      </Grid>
    `}
      </p>
    </li>
  </ul>
);

export default Grid;
