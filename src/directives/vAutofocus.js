export const vAutofocus = {
    mounted: (el) => {
        console.log('autofocus - global custom directive')
        el.focus()
    }
}