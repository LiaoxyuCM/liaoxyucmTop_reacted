import type { ComponentType } from 'react';
import { NavBar } from './childpage/modules/dynamic_components';
import { FooterBase } from './childpage/modules/components';
// import './index.scss'

function Template(elem: { element: ComponentType }) {
  return (
    <>
      <NavBar />
      <div className="mainpare">
        <main>
          <elem.element />
        </main>
      </div>
      <section className="footer">
        <FooterBase />
      </section>
    </>
  )
}

export default Template
