"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationWrapperProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animationType?: 'fadeUp' | 'scale' | 'slideRight' | 'slideLeft';
}

export default function AnimationWrapper({
    children,
    delay = 0,
    className = "",
    animationType = 'fadeUp'
}: AnimationWrapperProps) {

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        slideRight: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            variants={variants[animationType]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
