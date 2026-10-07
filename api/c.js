module.exports = (req, res) => {
  const { n, nome, i, img, c, cidade } = req.query;
  const condoNome = n || nome || 'Condomínio';
  
  let bannerUrl = i || img || 'https://personalfelipemartins.vercel.app/foto-personal.jpg';
  if (bannerUrl && !bannerUrl.startsWith('http')) {
    bannerUrl = `https://personalfelipemartins.vercel.app/${bannerUrl.replace(/^\//, '')}`;
  }

  const pageTitle = `💪 Personal Trainer no ${condoNome} | Felipe Martins`;
  const redirectUrl = `/?condo=${encodeURIComponent(condoNome)}`;

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>

  <!-- Open Graph / WhatsApp Preview Tags -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="&#x200B;" />
  <meta name="description" content="&#x200B;" />
  <meta property="og:image" content="${bannerUrl}" />
  <meta property="og:image:secure_url" content="${bannerUrl}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="800" />
  <meta property="og:site_name" content="Personal Trainer Felipe Martins" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="&#x200B;" />
  <meta name="twitter:image" content="${bannerUrl}" />

  <!-- Redirecionamento instantâneo para o Quiz/LP -->
  <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
  <script>
    window.location.replace('${redirectUrl}');
  </script>
</head>
<body style="background:#020617;color:#94a3b8;font-family:system-ui,-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;padding:20px;text-align:center;">
  <div>
    <div style="font-size:32px;margin-bottom:12px;">💪</div>
    <div style="font-size:16px;font-weight:700;color:#fff;margin-bottom:6px;">Personal Trainer no ${condoNome}</div>
    <div style="font-size:13px;color:#64748b;">Carregando seu teste personalizado...</div>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
};
