const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashedPassword = async (plainPassword) => {
    const hashed = await bcrypt.hash(plainPassword, saltRounds)
    console.log(hashed, "hashed password");
    return hashed;
}

const comparePassword = async (plainPassword, hashedPassword) => {
    const verified = await bcrypt.compare(plainPassword, hashedPassword);
    console.log(verified, "verified password");
    return verified;
}

module.exports = {
    hashedPassword,
    comparePassword
}