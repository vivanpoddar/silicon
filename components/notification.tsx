import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface NotificationProps {
    text: string;
};

const Notification = ({ text }: NotificationProps) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="z-20 fixed top-14 right-0 m-4 hidden md:block">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        id="toast-default"
                        className="flex items-center gap-3 w-full max-w-md p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
                    >
                        <div className="flex-1">{text}</div>
                        <button
                            type="button"
                            onClick={() => setIsVisible(false)}
                            className="inline-flex items-center justify-center w-8 h-8 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                            aria-label="Close notification"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Notification;
