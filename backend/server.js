import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mock data with availability
const services = [
  { id: 1, title: 'Pipe Repair & Installation', category: 'Plumber', city: 'Karachi', price: 'PKR 1500', rating: 4.8, available: true },
  { id: 2, title: 'Kitchen Sink Fitting', category: 'Plumber', city: 'Lahore', price: 'PKR 1800', rating: 4.7, available: true },
  { id: 3, title: 'Bathroom Leak Fix', category: 'Plumber', city: 'Islamabad', price: 'PKR 2000', rating: 4.9, available: true },
  
  { id: 4, title: 'Electrical Wiring', category: 'Electrician', city: 'Karachi', price: 'PKR 2500', rating: 4.8, available: true },
  { id: 5, title: 'Light Fixture Installation', category: 'Electrician', city: 'Lahore', price: 'PKR 1200', rating: 4.6, available: false },
  { id: 6, title: 'Power Outlet Repair', category: 'Electrician', city: 'Islamabad', price: 'PKR 800', rating: 4.7, available: true },
  
  { id: 7, title: 'Custom Furniture Making', category: 'Carpenter', city: 'Karachi', price: 'PKR 5000', rating: 4.9, available: true },
  { id: 8, title: 'Door & Window Fitting', category: 'Carpenter', city: 'Lahore', price: 'PKR 3000', rating: 4.8, available: true },
  { id: 9, title: 'Shelf Installation', category: 'Carpenter', city: 'Islamabad', price: 'PKR 2000', rating: 4.7, available: false },
  
  { id: 10, title: 'House Deep Cleaning', category: 'Cleaner', city: 'Karachi', price: 'PKR 2500', rating: 4.9, available: true },
  { id: 11, title: 'Office Cleaning', category: 'Cleaner', city: 'Lahore', price: 'PKR 3500', rating: 4.8, available: true },
  { id: 12, title: 'Carpet Cleaning', category: 'Cleaner', city: 'Islamabad', price: 'PKR 1500', rating: 4.7, available: true },
  
  { id: 13, title: 'AC Maintenance & Repair', category: 'Technician', city: 'Karachi', price: 'PKR 2000', rating: 4.8, available: true },
  { id: 14, title: 'Washing Machine Repair', category: 'Technician', city: 'Lahore', price: 'PKR 1500', rating: 4.7, available: true },
  { id: 15, title: 'Refrigerator Service', category: 'Technician', city: 'Islamabad', price: 'PKR 2500', rating: 4.9, available: false },
  
  { id: 16, title: 'Interior Wall Painting', category: 'Painter', city: 'Karachi', price: 'PKR 3000', rating: 4.7, available: true },
  { id: 17, title: 'Exterior Painting', category: 'Painter', city: 'Lahore', price: 'PKR 4000', rating: 4.8, available: true },
  { id: 18, title: 'Decorative Painting', category: 'Painter', city: 'Islamabad', price: 'PKR 5000', rating: 4.9, available: true }
];

const providers = [
  { id: 1, name: 'Ali Raza', category: 'Plumbing', city: 'Karachi', rating: 4.7 },
  { id: 2, name: 'Sana Khan', category: 'Cleaning', city: 'Lahore', rating: 4.8 },
  { id: 3, name: 'Bilal Ahmed', category: 'Electrician', city: 'Islamabad', rating: 4.5 }
];

// Routes
app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/providers', (req, res) => {
  res.json(providers);
});

app.get('/api/info', (req, res) => {
  res.json({ version: '1.0.0', region: 'PK', services: [...new Set(services.map(s => s.category))] });
});

app.post('/api/auth/login', (req, res) => {
  const { email } = req.body || {};
  res.json({ ok: true, message: `Logged in as ${email || 'guest'}` });
});

app.post('/api/auth/signup', (req, res) => {
  const { email } = req.body || {};
  res.json({ ok: true, message: `Signed up as ${email || 'user'}` });
});

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Global error logging to avoid silent crashes
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

// Start server with fallback port on EADDRINUSE
function start(port) {
  const server = app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
      const fallback = Number(port) + 1;
      console.warn(`Port ${port} in use. Trying ${fallback}...`);
      start(fallback);
    } else {
      console.error('Server error:', err);
      throw err;
    }
  });
}

start(PORT);
