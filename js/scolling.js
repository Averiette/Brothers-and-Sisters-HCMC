window.addEventListener('scroll', function() {
    var navigator = document.getElementById('navigator');
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentPosition >= section1.offsetTop && currentPosition < section2.offsetTop) {
      navigator.style.backgroundColor = '#ffffff';
    } else if (currentPosition >= section2.offsetTop && currentPosition < section3.offsetTop) {
      navigator.style.backgroundColor = '#e0e0e0';
    } else if (currentPosition >= section3.offsetTop) {
      navigator.style.backgroundColor = '#cccccc';
    } else {
      navigator.style.backgroundColor = 'transparent';
    }
  });