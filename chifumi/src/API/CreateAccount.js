import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://fauques.freeboxos.fr:3000/createAccount';

export async function registerUser(username, password) {
  const idUser = uuidv4();
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_: idUser, username, password }),
    });
    const data = await response.json();
    if (data.success) {
      return { status: 'success', data };
    } else {
      throw new Error('Erreur lors de la création du compte');
    }
  } catch (error) {
    console.error('Erreur lors de la création du compte:', error);
    return { status: 'Error', message: error.message };
  }
}
