export class Storage {
  constructor() {
    this.accessToken = this._get("accessToken");
    this.refreshToken = this._get("refreshToken");
    this.theme = this._get("theme");
  }

  setTokens(accessToken, refreshToken) {
    if (!accessToken && !refreshToken) {
      this._set("accessToken");
      this._set("refreshToken");
    }
    this._set("accessToken", accessToken);
    this._set("refreshToken", refreshToken);
  }

  setTheme(value) {
    if (!value) localStorage.clear("theme");
    this._set("theme", value);
  }

  _set(fieldName, value) {
    this[fieldName] = value;

    if (!value) localStorage.removeItem(fieldName);
    else localStorage.setItem(fieldName, value);
  }

  _get(fieldName) {
    return localStorage.getItem(fieldName) || null;
  }
}
