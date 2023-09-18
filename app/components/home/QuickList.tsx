import { listItems } from '@/constant';
import QuickListContent from './QuickList/QuickListContent';
import { FormatHomePage } from '../providers';

const QuickList = () => {
    return (
        <>
            <FormatHomePage title="CÁC SÂN GẦN ĐÂY" link="/list_badminton"/>
            <QuickListContent listItem={listItems}/>
        </>
    );
};

export default QuickList;
