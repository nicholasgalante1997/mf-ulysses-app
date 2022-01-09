import Link from 'next/link';
export default Link;
/**
 * Learned a lot from trying to do this
 * Nextjs components expect certain values from process
 * that don't exist in client side projects (non-next mf apps)
 * basically you can't expose a Link from the host to a federated remote navbar
 */