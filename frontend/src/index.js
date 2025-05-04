import { AppRegistry } from 'react-native';
import App from './App';

// Register the app
AppRegistry.registerComponent('PetAdoptionCenter', () => App);

// For web version (if needed)
if (typeof document !== 'undefined') {
  const rootTag = document.getElementById('root') || document.getElementById('app');
  if (rootTag) {
    AppRegistry.runApplication('PetAdoptionCenter', { rootTag });
  }
}