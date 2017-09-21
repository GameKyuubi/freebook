import React, { Component } from 'react';
import { Button, Form, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class Adder extends Component {

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onSubmit();
  }

  render() {
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
      </div>
    )
  }
}

export default Adder;
