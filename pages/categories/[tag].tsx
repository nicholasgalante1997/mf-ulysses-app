import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const IndividualCategoryPage: NextPage = () => {
    const { query } = useRouter();
    return (
        <div>
            {query.tag} Category
        </div>
    );
}

export default IndividualCategoryPage;