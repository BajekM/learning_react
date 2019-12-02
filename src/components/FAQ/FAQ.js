import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {faq} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image}/>
    <div className={styles.description}>
      {ReactHtmlParser(faq.text)}
    </div>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
};


export default FAQ;