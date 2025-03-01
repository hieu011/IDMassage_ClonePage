import FloatingButtons from "@/components/floating-buttons";

export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <FloatingButtons />
        </div>
    );
}
