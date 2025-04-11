# Frontend Project

This is the frontend part of the Node.js application for the GLSI 4 course.

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/your-repo/frontend.git
  ```
2. Navigate to the project directory:
  ```bash
  cd frontend
  ```
3. Install dependencies:
  ```bash
  npm install
  ```

## Usage

1. Start the development server:
  ```bash
  npm run dev
  ```
2. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.

## Folder Structure

```
frontend/
├── public/         # Static files
├── src/            # Source code
│   ├── components/ # Reusable components
│   ├── screens/    # Application pages
│   ├── hooks/      # CSS/SCSS files
|   |── types/      # types for components & api req/res ...
|   |── api/        # api related calls & helpers
|   |── navigation/ # routes and navigation layouts
│   └── App.js      # Main app component
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## License

This project is licensed under the [MIT License](LICENSE).