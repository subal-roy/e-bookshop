import React from 'react';
import Sidebar from './Sidebar';
import SearchBooks from './SearchBooks';

const Search = () => {
  return (
    <div className='flex m-auto w-4/5'>
      <Sidebar/>
      <SearchBooks/>
    </div>
  )
}

export default Search;
