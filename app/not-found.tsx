import Image from "next/image"

export default function NotFound() {
    return (
        <Image
            src="/images/404.webp"
            alt="404 Page Not Found"
            width={400}
            height={300}
            draggable={false}
            style={{ userSelect: 'none' }}
        />
    )
} 