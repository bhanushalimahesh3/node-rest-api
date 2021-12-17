const { getBaseURL } = include("helpers/env_helper");

const imgBaseUrl = () => {
    const baseURL = getBaseURL();
    return `${baseURL}/img/`;
}

module.exports = {
    imgBaseUrl
}