const { success, error } = include('helpers/response_helper');
const { addGender, getGenderList } = include('services/gender_service')

const genderRegister = async function(req, res, next) {
    gender = await addGender({...req.body})
    res.json(success({"gender": gender}, "Gender registered"))    
}

const genderList = async function(req, res, next) {
    genders = await getGenderList()
    res.json(success({"genders": genders}, "Gender list"))    
}

module.exports = {
    genderRegister,
    genderList
};