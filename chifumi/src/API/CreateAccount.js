import { v4 as uuidv4 } from 'uuid';

export async function registerUser(username, password) {
  const idUser = uuidv4();
 
  const response = await fetch('http://fauques.freeboxos.fr:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_: idUser, username, password }),
  });
}
