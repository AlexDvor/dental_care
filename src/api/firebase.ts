import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  Storage_Bucket,
  Messaging_SenderId,
  App_Id,
  Measurement_Id,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: Storage_Bucket,
  messagingSenderId: Messaging_SenderId,
  appId: App_Id,
  measurementId: Measurement_Id,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
