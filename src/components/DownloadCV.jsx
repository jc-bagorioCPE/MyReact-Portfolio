import React from "react";
import { Button } from "./ui/button";

export default function DownloadPage() {

  return (
    <div className="flex items-center justify-center ">
        <Button>
          <a
            href="MYCV.pdf"
            download="MYCV.pdf"
            className="text-white hover:text-[#4169E1] transition duration-300"
          >
            📄 Download My CV
          </a>
        </Button>
    </div>
  );
}
