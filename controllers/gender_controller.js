const { success, error } = include('helpers/response_helper');
const { addGender } = include('services/gender_service')

const genderRegister = async function(req, res, next) {
    gender = await addGender({...req.body})
    res.json(success({"gender": gender}, "Gender registered"))    
}

module.exports.genderRegister = genderRegister;