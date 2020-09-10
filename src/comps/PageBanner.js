import React from 'react'

function PageBanner(props) {
  return (
    <div className="pagebanner">
      <div className="bannerbg"></div>
      <div className="grid pgrid">
        <h1>{props.title}</h1>
        <h5>{props.subtitle}</h5>
      </div>
    </div>
  )
}

export default PageBanner