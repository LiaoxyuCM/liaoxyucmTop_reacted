import React from 'react'
// import './index.scss'

interface Extending {
  element: React.ComponentType;
}

function Template(elem: Extending) {
  return (
    <>
      <nav>
        <a href="/">LiaoxyuCM</a>
        <div className="pc">
          <a href="https://github.com/LiaoxyuCM" target="_blank">GitHub</a>
          <a href="/friendlylinks">友链</a>
        </div>
      </nav>
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
