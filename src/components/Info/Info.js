import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {info} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import styles from './info.scss';

const Info = () => (
  <Container>
    <Hero titleText={info.title} image={info.image}/>
    <div className={styles.description}>
      {ReactHtmlParser(info.text)}
    </div>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default Info;