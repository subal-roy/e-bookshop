export const login = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const responseData = await response.json();

      if (response.ok) {
        return { success: true, data: responseData };
      } else {
        return { success: false, errors: responseData.errors || { general: responseData.message || "An error occurred. Please try again." } };
      }
    } else {
      const errorText = await response.text();
      console.error("Expected JSON, received HTML:", errorText);
      return { success: false, errors: { general: "An unexpected error occurred. Please try again." } };
    }
  } catch (error) {
    console.error(error);
    return { success: false, errors: { general: "Network error, please try again later." } };
  }
};


// registerApi
export const register = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      }),
    });

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const responseData = await response.json();

      if (response.ok) {
        return { success: true, data: responseData };
      } else {
        return {
          success: false,
          errors: responseData.errors || {
            general: responseData.message || "An error occurred. Please try again.",
          },
        };
      }
    } else {
      const errorText = await response.text();
      console.error("Expected JSON, received HTML:", errorText);
      return {
        success: false,
        errors: { general: "An unexpected error occurred. Please try again." },
      };
    }
  } catch (error) {
    console.error(error);
    return { success: false, errors: { general: "Network error, please try again later." } };
  }
};

