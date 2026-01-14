import { motion } from "framer-motion";

interface NotificationProps {
    text: string;
};

const Notification = ({ text }: NotificationProps) => {
    return (
        <div className="z-20 fixed top-14 right-0 m-4 hidden md:block">
            <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.25 }}
                id="toast-default"
                className="flex items-center w-full max-w-m p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
            >
                <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 rounded-lg dark:text-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="ms-3">{text}</div>
            </motion.div>
        </div>
    );
};

export default Notification;
