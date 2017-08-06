import React from 'react'

// I would like this to be in the MasterLayout, rather than 
// included in every template/page, but there doesn't seem 
// to be a way to access the Frontmatter from the layout component

export default function PageTitle ({ title }) {
  return (
    <header className="page-header">
      <h1 className="page-title">{ title }</h1>
    </header>
  )
}