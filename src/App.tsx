import { useState } from 'react'
import './App.css'

function Template() {
  return (
    <>
      <nav>
	    <a href="https://liaoxyucm.top">LiaoxyuCM</a>
	    <div className="pc">
		  <a href="https://github.com/LiaoxyuCM" target="_blank">GitHub</a>
		  <a href="https://liaoxyucm.top/friendlylinks">友链</a>
	    </div>
      </nav>
      <div className="mainpare">
        <main>
        </main>
      </div>
      <section className="footer">
        <p>&copy; LiaoxyuCM × LcmTech 2024-2026</p>
      </section>
    </>
  )
}

export default Template
