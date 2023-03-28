['DOMDocumentReady', 'scroll', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        customCount()
    })
})

const customCount = () => {
    let flag = true
    
    document.querySelectorAll('.facts').forEach(element => {
        if (isInViewport(element)) {
            if (flag) {
                let arr = [], i = 0;

                document.querySelectorAll('.odometer').forEach((el, idx) => {
                    arr[i++] = el.dataset.count
                    el.innerText = arr[idx]
                })

                flag = false;
            }
        } else {
            odometer0.innerText = '00';
            odometer1.innerText = '000';
            odometer2.innerText = '00';
            odometer3.innerText = '00';
        }
    })
}

const isInViewport = element => {
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    const viewportTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportBottom = viewportTop + window.innerHeight;
    return elementBottom > viewportTop && elementTop < viewportBottom;
}
  