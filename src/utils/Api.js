class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _isResOk(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfoApi() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
    })
      .then(res => this._isResOk(res))
  }

  getCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    })
      .then(res => this._isResOk(res))
  }

  patchProfile(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    })
      .then(res => this._isResOk(res))
  }

  postCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then(res => this._isResOk(res))
  };

  setAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => this._isResOk(res))
  };

  likeCard(_id, isLiked) {
    return fetch(`${this._baseUrl}cards/${_id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers
    })
    .then((res) => this._isResOk(res))
  }

  deleteCardApi(_id) {
    return fetch(`${this._baseUrl}cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._isResOk(res))
  }

  addCardLike(_id) {
    return fetch(`${this._baseUrl}cards/${_id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(res => this._isResOk(res))
  }

  removeCardLike(_id) {
    return fetch(`${this._baseUrl}cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => this._isResOk(res))
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: 'c1a078e3-d64c-4d67-b98e-d25e1a2a1b3f',
    'Content-Type': 'application/json'
  }
});