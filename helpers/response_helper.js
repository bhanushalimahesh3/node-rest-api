const success = (data={}, message='') => {
    return {
        "status": "success",
        "data": data,
        "message": message
    }

}

const error = (message = '', data={}) => {
    return {
        "status": "error",
        "data": data,
        "message": message
    }
}

module.exports = {
    success,
    error
}