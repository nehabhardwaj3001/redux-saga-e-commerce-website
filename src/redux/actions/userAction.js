export const USERS_FETCH = 'USERS_FETCH';
export const RECEIVE_USER = "RECEIVE_USER"

export function getUsers() {
	return {
		type: USERS_FETCH,
	}
}

export function receiveUser(data) {
	return {
		type: RECEIVE_USER,
		data,
	}
}
