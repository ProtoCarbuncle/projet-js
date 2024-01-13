import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://fauques.freeboxos.fr:3000';

export async function registerUser(username, password) {
  const idUser = uuidv4();
 
    const response = await fetch(`${API_URL}/createAcc`, {
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
}
