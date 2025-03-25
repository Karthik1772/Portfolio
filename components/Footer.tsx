export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border bg-background">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold">Karthik S Kashyap</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}