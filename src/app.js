var lastScrollTop = 0;

window.onscroll = () => {
    const fakeH = document.querySelector('#fakeHeader');
    const sbar = document.querySelector('#searchBar');
    const fmobile = document.querySelector('#footerMobile');
    const hdesktop = document.querySelector('#headerDesktop');
    var actualScrollTop = window.pageYOffset;
    if (window.innerWidth > 375) {
        // Escritorio
        if (actualScrollTop>lastScrollTop) {
            hdesktop.classList.add("hide");
        }else{
            hdesktop.classList.remove("hide");
        }
        lastScrollTop = actualScrollTop <= 0? 0 : actualScrollTop;
        /*if (window.pageYOffset >= 75) {
            fakeH.style.top = '0px';
            fakeH.style.opacity = '1';
            
        } else {
            fakeH.style.top = '-75px';
            fakeH.style.opacity = '0';
        }*/
    } else {
        // Movil
        if (actualScrollTop>lastScrollTop) {
            sbar.classList.add("hide");
            fmobile.classList.add("hide");
        }else{
            sbar.classList.remove("hide");
            fmobile.classList.remove("hide");
        }
        lastScrollTop = actualScrollTop <= 0? 0 : actualScrollTop;

    }
    
}