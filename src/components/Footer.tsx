import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg font-bold text-yellow-400">
                  ₿
                </span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              DBSCOINS
            </span>
          </div>

          {/* Telegram Handle */}
          <div className="flex items-center space-x-2 rounded-full border border-yellow-400 bg-yellow-400 px-4 py-2">
            <Send className="h-4 w-4 text-black" />
            <span className="text-sm font-medium text-black">@combocoins</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 DBSCOINS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
