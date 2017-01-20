import React, { PropTypes } from 'react';

const Spinner = () => <i className="fa fa-spinner fa-spin fa-3x fa-fw" />;

const Fruit = ({ icon, color }) =>
  <div>
    {icon && color ?
      <i className={`fa fa-${icon} fa-5x`} style={{ color }} /> :
      <Spinner />
    }
  </div>;

Fruit.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
};

export default Fruit;
