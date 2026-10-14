import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-18 h-32 flex items-center justify-center">
      <div className="text-muted-foreground text-center text-sm space-y-1">
        <p>
          Designed & Developed by{" "}
          <Link
            href={"/login"}
            className="underline hover:text-black dark:hover:text-white underline-offset-2"
          >
            Abhinav Kumar
          </Link>
        </p>
        <p>@{new Date().getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
