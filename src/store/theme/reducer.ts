const THEME_INITIAL_VALUES = {
    currentTheme: "DARK"
}

const themeReducer = (state = THEME_INITIAL_VALUES, action: iAction) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                currentTheme: action.payload
            }
        default:
            return state
    }
}

export default themeReducer;