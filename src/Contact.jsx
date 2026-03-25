import { MdOutlineAttachEmail } from "react-icons/md";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <motion.div
            className="flex justify-center w-full h-fit px-6 md:px-20 py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
        >
            <a
                href="mailto:hutchinson.turner@gmail.com"
                className="flex flex-row gap-3 items-center px-7 py-4 font-unbounded text-xl md:text-2xl lg:text-3xl text-cream bg-card border border-asphalt rounded-xl hover:border-accent-orange/60 hover:text-accent-orange transition duration-200 ease-out"
            >
                Send me an email
                <MdOutlineAttachEmail className="size-8 md:size-10 shrink-0"/>
            </a>
        </motion.div>
    )
}