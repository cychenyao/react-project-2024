import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { useState } from 'react'

function SearchNote({searchTerm, onChange}) {
  return (
    <div>
        <input type="text" value={searchTerm} onChange={onChange} placeholder='搜索笔记' >
        </input>
    </div>
  )
}

export default SearchNote
