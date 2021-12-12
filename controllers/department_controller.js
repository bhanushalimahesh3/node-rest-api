const { success, error } = include('helpers/response_helper');
const { addDepartment } = include('services/department_service')

const departmentRegister = async function(req, res, next) {
    department = await addDepartment({...req.body})
    res.json(success({"department": department}, "Department registered"))    
}

module.exports.departmentRegister = departmentRegister;