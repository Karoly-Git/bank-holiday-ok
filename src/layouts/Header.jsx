import { motion } from "framer-motion";

export default function Header() {
    return (
        <header>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Bank Holidays
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                United Kingdom
            </motion.h2>
        </header>
    )
}
