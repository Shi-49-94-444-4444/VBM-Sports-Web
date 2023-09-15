import { listItems } from '@/app/constants';
import FormatHomePage from '../providers/form/FormatHomePage';
import QuickListContent from './QuickList/QuickListContent';

const QuickList = () => {
    return (
        <>
            <FormatHomePage title="CÁC SÂN GẦN ĐÂY" link="/list_badminton"/>
            <QuickListContent listItem={listItems}/>
        </>
    );
};

export default QuickList;
