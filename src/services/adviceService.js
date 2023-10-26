import axios from "axios";

const BASE_URL = "https://api.adviceslip.com/advice";

// Função assíncrona para buscar conselhos com base em um termo
export async function searchAdviceByTerm(term) {
  try {
    const searchURL = `${BASE_URL}/search/${term}`;
    const response = await axios.get(searchURL);

    if (response.status === 200 && response.data && response.data.slips) {
      return response.data.slips;
    } else {
      throw new Error("No advice found for the specified term.");
    }
  } catch (error) {
    console.error(`Error when seeking advice: ${error.message}`);
    throw error;
  }
}
