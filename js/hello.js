let hello_1 = document.querySelector('.hello-1');
let hello_2 = document.querySelector('.hello-2');

// Добавить наблюдение за появлением элемента
let hello_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     hello_1.classList.add('hello-1-active');
     hello_2.classList.add('hello-2-active');
      return;
    }
    
  });
});
hello_observer.observe(document.querySelector('.hello-words'));
