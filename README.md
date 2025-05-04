# Virtual Pet Adoption Center

A React application that allows users to browse, filter, adopt, edit, and delete virtual pets.

## Features

- Browse a collection of virtual pets
- Filter pets by mood (Happy, Excited, Sad)
- View pet details including images, type, age, and personality
- Adopt pets
- Edit pet information
- Delete pets
- Responsive design for all device sizes

## Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/virtual-pet-adoption-center.git
cd virtual-pet-adoption-center
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
/frontend
  ├── public/         // Static assets (e.g., images)
  ├── src/
  │     ├── App.js    // Main component
  │     ├── index.js  // Entry point
  │     ├── /components
  │     │     ├── PetList.js       // Displays list of pets
  │     │     ├── PetCard.js       // Individual pet card
  │     │     ├── AddPetForm.js    // Form to add a new pet
  │     │     └── FilterBar.js     // Filters pets by mood
  │     ├── /pages
  │     │     └── HomePage.js      // Main page
  │     ├── /services
  │     │     └── api.js           // API calls
  │     ├── /styles
  │     │     └── global.css       // Global styles
  │     └── /utils
  │           └── helpers.js       // Helper functions
```

## Technologies Used

- React
- CSS Modules
- JavaScript (ES6+)

## License

MIT
