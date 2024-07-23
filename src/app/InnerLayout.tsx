import Navigation from '@/components/mainNavigation';

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <div className={`appContent`}>{children}</div>
    </>
  );
}
