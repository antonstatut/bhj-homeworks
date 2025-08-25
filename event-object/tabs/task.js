const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

tab.forEach((item, index) => {
    item.addEventListener('click', function() {
      tab.forEach(i => i.classList.remove('tab_active'));
      tabContent.forEach(itm => itm.classList.remove('tab__content_active'));
      this.classList.add('tab_active');
      tabContent[index].classList.add('tab__content_active');
    });
});
