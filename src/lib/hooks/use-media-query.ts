import { BREAKPOINTS } from '../constants';
import { useEffect, useState } from "react";

export interface Dimensions {
    width: number;
    height: number;
}

export type Device = "mobile" | "tablet" | "desktop";

export function useMediaQuery() {
    const { sm, lg } = BREAKPOINTS;
    const [device, setDevice] = useState<Device | null>(null);
    const [dimensions, setDimensions] = useState<Dimensions | null>(null);

    useEffect(() => {
        const checkDevice = () => {
            if (window.matchMedia(`(max-width: ${sm}px)`).matches) {
                setDevice("mobile");
            } else if (window.matchMedia(`(min-width: ${sm}px) and (max-width: ${lg}px)`).matches) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
            }
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        // Initial detection
        checkDevice();

        // Listener for windows resize
        window.addEventListener("resize", checkDevice);

        // Cleanup listener
        return () => {
            window.removeEventListener("resize", checkDevice);
        };
    }, []);

    return {
        device,
        width: dimensions?.width,
        height: dimensions?.height,
        isMobile: device === "mobile",
        isTablet: device === "tablet",
        isDesktop: device === "desktop",
    };
}