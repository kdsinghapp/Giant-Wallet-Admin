const BaseUrl = import.meta.env.VITE_BaseUrl;

export async function login({ email, password }) {
  try {
    const response = await fetch(`${BaseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = null;
    const text = await response.text();
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      data = {};
    }
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    // Allow login only if role is 'admin'
    if (data?.data?.role === "admin" && data?.data?.token) {
      localStorage.setItem("adminToken", data.data.token);
      return data;
    } else if (data?.data?.role && data?.data?.role !== "admin") {
      return { success: false, message: "Only admin users can log in." };
    }
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
}
