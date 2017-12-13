import React from "react";

const Search = props =>
  <div className='container'>
    <h1 className='title'>Search</h1>

    <label htmlFor='topic'>Topic</label>
    <input name='topic' className='input' type='text'></input>

    <label htmlFor='start-year'>Start Year</label>
    <input name='start-year' className='input' type='text'></input>

    <label htmlFor='end-year'>End Year</label>
    <input name='end-year' className='input' type='text'></input>

    <button className='button is-primary'>
      Search
    </button>

  </div>

export default Search;
