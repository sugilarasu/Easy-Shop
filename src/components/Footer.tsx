const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-background py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Clone. All rights reserved. Inspired by Flipkart.
        </p>
        <p className="text-xs mt-1">
          This is a demo application for educational purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
