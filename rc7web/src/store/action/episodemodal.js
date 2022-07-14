const MODAL_ON = "MODAL_ON"
const MODAL_OFF = "MODAL_OFF"

export const setEpisdoeModalOn = (data) =>({
        type : MODAL_ON,
        data,
    })

export const setEpisdoeModalOff= () =>({
        type : MODAL_OFF,
    })
