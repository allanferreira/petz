const palette = {
    lightBlue:     '#00a0e4',
    darkBlue:      '#1b6db0',
    goldYellow:    '#ffd400',
    frostedYellow: '#fccf3b',
    gray1:         '#6e6e6e',
    gray2:         '#555555',
    gray3:         '#262626',
    gray4:         '#f3f3f3',
    white:         '#ffffff',
    red:           '#ff0000',
}

export default {
    main: palette.lightBlue,
    support: palette.goldYellow,
    text: [
        palette.gray1, 
        palette.gray2, 
        palette.gray3
    ],
    background: palette.white,
    danger: palette.red,
    ...palette,
}
