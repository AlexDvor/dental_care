import { useEffect, useState } from 'react';

import { getDoctors } from '../api/doctors.api';
import { Doctor } from '../interfaces/doctor.types';

export const useDoctors = () => {
  const [data, setData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      setError(null);

      const doctors = await getDoctors();
      setData(doctors as Doctor[]);
    } catch (err) {
      console.log('🚀 ~ err:', err);
      setError('Failed to load doctors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchDoctors,
  };
};
