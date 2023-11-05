const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4231af7d47ced857ab3a126c91171b07`;
const apiLocal = import.meta.env.VITE_API_LOCAL

export const getFetch = async () => {
 try {
  const response = await fetch(apiLocal);
  const data = await response.json();
  return data;
 } catch (error) {
  console.log(error)
 }
};
