document.querySelectorAll('.menu-option').forEach(option => {
    option.addEventListener('click', () => {
      const currentActive = document.querySelector('.menu-option.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      option.classList.add('active');
      const category = option.textContent.trim();
      if (category === 'Beverages') {
        document.getElementById('contentFrame').src = 'beverages.html';
      } else if (category === 'Coffee') {
        document.getElementById('contentFrame').src = 'coffee.html';
      } else if (category === 'Food') {
        document.getElementById('contentFrame').src = 'food.html';
      } else if (category === 'Special Combos') {
        document.getElementById('contentFrame').src = 'combos.html';
      }
    });
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
  document.querySelectorAll('.circle-option').forEach(circle => {
    circle.addEventListener('click', () => {
      document.querySelectorAll('.circle-option').forEach(c => {
        c.classList.remove('active');
      });
      circle.classList.add('active');
    });
  });
  