import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../navbar/'
import Counter from '../counter/'
import '../all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Counter />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
