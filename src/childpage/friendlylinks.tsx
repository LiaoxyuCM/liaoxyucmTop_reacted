import { useTranslation } from "react-i18next";

function FriendlyLinksContent() {
  const { t } = useTranslation();
  return (
    <div className="cards frdlylnks">
      <a href="https://muah.top" target="_blank">
        <div className="card">
          <img src="https://assets.liaoxyucm.top/muah.top/g.jpg" style={{ width: 40 + 'px', height: 40 + 'px', marginRight: 3 + 'px' }}></img>
          <div>
            <h3>{t("frdlylnks.huayumomo")}</h3>
            <p className="description">
              2024 - 2026 &amp; {t("frdlylnks.huayumomo.moking")} &amp; {t("frdlylnks.huayumomo.chenqingmua")}</p>
          </div>
        </div>
      </a>
    </div>
  )
}



export default FriendlyLinksContent;
