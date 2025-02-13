import {motion} from 'framer-motion';
import Link from 'next/link';

interface LinkButtonProps {
    href: string;
    content: string;
    className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, content, className }) => {
    return (
        <Link className={'text-gray-400 inline-flex border rounded border-gray-400 pr-3 pl-2 pt-1 pb-1'} href={href}>{content}
            <motion.span
                animate={{ x: 5 }}
                transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.5
                }}
                style={{ marginLeft: '0.25rem' }}
            >
                &rarr;
            </motion.span>
        </Link>
    )
}

export default LinkButton;