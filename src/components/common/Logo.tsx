import logoUrl from "../../assets/logo-cyan.svg";
import { siteConfig } from "../../config/siteConfig";

type LogoProps = {
    width?: number | string;
    height?: number | string;
    className?: string;
    alt?: string;
};

export default function Logo({ width = 32, height = 32, className, alt }: LogoProps) {
    const numericWidth = typeof width === "number" ? width : undefined;
    const numericHeight = typeof height === "number" ? height : undefined;

    const styleWidth = typeof width === "string" ? width : undefined;
    const styleHeight = typeof height === "string" ? height : undefined;

    return (
        <img
            src={logoUrl}
            width={numericWidth}
            height={numericHeight}
            style={{ width: styleWidth, height: styleHeight }}
            className={className}
            alt={alt ?? `${siteConfig.businessName} logo`}
        />
    );
}


