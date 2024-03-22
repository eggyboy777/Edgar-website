const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


async function getDictWord() {
    const randomWord = await fetch('https://dict.likes.gay/api/get_random_word').then(x => x.json());

    const randomWordElement = document.getElementById("random-word");
    randomWordElement.querySelector("span").remove();
    randomWordElement.insertAdjacentHTML("beforeend", `<a href="https://dict.likes.gay#dfn-${randomWord.word.word.replaceAll(" ", "_")}:${randomWord.word.id}">${randomWord.word.word}</a>`);
}

getDictWord();