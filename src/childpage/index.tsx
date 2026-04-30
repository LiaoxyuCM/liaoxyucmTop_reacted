import { styled } from 'styled-components';
import { NavBar } from './modules/dynamic_components';
import { useTranslation } from 'react-i18next';
import { Card, Logos } from './modules/components';


function HomepageContent() {
  const { t } = useTranslation();
  return (
    <>
      <form method="get" action="https://cn.bing.com/search" style={{ display: "flex" }}>
        <input name="q" placeholder={t("index.search_via_bing")} style={
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
        <p>{t("index.rewritten_using_react")}</p>
      </div>
      <div className="cards">
        <Card
          title={t("index.siterepo.title")}
          content={t("index.siterepo.content")}
          link='https://github.com/LiaoxyuCM/liaoxyucmTop_reacted'
          targetblank={true}
        />
        <Card
          title={t("index.feedback.title")}
          content={t("index.feedback.content")}
          link='https://github.com/LiaoxyuCM/liaoxyucmTop_reacted/issues'
          targetblank={true}
        />
        <Card
          title={t("index.teststyle.title")}
          content={t("index.teststyle.content")}
          link='/styletest'
        />
      </div>
    </>
  )
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
  Subtitle: styled.p`
    color: var(--subtitle-text-color);
    display: flex;
    justify-content: center;
  `
}

function Homepage() {
  const { t } = useTranslation();
  return (
    <>
      <NavBar advanced={true} />
      <HomepageStyles.BackImg />
      <HomepageStyles.Overlay>
        <h1>{t("index.welcome")}</h1>
        <HomepageStyles.Subtitle>
          /* LiaoxyuCM, LcmTech */
        </HomepageStyles.Subtitle>
        <Logos.Scrolldown />
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
