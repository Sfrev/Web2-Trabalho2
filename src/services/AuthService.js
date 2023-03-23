export async function login(credentials) {
  const response = await fetch(`http://localhost:5000/auth/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response;
}

export async function getName(email) {
  const response = await fetch(`http://localhost:5000/auth/list?email=${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.users[0].name;
}