import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-white">
              DBSCOINS
            </span>
          </div>

          {/* Telegram Handle */}
          <a href="https://t.me/combocoins" target="_blank">
            <button className="flex items-center space-x-2 rounded-full border border-yellow-400 bg-yellow-400 px-4 py-2">
              <Send className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black">
                @DBSCOINS
              </span>
            </button>
          </a>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 DBSCOINS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
