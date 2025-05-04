# Pet Adoption Center

A React Native application for a virtual pet adoption center where users can browse, filter, adopt, add, edit, and delete pets.

![Pet Adoption Center Screenshot](https://via.placeholder.com/800x400?text=Pet+Adoption+Center+App)

## Features

- Browse a list of pets available for adoption
- Filter pets by mood (Happy, Excited, Sad)
- View detailed information about each pet
- Browse through multiple images for each pet
- Add new pets to the adoption center
- Edit existing pet information
- Delete pets from the list
- Mark pets as adopted
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or newer)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- For iOS development:
  - macOS
  - Xcode (from the App Store)
  - CocoaPods (`sudo gem install cocoapods`)
- For Android development:
  - [Android Studio](https://developer.android.com/studio)
  - Android SDK
  - Java Development Kit (JDK)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pet-adoption-center.git
   cd pet-adoption-center
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you use Yarn
   yarn install
   ```

3. For iOS development, install CocoaPods dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the Application

### Option 1: Using Expo (Recommended for beginners)

1. Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   # or
   yarn global add expo-cli
   ```

2. Start the Expo development server:
   ```bash
   expo start
   ```

3. Run on a device or simulator:
   - Scan the QR code with the Expo Go app on your iOS or Android device
   - Press 'a' in the terminal to open on an Android emulator
   - Press 'i' in the terminal to open on an iOS simulator

### Option 2: Using React Native CLI

1. Start the Metro bundler:
   ```bash
   npx react-native start
   ```

2. In a new terminal, run the application:

   For Android:
   ```bash
   npx react-native run-android
   ```

   For iOS:
   ```bash
   npx react-native run-ios
   ```

## Project Structure

```
/frontend
├── public/         # Static assets
├── src/
│     ├── App.js    # Main component
│     ├── index.js  # Entry point
│     ├── /components
│     │     ├── PetList.js       # Displays list of pets
│     │     ├── PetCard.js       # Individual pet card
│     │     ├── AddPetForm.js    # Form to add a new pet
│     │     ├── FilterBar.js     # Filters pets by mood
│     │     ├── EditPetModal.jsx # Modal for editing pets
│     │     ├── ImageCarousel.jsx # Image carousel component
│     │     ├── MoodBadge.jsx    # Badge showing pet mood
│     │     └── IconButton.jsx   # Reusable icon button
│     ├── /pages
│     │     └── HomePage.js      # Main page
│     ├── /services
│     │     └── api.js           # API calls (stub)
│     ├── /styles
│     │     ├── global.js        # Global style constants
│     │     ├── global.css       # Global CSS styles
│     │     └── theme.js         # Theme configuration
│     └── /utils
│           ├── helpers.js       # Helper functions
│           └── styleUtils.js    # Style utility functions
```

## Customization

### Adding New Pets

To add new pets to the initial list, edit the `initialPets` array in `frontend/src/utils/helpers.js`.

### Modifying Styles

- Global style constants are defined in `frontend/src/styles/global.js`
- CSS styles for web are in `frontend/src/styles/global.css`
- Theme configuration is in `frontend/src/styles/theme.js`
- Style utility functions are in `frontend/src/utils/styleUtils.js`

## Troubleshooting

### Common Issues

1. **Metro bundler fails to start**
   - Try clearing the cache: `npx react-native start --reset-cache`

2. **iOS build fails**
   - Make sure CocoaPods is installed and dependencies are up to date:
     ```bash
     cd ios && pod install && cd ..
     ```

3. **Android build fails**
   - Check that your Android SDK is properly configured
   - Make sure you have the right version of Java installed

4. **Dependency issues**
   - Try removing node_modules and reinstalling:
     ```bash
     rm -rf node_modules
     npm install
     ```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Pet images from [Pexels](https://www.pexels.com/)
- Icons and design inspiration from various sources
- Built with React Native and love ❤️
