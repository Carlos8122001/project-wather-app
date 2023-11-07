export const getFetch = async (api, value) => {
  try {
    const response = await fetch(api + value);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
};
