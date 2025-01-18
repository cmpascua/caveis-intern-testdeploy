import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

// export const createIsolate = async (accessToken, values) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };

//     const response = await axios.post(
//       `${backendUrl}/isolate/create`,
//       values,
//       config
//     );
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const createIsolate = async (accessToken, values) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    console.log("Sending data to server:", values);

    const response = await axios.post(
      `${backendUrl}/isolate/create`,
      values,
      config
    );

    const data = response.data;
    
    // Check if the response includes a redirect URL
    if (data.redirectUrl) {
      window.location.href = data.redirectUrl;
    }

    return data;
  } catch (error) {
    console.error("Error in createIsolate:", error.response ? error.response.data : error.message);
    if (error.response && error.response.data) {
      console.error("Server error details:", error.response.data);
    }
    throw error;
  }
};

// export const createIsolate = async (accessToken, values) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };

//     const response = await axios.post(
//       `${backendUrl}/isolate/create`,
//       values,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const createMetadata = async (type, accessToken, values) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await axios.post(
      `${backendUrl}/${type}/create`,
      values,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
