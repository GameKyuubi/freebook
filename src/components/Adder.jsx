import React, { Component } from 'react';
import { Button, Form, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';

class Adder extends Component {

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onSubmit();
  }

  onSearchButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onSearch(this.props.adderISBNFieldText);
  }

  render() {
    console.log(this.props);
    return (
      <div className="Adder">
        <Form>
          <Label>Add Book</Label>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>ISBN</InputGroupAddon>
              <Input
                id="adderISBN"
                placeholder="978-0-123456-47-2"
                onInput={ this.props.onISBNTextBoxChange }
              />
            </InputGroup>
            <Button
              onClick={ this.onSearchButtonClick }
            >Search</Button>
            <Button
              onClick={ this.onSubmitButtonClick }
            >Submit</Button>
          </InputGroup>
          <Label>Location</Label>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Latitude</InputGroupAddon>
              <Input
                id="adderLat"
                placeholder="30.0"
                onInput={ this.props.onLatTextBoxChange }
              />
            </InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Longitude</InputGroupAddon>
              <Input
                id="adderLng"
                placeholder="30.0"
                onInput={ this.props.onLngTextBoxChange }
              />
            </InputGroup>
          </InputGroup>
        </Form>
        { this.props.foundBook.title ?
            <div>
              <h2> { this.props.foundBook.title } </h2>
              {
                this.props.foundBook.authors.map( (author) => {
                  return (<h4> { author } </h4>);
                })
              }
              <div> <img width='50%' src={ this.props.foundBook.imageLinks.thumbnail } /> </div>
            </div> : null }
      </div>
    )
  }
}

Adder.propTypes = {
  adderISBNFieldText: PropTypes.string.isRequired,
  foundBook: PropTypes.shape().isRequired,
}

export default Adder;
