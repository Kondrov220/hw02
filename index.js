//1
document.querySelector('.slider__input').addEventListener('input', _.debounce((e) => {
      const size = 200 + Number(e.target.value * 2);
      document.querySelector('.slider__image').style.width = `${size}px`;
      document.querySelector('.slider__image').style.height = 'auto';
    }, 200));
//2
document.addEventListener("mousemove" , _.debounce((e) => {
    console.log(e)
    const x = e.clientX;
    const y = e.clientY;
    document.querySelector("#box").style.transform = `translate(${x}px, ${y}px)`;
}, 100));