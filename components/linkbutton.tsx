import {motion} from 'framer-motion';
import Link from 'next/link';

interface LinkButtonProps {
    href: string;
    content: string;
    className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, content, className = '' }) => {
    return (
        <Link 
            className={`text-gray-400 inline-flex items-center justify-center border rounded border-gray-400 px-2 pr-3 py-1 text-sm sm:text-base hover:bg-gray-400 hover:text-black transition-all duration-300 w-full sm:w-auto text-center ${className}`} 
            href={href}
        >
            <span className="truncate">{content}</span>
            <motion.span
                animate={{ x: 5 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 0.5
                }}
                className="ml-2 flex-shrink-0"
            >
                &rarr;
            </motion.span>
        </Link>
    )
}

export default LinkButton;