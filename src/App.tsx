import React from 'react';
import { NavBar } from './childpage/modules/dynamic_components';
// import './index.scss'

interface Extending {
  element: React.ComponentType;
}

function Template(elem: Extending) {
  return (
    <>
      <NavBar />
      <div className="mainpare">
        <main>
          <elem.element />
        </main>
      </div>
      <section className="footer">
        <p>&copy; LiaoxyuCM × LcmTech 2024-2026</p>
      </section>
    </>
  )
}

export default Template
