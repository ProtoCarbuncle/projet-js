import axios from 'axios';

export async function loginUser(username, password) {
  try {
    const response = await axios.post(`http://fauques.freeboxos.fr:3000/login`, { username, password });
    if (response.data.token) {
      saveUserCredentials(response.data.token, username);
      return { status: 'success', data: response.data };
    } else {
      console.error('Login failed with response:', response.data);
      throw new Error('Login failed');
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