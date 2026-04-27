import {
  API_KEY,
  App_Id,
  AUTH_DOMAIN,
  Measurement_Id,
  Messaging_SenderId,
  PROJECT_ID,
  Storage_Bucket,
} from '@env';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
