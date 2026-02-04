import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();

    // Scroll al inicio cada vez que cambia la ruta
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div
            key={location.pathname}
            className="animate-fade-in w-full min-h-screen"
        >
            {children}
        </div>
    );
}
