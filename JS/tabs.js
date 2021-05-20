document.addEventListener('DOMContentLoaded', () => {
    const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
    const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
 
    tabsHandlerElems.forEach((tab) =>{
        tab.addEventListener('click', () => {
            tabsHandlerElems.forEach((item) => {
                if (item === tab) {
                    item.classList.add('design-list__item_active');
                } else {
                    item.classList.remove('design-list__item_active');
                }
            })
            tabsFieldElems.forEach((item) => {
                if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            })
        })
    });
})

/*    for (const tab of tabsHandlerElems) {
        tab.addEventListener('click', () => {
            for (const item of tabsHandlerElems) {
                if (item === tab) {
                    item.classList.add('design-list__item_active');
                } else {
                    item.classList.remove('design-list__item_active');
                }
            }
            for (const item of tabsFieldElems) {
                if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        })
    }*/