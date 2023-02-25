export class Api {
    constructor(options) {
        this._options = options
        this._url = this._options.baseUrl
    }
    loadingData(category, id) {
        return fetch('https://rickandmortyapi.com/api/' + `${category}/` + `${id}`)
            .then(res => this._handleError(res))
    }
    _handleError(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис 
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}