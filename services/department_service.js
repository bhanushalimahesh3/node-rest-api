const { DepartmentModel } = include('models/index')

const addDepartment = async ({name, code}) => {
    const newDepartment = await DepartmentModel.create({name, code})
    return newDepartment
}

const getDepartmentList = async () => {
    const departmentList = await DepartmentModel.findAll({attributes: ['id', 'name', 'code']})
    return departmentList
}

module.exports = {
    addDepartment,
    getDepartmentList
}