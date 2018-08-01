import React from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = ({title, component: Component}) => (
  <div className="content content-wrapper">
    <h2 className="fs fs-xl title">{title}:</h2>
    <Component />
</div>
);

ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
}

export default ContentWrapper;