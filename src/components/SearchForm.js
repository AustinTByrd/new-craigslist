import React from 'react';
import {
    Form,
} from 'react-bootstrap';

const SearchForm = () => (
    <Form className="form-wrapper">
        <input type="text" id="search" placeholder="Search for..." required></input>
        <input type="submit" value="search" id="submit"></input>
    </Form>

);

export default SearchForm;