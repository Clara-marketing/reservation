import module from "https://esm.sh/module";
<script>
  function forceCartStyle() {
    const cart = document.querySelector('forescape .f-cart');
    if (cart) {
      cart.style.backgroundColor = 'transparent';
      cart.style.border = 'none';
      cart.style.boxShadow = 'none';
    }

    const toggleBtn = document.querySelector('forescape .f-cart-toggle-btn');
    if (toggleBtn) {
      toggleBtn.style.backgroundColor = '#F0E400';
      toggleBtn.style.borderRadius = '12px';
      toggleBtn.style.color = '#161616';
      toggleBtn.style.border = 'none';

      // Gestion hover
      toggleBtn.addEventListener('mouseenter', () => {
        toggleBtn.style.backgroundColor = '#2CAD6E';
        toggleBtn.style.color = '#ffffff';
      });
      toggleBtn.addEventListener('mouseleave', () => {
        toggleBtn.style.backgroundColor = '#F0E400';
        toggleBtn.style.color = '#161616';
      });
    }
  }

  const interval = setInterval(() => {
    const cartExists = document.querySelector('forescape .f-cart');
    const toggleExists = document.querySelector('forescape .f-cart-toggle-btn');
    if (cartExists && toggleExists) {
      forceCartStyle();
      clearInterval(interval);
    }
  }, 300);
</script>