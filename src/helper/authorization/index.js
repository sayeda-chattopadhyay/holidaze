import { load } from "../../storage";

export function header() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: header(),
  });
}
