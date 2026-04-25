import './css/index.css';
import '../index.css';
import { useState, useEffect } from 'react';
function HomepageContent() {
  return (
    <>
      <form method="get" action="https://cn.bing.com/search" style={{ display: "flex" }}>
        <input name="q" placeholder="在必应搜索" style={{ flex: 1 }} />
        <button type="submit">=&gt;</button>
      </form>
      <div className="hint warn">
        <p>该网站使用React重写</p>
      </div>
      <div className="cards">
        <a href="https://github.com/LiaoxyuCM/liaoxyucmTop_reacted" target="_blank">
          <div className="card">
            <h3>本站仓库</h3>
            <p className="description">
              查看本站的源代码
            </p>
          </div>
        </a>
        <a href="https://github.com/LiaoxyuCM/liaoxyucmTop_reacted/issues" target="_blank">
          <div className="card">
            <h3>反馈问题</h3>
            <p className="description">
              发现Bug? 或者有任何建议?
            </p>
          </div>
        </a>
      </div>
    </>
  )
}

function NavBar() {
  const [isUnscrolled, setIsUnscrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsUnscrolled(window.scrollY < 21);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isUnscrolled ? 'unscrolled' : ''}>
      <a href="/">LiaoxyuCM</a>
      <div className="pc">
        <a href="https://github.com/LiaoxyuCM" target="_blank">GitHub</a>
        <a href="/friendlylinks">友链</a>
      </div>
    </nav>
  );
}

function Homepage() {
  return (
    <>
      <NavBar />
      <div className="p-img"></div>
      <div className="overlay">
        <h1>Welcome</h1>
        <p className="subtitle">
          /* LiaoxyuCM, LcmTech */
        </p>
        <svg className="scroll-down-svg" viewBox="0 0 24 24">
          <path d="M12 14.5l-5-5 1.4-1.4 3.6 3.6 3.6-3.6 1.4 1.4z" />
        </svg>
      </div>
      <div className="mainpare">
        <main>
          <HomepageContent />
        </main>
      </div>
      <section className="footer">
        <p>&copy; LiaoxyuCM × LcmTech 2024-2026</p>
      </section>
    </>
  )
}

export default Homepage
