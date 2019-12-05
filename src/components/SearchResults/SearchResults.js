import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

import Icon from '../Icon/Icon';
import Container from '../Container/Container.js';
import {searchResults} from '../../data/dataStore.js';


class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    searchString: PropTypes.string,
  }

  render() {
    const {cards} = this.props;
    
    return (
      <section className={styles.component}>
        <Container>
          <h3 className={styles.title}><span className={styles.icon}><Icon name={searchResults.icon}/></span>{searchResults.title}</h3>
          {cards.map(({id, ...cardProps}) => (
            <Card key={id} {...cardProps} />
          ))}
        </Container>
      </section>
    );
  }
}

export default SearchResults;