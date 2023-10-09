import { format, parse } from 'date-fns';
import { vi } from 'date-fns/locale';

interface FormatDateProps {
  dateString: string;
}
interface FormatTimeProps {
  timeString: string;
}

export const FormatDate: React.FC<FormatDateProps> = ({ dateString }) => {
  // Chuyển chuỗi ngày thành đối tượng Date
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day); // -1 vì tháng trong Date bắt đầu từ 0

  // Định dạng lại ngày theo định dạng mong muốn
  const formattedDate = format(date, "cccc, 'ngày' dd 'tháng' MM, yyyy", { locale: vi });

  return <span>{formattedDate}</span>;
};

export const formatDateFunc = ( dateString: string ) => {
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day); 

  const formattedDate = format(date, "cccc 'ngày' dd 'tháng' MM 'năm' yyyy", { locale: vi });

  return formattedDate
};

export const GetFirstDate: React.FC<FormatDateProps> = ({ dateString }) => {
  const [days, month, year] = dateString.split(":");
  const dates = days.split(";").map(day => {
    const parsedDate = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", new Date());
    return format(parsedDate, "dd/MM/yyyy");
  });
  const firstDate = dates[0];

  return <span>{firstDate}</span>;
};

export const getDates = ( dateString: string ) => {
  const [days, month, year] = dateString.split(":");
  const dates = days.split(";").map(day => {
    const parsedDate = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", new Date());
    return format(parsedDate, "dd/MM/yyyy");
  });

  return dates;
};

export const FormatTime: React.FC<FormatTimeProps> = ({ timeString }) => {
  const formattedTime = timeString.replace(":", "h");

  return <span>{formattedTime}</span>;
};