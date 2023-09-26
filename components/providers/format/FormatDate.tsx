import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface FormatDateProps {
  dateString: string;
}

const FormatDate: React.FC<FormatDateProps> = ({ dateString }) => {
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

export default FormatDate;
