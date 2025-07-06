window.addEventListener('load', () => {
    setTimeout(() => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.replace('#', '');
      const target = document.getElementById(id);
      if (!target) return;

      const headerOffset = window.innerWidth <= 768 ? 120 : 80;
      const maxAttempts = 10;
      let attempts = 0;

      const isVisible = (el) => {
        const style = window.getComputedStyle(el);
        return (
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          el.offsetHeight > 0
        );
      };

      const tryScroll = () => {
        if (!isVisible(target)) return;

        const rect = target.getBoundingClientRect();
        const offsetPosition = rect.top + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(scrollInterval);
        }
      };

      // Робимо кілька спроб скролу (на випадок до-пізнього завантаження зображень)
      const scrollInterval = setInterval(tryScroll, 500);
      // Стоп через 5 сек
      setTimeout(() => clearInterval(scrollInterval), 1500);
    }, 500); // трішки дочекатися після window.onload
  });