import "./globals.css";

export const metadata = {
    title: "Next.js 14 Starter",
    description:
        "A Next.js 14 starter project built without using create-next-app.",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;