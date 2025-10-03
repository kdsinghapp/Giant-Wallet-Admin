const BaseUrl = import.meta.env.VITE_BaseUrl;

export async function getFoundations() {
  try {
    const token = localStorage.getItem("adminToken");
    const res = await fetch(`${BaseUrl}/admin/foundation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    const text = await res.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      data = {};
    }

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch foundations");
    }

    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
}
