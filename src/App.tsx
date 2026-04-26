import React from 'react'
import { useTranslation } from 'react-i18next';
// import './index.scss'

interface Extending {
  element: React.ComponentType;
}

function Template(elem: Extending) {
  const {t, i18n} = useTranslation();

  return (
    <>
      <nav>
        <a href="/">LiaoxyuCM</a>
        <div className="pc">
          <a href="#" onClick={
            (e) => {
              e.preventDefault();
              if (i18n.language === 'zh-CN') {
                i18n.changeLanguage('en');
              } else {
                i18n.changeLanguage('zh-CN');
              }
            }
          }>{t("translate.anotherlang")}</a>
          <a href="https://github.com/LiaoxyuCM" target="_blank">GitHub</a>
          <a href="/friendlylinks">{t("index.nav.frdlylnks")}</a>
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
