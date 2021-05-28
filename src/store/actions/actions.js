export const setBuyValue = (value) => {
    return {
        type: 'BUY',
        payload: value
    }
}
export const deleteBuyValue = (value) => {
    return {
        type: 'DELETE',
        payload: value
    }
}