  window.addEventListener('DOMContentLoaded', () => {
    // 載入 nav 並綁定漢堡選單事件
    fetch('/components/nav.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        requestAnimationFrame(() => {
          const menu = document.getElementById('navMenu');
          const btn = document.getElementById('hamburgerBtn');

          document.addEventListener('click', function (e) {
            const clickedInsideBtn = (e.target === btn || btn.contains(e.target));
            const clickedInsideMenu = menu.contains(e.target);
            const clickedLink = e.target.closest('a');

            if (clickedInsideBtn) {
              menu.classList.toggle('open');
            } else if (clickedLink && clickedInsideMenu) {
              menu.classList.remove('open');
            } else if (!clickedInsideMenu) {
              menu.classList.remove('open');
            }
          });
        });
      });

    // 載入 footer（如需）
    fetch('/components/footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  });
   fetch('../components/nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    fetch('../components/footer.html')
        .then(res => res.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);

    // ✅ 綁定 hamburger 點擊事件
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    document.addEventListener('click', function (e) {
      const clickedInsideBtn = (e.target === hamburger || hamburger.contains(e.target));
      const clickedInsideMenu = navMenu.contains(e.target);
      const clickedLink = e.target.closest('a');

      if (clickedInsideBtn) {
        navMenu.classList.toggle('open');
      } else if (clickedLink && clickedInsideMenu) {
        navMenu.classList.remove('open');
      } else if (!clickedInsideMenu) {
        navMenu.classList.remove('open');
      }
    });
  });