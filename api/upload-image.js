async function uploadToCloud(buffer) {
  // Provedor 1: x0.at
  try {
    const fd = new FormData();
    fd.append('file', new Blob([buffer], { type: 'image/jpeg' }), 'banner.jpg');
    const res = await fetch('https://x0.at/', {
      method: 'POST',
      body: fd,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const url = (await res.text()).trim();
    if (url.startsWith('http')) return url;
  } catch (err) {
    console.warn('Provedor x0.at falhou, tentando próximo...', err.message);
  }

  // Provedor 2: Catbox
  try {
    const fd = new FormData();
    fd.append('reqtype', 'fileupload');
    fd.append('fileToUpload', new Blob([buffer], { type: 'image/jpeg' }), 'banner.jpg');
    const res = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: fd,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://catbox.moe/'
      }
    });
    const url = (await res.text()).trim();
    if (url.startsWith('http')) return url;
  } catch (err) {
    console.warn('Provedor catbox falhou, tentando próximo...', err.message);
  }

  // Provedor 3: Uguu.se
  try {
    const fd = new FormData();
    fd.append('files[]', new Blob([buffer], { type: 'image/jpeg' }), 'banner.jpg');
    const res = await fetch('https://uguu.se/upload.php', { method: 'POST', body: fd });
    const json = await res.json();
    if (json.success && json.files?.[0]?.url) return json.files[0].url;
  } catch (err) {
    console.warn('Provedor uguu falhou:', err.message);
  }

  throw new Error('Não foi possível hospedar a imagem no momento. Tente novamente em instantes.');
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

    const base64Data = imageBase64.includes('base64,')
      ? imageBase64.split('base64,')[1]
      : imageBase64;
    const buffer = Buffer.from(base64Data, 'base64');

    const fileUrl = await uploadToCloud(buffer);
    res.json({ success: true, url: fileUrl });
  } catch (err) {
    console.error('Erro no upload de imagem:', err);
    res.status(500).json({ error: 'Erro ao hospedar imagem: ' + err.message });
  }
};
