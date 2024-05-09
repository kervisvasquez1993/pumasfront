export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/txt');
    res.write(`User-agent: *\nDisallow:`);
    res.end();
  }