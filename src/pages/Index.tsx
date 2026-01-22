export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">RETRO*ДОСТАВКА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Доставка</a>
          <a href="#">Акции</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ГОЛОДНЫЙ?
              <br />
              МЫ УЖЕ <span>ВЕЗЁМ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Бургеры с огнём, пицца с душой и роллы с характером. Доставим за 40 минут или бесплатно. Без понтов, только вкус.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ДОСТАВКА
              <br />
              40 МИН
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #БЫСТРО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ ПИЦЦА РОЛЛЫ * ДОСТАВКА ЗА 40 МИНУТ * РАБОТАЕМ ДО 23:00 * МИНИМАЛЬНЫЙ ЗАКАЗ 500₽ * СКИДКИ ПОСТОЯННЫМ *
            БУРГЕРЫ ПИЦЦА РОЛЛЫ * ДОСТАВКА ЗА 40 МИНУТ * РАБОТАЕМ ДО 23:00 * МИНИМАЛЬНЫЙ ЗАКАЗ 500₽ * СКИДКИ ПОСТОЯННЫМ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ ПРОДАЖ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Бургер</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классический бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Чизбургер Дабл</h3>
                  <span className="price">590 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная котлета, чеддер, карамелизированный лук, соус BBQ, бриошь.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Пицца
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пепперони пицца"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мясная Бомба</h3>
                  <span className="price">720 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Пепперони, охотничьи колбаски, бекон, моцарелла, томатный соус.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Роллы
              </span>
              <img
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Роллы Филадельфия"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Филадельфия Делюкс</h3>
                  <span className="price">450 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Лосось, сливочный сыр, огурец, нори. 8 штук.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ДОСТАВКА С ДУШОЙ.</h2>
            <p className="vibe-text">
              Мы готовим с любовью и везём с заботой. Горячие бургеры, свежие роллы и ароматная пицца доедут до вас в термосумках за 40 минут. Если опоздаем — доставка в подарок.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Зоны доставки
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @RETRO.ДОСТАВКА
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">RETRO*ДОСТАВКА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Доставка бургеров, пиццы и роллов с ретро-вайбом. Быстро, вкусно, с душой. Работаем с 2024.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн-Вс: 11:00 - 23:00</li>
            <li>Доставка: 40 минут</li>
            <li>Минимум: 500 ₽</li>
            <li>+7 (999) 123-45-67</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 RETRO•ДОСТАВКА</span>
          <span>БЫСТРО И ВКУСНО</span>
          <span>IG / VK / TG</span>
        </div>
      </footer>
    </>
  );
}