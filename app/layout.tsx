import type { Metadata } from "next";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Tarun's portfolio",
	description: "A portfolio created and managed by Tarun Jeevan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn('flex min-h-screen flex-col font-sans antialiased',
					geistSans.variable,
					geistMono.variable
				)}
			>
				<Providers>
					<Header />
					<main className="grow">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
