async function uploadToImgur(base64Data) {
  const clientIds = [
    '546c25a59c58ad7',
    'e1ff1b53c613e51',
    '28eb2e1f1634699'
  ];

  for (const clientId of clientIds) {
    try {
      const res = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          'Authorization': `Client-ID ${clientId}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: base64Data,
          type: 'base64'
        })
      });

      const json = await res.json();
      if (json.success && json.data?.link) {
        // Garantir link direto HTTPS
        return json.data.link.replace('http://', 'https://');
      }
    } catch (err) {
      console.warn(`Imgur com Client-ID ${clientId} falhou:`, err.message);
    }
  }

  throw new Error('Não foi possível hospedar a imagem no momento. Tente novamente.');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { imageBase64 } = req.body || {};
    if (!imageBase64) {
      return res.status(400).json({ error: 'Nenhuma imagem enviada' });
    }

    const cleanBase64 = imageBase64.includes('base64,')
      ? imageBase64.split('base64,')[1]
      : imageBase64;

    const fileUrl = await uploadToImgur(cleanBase64);
    res.json({ success: true, url: fileUrl });
  } catch (err) {
    console.error('Erro no upload de imagem:', err);
    res.status(500).json({ error: 'Erro ao hospedar imagem: ' + err.message });
  }
};
