import type { ComponentType } from 'react';
import { NavBar } from './childpage/modules/dynamic_components';
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
        <p>&copy; LiaoxyuCM × LcmTech 2024-2026</p>
      </section>
    </>
  )
}

export default Template
