import {
  API_KEY,
  App_Id,
  AUTH_DOMAIN,
  Messaging_SenderId,
  PROJECT_ID,
  Storage_Bucket,
} from '@env';
import { getApps, initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: API_KEY,
  appId: App_Id,
  authDomain: AUTH_DOMAIN,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
  messagingSenderId: Messaging_SenderId,
  projectId: PROJECT_ID,
  storageBucket: Storage_Bucket,
};

let firebaseInitPromise: Promise<unknown> | null = null;

export const initializeFirebaseApp = async () => {
  if (getApps().length > 0) {
    return;
  }

  if (!firebaseInitPromise) {
    // Keep this fallback until native Firebase config files are added.
    firebaseInitPromise = initializeApp(firebaseConfig);
  }

  await firebaseInitPromise;
};

export const getDb = () => getFirestore();
export const getAuthInstance = () => getAuth();
