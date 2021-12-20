const { DepartmentModel } = include('models/index')

const addDepartment = async ({name, code}) => {
    const newDepartment = await DepartmentModel.create({name, code})
    return newDepartment
}

const getDepartmentList = async () => {
    const departmentList = await DepartmentModel.findAll({attributes: ['id', 'name', 'code']})
    return departmentList
}

const getDepartmentById = async (id) => {
    const department = await DepartmentModel.findOne({where:{id:id}, attributes: ['id', 'name', 'code']})
    return department
}

module.exports = {
    addDepartment,
    getDepartmentList,
    getDepartmentById
}