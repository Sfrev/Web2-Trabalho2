export async function login(email, password) {
  const response = await fetch(`localhost:5000/auth/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response;
}