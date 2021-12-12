const { DepartmentModel } = include('models/index')

const addDepartment = async ({name, code}) => {
    const newDepartment = await DepartmentModel.create({name, code})
    return newDepartment
}

module.exports = {
    addDepartment
}