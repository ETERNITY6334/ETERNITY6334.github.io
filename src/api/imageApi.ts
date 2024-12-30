import axios from 'axios';

export async function getImage(prompt: string, model: string) {
  const response = await axios.post(
    'http://58.121.50.83:8080/api/image',
    // 'http://localhost:8080/api/image',
    {
      prompt: prompt,
      model: model
    },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
  return response.data;
}