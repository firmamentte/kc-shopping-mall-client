let shouldHidePopupBackground = true

export const formatNumber = (number: number): string => {
    return isNaN(number) ? "" : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '$&,')
}

export const formatFloat = (number: number): string => {
    return isNaN(number) ? "" : number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export const isBlank = (stringValue: string) => {
    return (!stringValue || /^\s*$/.test(stringValue))
}

export const isMessageDivEmpty = (messageDiv: HTMLDivElement) => {

    if (isBlank(messageDiv.innerHTML)) {
        return true
    }
    else {
        return false
    }
}

export const clearMessage = (messageDiv: HTMLDivElement) => {
    messageDiv.innerHTML = ""
    return messageDiv
}

export const appendMessage = (messageDiv: HTMLDivElement, messageText: string) => {
    messageDiv.insertAdjacentHTML("beforeend", `&#8594; ${messageText}<br />`)
}

export const setMessage = (errorMessageDiv: HTMLDivElement, messageText: string) => {
    errorMessageDiv.innerHTML = messageText
}

export const getCurrentYear = () => {
    return new Date().getFullYear()
}

export const isVisible = (element: any) => {

    if (element != null) {

        const _style = window.getComputedStyle(element)

        return (
            _style.opacity !== "0" &&
            _style.display !== "none" &&
            _style.visibility !== "hidden")
    }
    else {
        return false
    }
}

export const showPopupFormProgressBar = () => {

    const popupFormProgressBar = document.querySelector(".popup-form-progress-bar") as HTMLDivElement
    popupFormProgressBar.classList.remove("hide-popup-form-progress-bar")
    popupFormProgressBar.classList.add("show-popup-form-progress-bar")
    popupFormProgressBar.style.top = `${window.pageYOffset}px`

    showPopupBackground()
}

export const hidePopupFormProgressBar = () => {

    const popupFormProgressBar = document.querySelector(".popup-form-progress-bar") as HTMLDivElement
    popupFormProgressBar.classList.remove("show-popup-form-progress-bar")
    popupFormProgressBar.classList.add("hide-popup-form-progress-bar")

    hidePopupBackground()
}

export const showGlobalErrorMessage = () => {

    const globalErrorMessage = document.querySelector(".global-error-message") as HTMLDivElement

    if (!isBlank(globalErrorMessage.innerHTML)) {
        globalErrorMessage.classList.remove("hide-global-error-message")
        globalErrorMessage.classList.add("show-global-error-message")
    }
}

export const hideGlobalErrorMessage = () => {

    const globalErrorMessage = document.querySelector(".global-error-message") as HTMLDivElement
    globalErrorMessage.classList.remove("show-global-error-message")
    globalErrorMessage.classList.add("hide-global-error-message")
}

export const reCenterPopupFormProgressBar = () => {

    const popupFormProgressBar = document.querySelector(".popup-form-progress-bar") as HTMLDivElement

    if (isVisible(popupFormProgressBar)) {
        popupFormProgressBar.style.top = `${window.pageYOffset}px`
    }
}

export const showPopupForm = (popupFormDiv: HTMLDivElement) => {

    hidePopupFormProgressBar()

    if (popupFormDiv != null) {

        popupFormDiv.style.display = 'block'
        popupFormDiv.style.top = `${window.pageYOffset}px`
        popupFormDiv.style.left = '0px'

        popupFormDiv.classList.remove("hide-popup-form")
        popupFormDiv.classList.add("show-popup-form");

        (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
    }
}

export const hidePopupForm = (popupFormDiv: HTMLDivElement) => {

    if (popupFormDiv != null) {

        popupFormDiv.classList.remove("show-popup-form")
        popupFormDiv.classList.add("hide-popup-form");

        (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden visible'

        if (popupFormDiv.classList.contains("popup-form-small")) {
            hidePopupBackground()
        }
    }
}

export const toggleScrollTopButton = () => {

    if (window.pageYOffset >= 180) {

        const scrollTop = document.querySelector(".scroll-top") as HTMLDivElement
        if (!!scrollTop) {
            if (!scrollTop.classList.contains("show-scroll-top")) {

                centerScrollTopButton(scrollTop)

                scrollTop.classList.remove("hide-scroll-top")
                scrollTop.classList.add("show-scroll-top")
            }
        }
    }
    else {

        const scrollTop = document.querySelector(".scroll-top") as HTMLDivElement
        if (!!scrollTop) {
            if (!scrollTop.classList.contains("hide-scroll-top")) {

                if (scrollTop.classList.contains("show-scroll-top")) {

                    scrollTop.classList.remove("show-scroll-top")
                    scrollTop.classList.add("hide-scroll-top")
                }
            }
        }
    }
}

export const reCenterScrollTopButton = () => {

    const scrollTop = document.querySelector(".scroll-top") as HTMLDivElement
    if (isVisible(scrollTop)) {
        centerScrollTopButton(scrollTop)
    }
}

export const showCartSummaryPopupButton = () => {

    const cartSummaryPopup = document.querySelector(".cart-summary-popup") as HTMLDivElement

    centerCartSummaryPopup(cartSummaryPopup)

    cartSummaryPopup.classList.add("show-cart-summary-popup")
}

function hidePopupBackground() {

    const backgroundPopup = document.querySelector(".background-popup") as HTMLDivElement

    backgroundPopup.classList.remove("show-popup-background")
    backgroundPopup.classList.add("hide-popup-background")
}

function showPopupBackground() {

    const backgroundPopup = document.querySelector(".background-popup") as HTMLDivElement

    backgroundPopup.classList.add("show-popup-background")
    backgroundPopup.classList.remove("hide-popup-background")
}

function centerScrollTopButton(scrollTopElement: HTMLDivElement) {
    scrollTopElement.style.right = '0px'
    scrollTopElement.style.bottom = '0px'
}

function centerCartSummaryPopup(cartSummaryPopup: HTMLDivElement) {

    cartSummaryPopup.style.top = "11px"
    cartSummaryPopup.style.right = "0px"
}
