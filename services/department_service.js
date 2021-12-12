const { DepartmentModel } = include('models/user_model')

const addDepartment = async ({name}) => {
    const newDepartment = await DepartmentModel.create({name})
    return newDepartment
}

module.exports = {
    addDepartment
}