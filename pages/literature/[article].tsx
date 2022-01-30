import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const ArticlePage: NextPage = () => {
    const { query } = useRouter();
    return (
        <div>
            {query.article} Article Page
        </div>
    );
}

export default ArticlePage;