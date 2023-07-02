import { listItems } from '@/app/constants';
import FormatHomePage from './FormatHomePage';
import QuickListContent from './QuickList/QuickListContent';

const QuickList = () => {
    return (
        <>
            <FormatHomePage title="CÁC SÂN GẦN ĐÂY" />
            <QuickListContent listItem={listItems}/>
        </>
    );
};

export default QuickList;
