import { v4 as uuidv4 } from 'uuid';
const tokenEndPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const roomID = process.env.REACT_APP_ROOM_ID;

import dotenv from 'dotenv';

dotenv.config();

const getToken = async (role) => {
	const userID = uuidv4();

	const response = await fetch(`${tokenEndPoint}api/token`, {
		method: 'POST',
		body: JSON.stringify({
			userID,
			role,
			roomID
		})
	});

	const { token } = await response.json();

	return token;
};

export default getToken;
