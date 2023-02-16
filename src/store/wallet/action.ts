export const addMoneyAction = (total: number) => {
    return {
        type: "ADD_MONEY",
        payload: total
    }
}

export const removeMoneyAction = (total: number) => {
    return {
        type: "REMOVE_MONEY",
        payload: total
    }
}