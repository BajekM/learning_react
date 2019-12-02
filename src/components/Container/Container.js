import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

class Container extends React.Component {
    static propTypes = {
      children: PropTypes.node,
    }
    render() {
      const {children} = this.props;
      return (
        <div className={styles.component}>
          {children}
        </div>
      );
    }
}

export default Container;