import { useCallback,useEffect, useState } from 'react';

import { getDoctorById } from '../api/doctors.api';
import { DoctorType } from '../interfaces/doctor.types';

export const useDoctorById = (id: string) => {
  const [data, setData] = useState<DoctorType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctor = useCallback(async () => {
    if (!id) {
      setData(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const doctor = await getDoctorById(id);

      if (!doctor) {
        setError('Doctor not found');
        return;
      }

      setData(doctor);
    } catch (err) {
      console.log('🚀 ~ getDoctorById error:', err);
      setError('Failed to load doctor');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDoctor();
  }, [fetchDoctor]);

  return {
    data,
    loading,
    error,
    refetch: fetchDoctor,
  };
};
