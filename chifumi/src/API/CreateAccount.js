import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export async function registerUser(username, password) {
  const idUser = uuidv4();
  try {
    const response = await axios.post(`http://fauques.freeboxos.fr:3000/register`, { id_: idUser, username, password });
    if (response.data.success) {
      return { status: 'success', data: response.data };
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    return { status: 'error', message: error.message };
  }
}
