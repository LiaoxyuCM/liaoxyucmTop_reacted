import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

interface CardProps {
  title: string,
  content: string,
  link: string
}

function Card({ title, content, link }: CardProps) {
  return (
    <a href={link} target="_blank">
      <div className="card">
        <h3>{title}</h3>
        <p className="description">
          {content}
        </p>
      </div>
    </a>
  )
}

function HomepageContent() {
  return (
    <>
      <form method="get" action="https://cn.bing.com/search" style={{ display: "flex" }}>
        <input name="q" placeholder="在必应搜索" style={
          {
            flex: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }
        } />
        <button type="submit" style={
          {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }
        }>=&gt;</button>
      </form>
      <div className="hint warn">
        <p>该网站使用React重写</p>
      </div>
      <div className="cards">
        <Card
          title='本站仓库'
          content='查看本站的源代码'
          link='https://github.com/LiaoxyuCM/liaoxyucmTop_reacted'
        />
        <Card
          title='反馈问题'
          content='发现Bug? 或者有任何建议?'
          link='https://github.com/LiaoxyuCM/liaoxyucmTop_reacted/issues'
        />
        <Card
          title='样式测试'
          content='测试各种HTML元素的样式展示'
          link='/styletest'
        />
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
    <nav className={isUnscrolled ? 'unscrolled' : ''} style={{ position: "fixed" }}>
      <a href="/">LiaoxyuCM</a>
      <div className="pc">
        <a href="https://github.com/LiaoxyuCM" target="_blank">GitHub</a>
        <a href="/friendlylinks">友链</a>
      </div>
    </nav>
  );
}

const HomepageStyles = {
  BackImg: styled.div`
    height: 100vh;
    width: 100%;
    background-image: url("https://assets.liaoxyucm.top/wallpaper.jpg");
    position: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -9178;
  `,
  Overlay: styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--overlay-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  MainParent: styled.div`
    background-color: var(--body-bg-color);
    position: relative;
    z-index: 0;
  `,
  ScrollDownSVG: styled.svg`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    animation: bounce 1.5s infinite;
  `,
  Subtitle: styled.p`
    color: var(--subtitle-text-color);
    display: flex;
    justify-content: center;
  `
}

function Homepage() {
  return (
    <>
      <NavBar />
      <HomepageStyles.BackImg />
      <HomepageStyles.Overlay>
        <h1>Welcome</h1>
        <HomepageStyles.Subtitle>
          /* LiaoxyuCM, LcmTech */
        </HomepageStyles.Subtitle>
        <HomepageStyles.ScrollDownSVG viewBox="0 0 24 24">
          <path d="M12 14.5l-5-5 1.4-1.4 3.6 3.6 3.6-3.6 1.4 1.4z" />
        </HomepageStyles.ScrollDownSVG>
      </HomepageStyles.Overlay>
      <HomepageStyles.MainParent>
        <main>
          <HomepageContent />
        </main>
      </HomepageStyles.MainParent>
      <section className="footer" style={{ margin: 0 }}>
        <p>&copy; LiaoxyuCM × LcmTech 2024-2026</p>
      </section>
    </>
  )
}

export default Homepage
