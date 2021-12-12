const { GenderModel } = include('models/index')

const addGender = async ({name, code}) => {
    const newGender = await GenderModel.create({name, code})
    return newGender
}

module.exports = {
    addGender
}