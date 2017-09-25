import querystring from 'querystring';

export const setAdderISBNFieldText = (text) => {
  return {
    type: 'SET_ADDER_ISBN_FIELD_TEXT',
    text
  }
}

export const setAdderLatFieldText = (text) => {
  return {
    type: 'SET_ADDER_LAT_FIELD_TEXT',
    text
  }
}

export const setAdderLngFieldText = (text) => {
  return {
    type: 'SET_ADDER_LNG_FIELD_TEXT',
    text
  }
}

export const findBookByISBN = (isbn) => {
  return async (dispatch) => {
    const params = {
      isbn
    }
    const query = querystring.stringify(params);
    try {
      const response = await fetch(`/api/book?${query}`);
      const book = await response.json();
      dispatch({
        type: 'SET_FOUND_BOOK',
        book
      })
    } catch (err) {
      console.log('Error finding book!');
    }
  }
}

export const addBook = () => {
  return {
    type: 'ADD_NEW_BOOK',
  }
}

