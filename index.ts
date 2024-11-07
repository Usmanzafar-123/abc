import express, { Request, Response } from 'express';  // Import types
import path from 'path';

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to render home.html with proper types for req and res
app.get('/', (req: Request, res: Response) => {  // Explicitly define types for req and res
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
