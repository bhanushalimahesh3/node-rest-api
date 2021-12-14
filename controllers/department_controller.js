const { success, error } = include('helpers/response_helper');
const { addDepartment, getDepartmentList } = include('services/department_service')

const departmentRegister = async function(req, res, next) {
    department = await addDepartment({...req.body})
    res.json(success({"department": department}, "Department registered"))    
}

const departmentList = async function(req, res, next) {
    departments = await getDepartmentList()
    res.json(success({"departments": departments}, "Department list"))    
}

module.exports = {
    departmentRegister,
    departmentList
 };