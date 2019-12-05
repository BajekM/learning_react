import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
// import getCardsForSearchResults from '../../../redux/cardsRedux.js';

const mapStateToProps = state => ({
  cards: state.cards.filter((card=> (new RegExp(state.searchString, 'i').test(card.title)))),
//   cards: getCardsForSearchResults(state.cards, state.searchString),
});

export default connect(mapStateToProps)(SearchResults);