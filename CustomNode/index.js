const superagent = require('superagent');

const base = 'https://www.breakingbadapi.com/api';

const searchCharacters = async (name) => {
    try {
        const searchURL = `${base}/characters?name=${name}`;
        const response = await superagent.get(searchURL);

        return response.body;
    } catch (error) {
        return error;
    }
};

const getCharacter = async (charId) => {
    try {
        const getURL = `${base}/characters/${charId}`;
        const response = await superagent.get(getURL);

        return response.body;
    } catch (error) {
        return error;
    }
};

module.exports = {
    searchCharacters,
    getCharacter
};
