const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

export async function ollamaGenerate(prompt) {
  const payload = {
    model: 'llama2',
    prompt: prompt,
    stream: false
  };

  try {
    const response = await fetch(OLLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error communicating with Ollama API:', error);
    return null;
  }
}