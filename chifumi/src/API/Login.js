import axios from 'axios';

const API_URL = 'http://fauques.freeboxos.fr:3000';

export async function loginUser(username, password) {
  try {
    const response = await axios.post(`${API_URL}/Login`, { username, password });
    if (response.data.token) {
      saveUserCredentials(response.data.token, username);
      return { status: 'success', data: response.data };
    } else {
      console.error('Login failed with response:', response.data);
      throw new Error('Login failed: Token not present in the response');
    }
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error);
    return { status: 'error', message: error.message };
  }
}

function saveUserCredentials(token, username) {
  localStorage.setItem('userToken', token);
  localStorage.setItem('username', username);
}