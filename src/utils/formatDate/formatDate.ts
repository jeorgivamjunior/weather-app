import * as datefns from 'date-fns';

export const formatDate = (date: string, format = 'dd MMM yyyy'): string => datefns.format(new Date(date), format);
