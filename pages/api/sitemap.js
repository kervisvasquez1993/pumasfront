export default function handler(req, res) {
    const routes = [
      '/es/inicio',
      '/es/nosotros',
      '/es/centro-de-rescate',
      '/es/santuario',
      '/es/programas',
      '/es/apoyanos',
      '/es/donations',
      '/es/contact',
      '/en/home',
      '/en/history',
      '/en/rescue-center',
      '/en/sanctuary',
      '/en/programs',
      '/en/blog',
      '/en/support-us',
      '/en/donations',
      '/en/contact',
    ];
  
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    routes.forEach(route => {
      sitemap += `
        <url>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}${route}</loc>
          <lastmod>${formattedDate}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`;
    });
    sitemap += `</urlset>`;
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  }