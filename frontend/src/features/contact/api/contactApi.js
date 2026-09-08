const API_URL = "http://localhost:5000/api";

export const submitContact = async (contactData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();

    if (!response.ok) {
      if (result.errors?.length) {
        const validationMessage = result.errors
          .map((error) => error.msg)
          .join(", ");

        throw new Error(validationMessage);
      }

      throw new Error(
        result.message || "Failed to send message"
      );
    }

    return result;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    }

    throw error;
  }
};