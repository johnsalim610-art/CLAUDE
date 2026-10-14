(function () {
  // Mobile navigation drawer
  var nav = document.querySelector('[data-nav]');
  document.querySelectorAll('[data-nav-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!nav) return;
      var open = nav.classList.toggle('is-open');
      document.querySelectorAll('[aria-controls="nav-drawer"]').forEach(function (b) {
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.body.style.overflow = open ? 'hidden' : '';
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // Collection sort
  var sort = document.querySelector('[data-sort]');
  if (sort) {
    sort.addEventListener('change', function () {
      var url = new URL(window.location.href);
      url.searchParams.set('sort_by', sort.value);
      url.searchParams.delete('page');
      window.location.href = url.toString();
    });
  }

  // Product gallery thumbnails
  var main = document.querySelector('[data-main-image]');
  document.querySelectorAll('[data-thumb]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (!main) return;
      main.removeAttribute('srcset');
      main.src = thumb.dataset.src;
      main.alt = thumb.dataset.alt || main.alt;
      document.querySelectorAll('[data-thumb]').forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });

  // Variant selection
  var form = document.querySelector('[data-product-form]');
  if (form) {
    var selects = form.querySelectorAll('[data-option]');
    var variantSelect = form.querySelector('[data-variant-select]');
    var addBtn = form.querySelector('[data-add]');
    var priceBox = document.querySelector('[data-price] .price');
    var labels = { add: addBtn ? addBtn.textContent.trim() : 'Add to basket' };
    var update = function () {
      var chosen = Array.prototype.map.call(selects, function (s) { return s.value; }).join('|');
      var match = Array.prototype.find.call(variantSelect.options, function (o) { return o.dataset.options === chosen; });
      if (!match) return;
      variantSelect.value = match.value;
      var available = match.dataset.available === 'true';
      if (addBtn) {
        addBtn.disabled = !available;
        addBtn.textContent = available ? labels.add : (addBtn.dataset.soldOut || 'Sold out');
      }
      if (priceBox) {
        var now = priceBox.querySelector('.price__now');
        var was = priceBox.querySelector('.price__was');
        if (now) now.textContent = match.dataset.price;
        if (was) was.textContent = match.dataset.compare;
        priceBox.classList.toggle('price--sale', !!match.dataset.compare);
      }
      var url = new URL(window.location.href);
      url.searchParams.set('variant', match.value);
      window.history.replaceState({}, '', url.toString());
    };
    selects.forEach(function (s) { s.addEventListener('change', update); });
  }
})();
