function myapp() {
    const buttons = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".store-item");

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === "all";
            if (isItemFiltered && !isShowAll) {
                item.classList.add("hide");
            } else {
                item.classList.remove("hide");
            }
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentCategory = button.dataset.filter;
            console.log(currentCategory);
            filter(currentCategory, cards);
        });
    });
}

myapp();

let filter = function () {
    let input = document.getElementById('input');

    input.addEventListener('keyup', function () {
        let filter = input.value.toLowerCase(),
        filterItems = document.querySelectorAll('#list li');

        filterItems.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        })
    })
};

filter();