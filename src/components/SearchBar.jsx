import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
 <div class="search-bar">
    <form className='search-form d-flex align-items-center'method='POST'
   action='#'>
<input type="text" name='query' placeholder='search' title='Enter search keyword' />
<button type='submit'title='Search'>
    <i className='bi bi-search'></i>
</button>
    </form>
 </div>
  )
}

export default SearchBar