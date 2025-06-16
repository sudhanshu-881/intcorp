const API_BASE = import.meta.env.VITE_API_URL;

export const createProduct = async (product: any, token: string) => {
  const res = await fetch(`${API_BASE}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
};

export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const registerUser = async (user: { email: string; password: string; name: string }) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};

export const loginUser = async (creds: { email: string; password: string }) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creds),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

// Add more API functions as needed
