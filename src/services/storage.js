export class Storage {
  constructor() {
    this.accessToken = this._get("accessToken");
    this.refreshToken = this._get("refreshToken");
  }

  setTokens(accessToken, refreshToken) {
    this._set("accessToken", accessToken);
    this._set("refreshToken", refreshToken);
  }

  _set(fieldName, value) {
    this[fieldName] = value;
    localStorage.setItem(fieldName, value);
  }

  _get(fieldName) {
    return localStorage.getItem(fieldName) || null;
  }
}
