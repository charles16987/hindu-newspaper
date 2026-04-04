import { Send } from "lucide-react";

const TELEGRAM_LINK = "https://t.me/+btxVfv2w8sY1MTM9";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">The Hindu PDF Daily</h2>
            <p className="max-w-xs">Your reliable source for daily newspaper PDFs on Telegram.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Join Telegram Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm mb-4">
            Keywords: The Hindu newspaper PDF download, free e-paper, daily newspaper Telegram channel, UPSC preparation material, daily news PDF.
          </p>
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} The Hindu PDF Daily. Not affiliated with The Hindu Group. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
