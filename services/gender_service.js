const { GenderModel } = include('models/index')

const addGender = async ({name, code}) => {
    const newGender = await GenderModel.create({name, code})
    return newGender
}

const getGenderList = async () => {
    const genders = await GenderModel.findAll({attributes: ['id', 'name', 'code']})
    return genders
}

module.exports = {
    addGender,
    getGenderList
}