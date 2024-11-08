export const login = async (formData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
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

      if (response.ok) { console.log("responseData:" . responseData);
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
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/register`, {
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


// sendResetPasswordLink
export const sendResetPasswordLink = async (formData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reset-password-link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
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

export const resetPassword  = async (formData) => {

  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        token: formData.token
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
}
