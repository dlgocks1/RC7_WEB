const VISIBILTITY_ON = "VISIBILTITY_ON"
const VISIBILTITY_OFF = "VISIBILTITY_OFF"

export const setPreviewModalOn = (data) =>({
        type : VISIBILTITY_ON,
        data,
    })

export const setPreviewModalOff = () =>({
        type : VISIBILTITY_OFF,
    })