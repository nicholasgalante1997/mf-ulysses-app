import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import FederatedWhitePage from '../../src/consumables/literature/white-page';

const ArticlePage: NextPage = () => {
    const { query: { article } } = useRouter();
    const safeStr = `./${article}`
    return (
        <FederatedWhitePage articleKey={safeStr} />
    );
}

export default ArticlePage;