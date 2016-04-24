import Ember from 'ember';
const { resolve, reject } = Ember.RSVP;

export function jsonRequestOptions(method, data) {
  return {
    method,
    headers: {
      Accept: `application/json`,
      'Content-Type': `application/json`,
    },
    body: JSON.stringify(data),
  };
}

export function parseJson(res) {
  return res.json();
}
