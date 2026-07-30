export default function Footer() {
  return (
    <footer className="py-7 border-t border-border font-mono-brand text-xs text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Karthik S Kashyap</span>
        <span>portfolio v2.0.0 · Bengaluru, IN</span>
      </div>
    </footer>
  );
}
