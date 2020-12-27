import React, { useState } from 'react';
import { Fragment } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const { push } = useHistory();

  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/search/games/?q=${keyword}`);
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          name="keyword"
          onChange={handleOnChange}
        />
        <Button type="submit" variant="outline-success">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </Fragment>
  );
};

export default SearchBar;
