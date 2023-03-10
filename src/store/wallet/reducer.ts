const WALLET_INITIAL_STATE = {
    total: 0,
    value: 0,
}

const walletReducer = (state = WALLET_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "ADD_MONEY":
            return {
                ...state,
                total: state.total + action.payload
            }
        case "REMOVE_MONEY":
            return {
                ...state,
                total: state.total - action.payload
            }
        case "GET_INPUT_VALUE":
            return {
                ...state,
                value: state.value = action.payload
            }
        default:
            return state;
    }
}

export default walletReducer;