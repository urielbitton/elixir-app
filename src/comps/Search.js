import React from 'react'

function Search() {
  return (
    <div className="searchcont">
      <i className="close"></i>
      <div className="grid pgrid">
        <div className="searchbox">
          <label><input placeholder="Search by product, tag, category or price"/><i class="fas fa-search"></i></label>
        </div>
        <div className="searchresults">
          
        </div>
      </div> 
    </div>
  )
}

export default Search