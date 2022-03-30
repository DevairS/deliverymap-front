import { format } from 'date-fns';

export const formatDate = (date: string, type: string): string => {
  return format(new Date(date), type);
};
