const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //Add ahow class
    tabContentItem.classList.add('show');

}

function removeBorder() {
    tabItems.forEach(items => items.classList.remove('tab-border'));
}

function removeShow() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


