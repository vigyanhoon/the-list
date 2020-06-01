const BASE_ADDRESS = 'https://gist.githubusercontent.com/vigyanhoon/';

export default class Api {
    static getUsers() {
        const uri = BASE_ADDRESS + "b2c00daa5dbdc5f0b97ed3d4417af756/raw/e017416eed2bc471b4c3641cefd8a585e3552c2f/countries.json";
        return fetch(uri, {
            method: 'GET'
        });
    }
}