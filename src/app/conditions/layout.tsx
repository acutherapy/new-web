export default function ConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {children}
        </div>
    );
}
