export interface BookConsultationPayload {
  userId: number;               // user yang booking
  therapistUserId: number;      // therapist tujuan
  childName: string;
  childAge: number;
  childSex: string;
  date: string;                 // "2025-01-12"
  timeSlot: string;
  isPaid: boolean;
}