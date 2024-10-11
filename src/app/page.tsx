"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe, MessageSquare } from "lucide-react";

export default function Home() {
  const [urlInput, setUrlInput] = useState(""); // Track input value
  const router = useRouter(); // Get router instance

  // Handle the form submission or button click
  const handleSearch = () => {
    if (urlInput.startsWith("https://")) {
      const parsedUrl = urlInput; //.replace("https://", ""); // Remove "https://"
      router.push(`/${parsedUrl}`); // Navigate to the new route
    } else {
      const parsedUrl = urlInput;
      router.push(`/${parsedUrl}`);
      alert(
        "Please enter a valid URL that starts with https:// or ensure route is safe"
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-4 text-white">
      <div className="w-full max-w-3xl rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
        <h1 className="mb-6 text-center text-4xl font-bold">
          AISK - AI Search Kit
        </h1>
        <p className="mb-8 text-center text-xl">
          Explore and question any website with the power of AI
        </p>
        <div className="mb-8 flex items-center justify-center space-x-2">
          <Input
            className="w-full max-w-md bg-white/20 text-white placeholder-white/60"
            placeholder="Enter a website URL"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)} // Update input value
          />
          <Button
            className="bg-white text-purple-600 hover:bg-white/90"
            onClick={handleSearch} // Handle search
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
        <div className="mb-8 text-center">
          <p className="mb-2 text-lg">How it works:</p>
          <ol className="list-inside list-decimal space-y-2">
            <li>Enter a website URL in the search bar</li>
            <li>Click search or press enter</li>
            <li>Ask questions about the website content</li>
          </ol>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            href="/https://google.com"
            className="flex items-center rounded-lg bg-white/20 px-4 py-2 transition-colors hover:bg-white/30"
          >
            <Globe className="mr-2 h-5 w-5" />
            Try an example
          </Link>
          <Link
            href="/about"
            className="flex items-center rounded-lg bg-white/20 px-4 py-2 transition-colors hover:bg-white/30"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Learn more
          </Link>
        </div>
      </div>
    </main>
  );
}
