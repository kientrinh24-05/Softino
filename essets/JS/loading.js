const LoadHead = {
    init: function() {
        LoadHead.loadingDisable('.wrapper--loading', 'wrapper--disable');
    },
    loadingDisable: function(classLoading, disableC) {
        let classLoad = document.querySelector(classLoading);
        setTimeout(() => {
            classLoad.classList.add(disableC);
        }, 1000);
    }
}
LoadHead.init();