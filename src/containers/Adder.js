import { connect } from 'react-redux';
import Adder from '../components/Adder';
import { addBook, setAdderISBNFieldText, setAdderLatFieldText, setAdderLngFieldText, findBookByISBN } from '../actions/Adder';

const mapStateToProps = (state) => {
  return {
    adderISBNFieldText: state.adderISBNFieldText,
    adderLatFieldText: state.adderTitleFieldText,
    adderLngFieldText: state.adderLngFieldText,
    foundBook: state.adder.foundBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onISBNTextBoxChange: (event) => {
      dispatch(setAdderISBNFieldText(event.target.value))
    },
    onLatTextBoxChange: (event) => {
      dispatch(setAdderLatFieldText(event.target.value))
    },
    onLngTextBoxChange: (event) => {
      dispatch(setAdderLngFieldText(event.target.value))
    },
    onSubmit: () => {
      dispatch(addBook())
    },
    onSearch: (isbn) => {
      dispatch(findBookByISBN(isbn))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Adder);
