onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Belated Happy Valentines Day My Baby Bear 🧸 This is the flower I make for you 🫶🏻 sorry po kanina :<').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 50); 
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
