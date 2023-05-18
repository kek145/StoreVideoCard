const buttons = document.querySelectorAll('.main__card-button');

buttons.forEach(async (button) => {
    await button.addEventListener('click', () => {
        alert("Товар добавлен в корзину!");
    });
});