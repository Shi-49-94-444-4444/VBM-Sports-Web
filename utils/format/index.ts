import { FormatDateProps, FormatTimeProps } from '@/types/format';
import { format, parse } from 'date-fns';
import { vi } from 'date-fns/locale';

export const FormatDate: React.FC<FormatDateProps> = ({ dateString }) => {
  // Chuyển chuỗi ngày thành đối tượng Date
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day); // -1 vì tháng trong Date bắt đầu từ 0

  // Định dạng lại ngày theo định dạng mong muốn
  const formattedDate = format(date, "cccc, 'ngày' dd 'tháng' MM, yyyy", { locale: vi });

  return formattedDate
};

export function formatDateFunc(dateString: string): string {
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day);

  const formattedDate = format(date, "cccc 'ngày' dd 'tháng' MM 'năm' yyyy", { locale: vi });

  return formattedDate;
};

export function getDates(dateString: string): string[] {
  const [days, months, years] = dateString.split(":").map(part => part.split(";"));
  const dates = [];

  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    const month = months[i % months.length];
    const year = years[i % years.length];
    const parsedDate = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", new Date());
    dates.push(format(parsedDate, "dd/MM/yyyy"));
  }

  return dates;
};

export const GetFirstDate: React.FC<FormatDateProps> = ({ dateString }) => {
  const [days, months, years] = dateString.split(":").map(part => part.split(";"));
  const dates = [];

  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    const month = months[i % months.length];
    const year = years[i % years.length];
    const parsedDate = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", new Date());
    dates.push(format(parsedDate, "dd/MM/yyyy"));
  }

  const firstDate = dates[0];

  return firstDate;
};


export const FormatTime: React.FC<FormatTimeProps> = ({ timeString }) => {
  const formattedTime = timeString.replace(":", "h");

  return formattedTime
};

export function formatMoney(data: number): string {
  const money = data.toLocaleString("vi-VN")
  return money
}