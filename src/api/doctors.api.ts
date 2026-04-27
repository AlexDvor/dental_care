import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from './firebase';

// 📥 GET all doctors
export const getDoctors = async () => {
  const snapshot = await getDocs(collection(db, 'doctors'));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// 📥 GET doctor by id
export const getDoctorById = async (id: string) => {
  const docRef = doc(db, 'doctors', id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

// 📤 POST doctor
export const createDoctor = async (doctor: any) => {
  const docRef = await addDoc(collection(db, 'doctors'), doctor);
  return docRef.id;
};
