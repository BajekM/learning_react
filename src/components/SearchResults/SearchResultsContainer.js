import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
// import getCardsForSearchResults from '../../../redux/cardsRedux.js';
// import {getSearchString} from '../../../redux/searchStringRedux.js';
import {createAction_changeSearchString} from '../../../redux/searchStringRedux.js';

const mapStateToProps = state => ({
  cards: state.cards.filter((card=> (new RegExp(state.searchString, 'i').test(card.title)))),
  //   cards: getCardsForSearchResults(state.cards, state.searchString),
  // searchString: getSearchString(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);