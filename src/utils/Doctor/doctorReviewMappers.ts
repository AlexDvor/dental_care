import { ReviewProps } from '../../interfaces/doctor.types';
import { DoctorReview } from '../../interfaces/doctorReview.types';
import { formatVisitDate } from '../Visit/visitFormatters';

// Converts Firestore doctor reviews into the UI review card shape.
export const mapDoctorReviewsToReviewProps = (
  reviews: DoctorReview[],
): ReviewProps[] =>
  reviews.map(review => ({
    id: review.id,
    name: review.userName,
    avatar: 'https://i.pravatar.cc/100',
    rating: review.rating,
    text: review.text || 'No written comment.',
    date: formatVisitDate(review.createdAt),
  }));

// Calculates the visible doctor rating from all available reviews.
export const getDoctorDisplayRating = (
  reviews: ReviewProps[],
  fallbackRating = 0,
) =>
  reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : fallbackRating;
