export default function Footer() {
  return (
    <footer className="py-7 shrink-0 border-t border-border font-mono-brand text-xs text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 flex justify-center items-center">
        <span>© {new Date().getFullYear()} Karthik S Kashyap</span>
      </div>
    </footer>
  );
}
