const { GenderModel } = include('models/user_model')

const addGender = async ({name}) => {
    const newGender = await GenderModel.create({name})
    return newGender
}

module.exports = {
    addGender
}