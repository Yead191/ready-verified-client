import React from "react";
import { Mail, Facebook, Linkedin, Heart } from "lucide-react";

export default function SupportStrip() {
  return (
    <section className="bg-[#E8EFF6] py-12 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h4 className="section-title font-bold  mb-2">We're here to help</h4>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {/* Provide Feedback */}
          <a
            href="/feedback"
            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm  px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span className="font-medium">Provide Feedback</span>
          </a>

          {/* Email */}
          <a
            href="mailto:support@example.com"
            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm  px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-secondary shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm  px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Facebook className="w-5 h-5" />
            <span className="font-medium">Facebook</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-secondary hover:bg-white/20 backdrop-blur-sm  px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* Donate */}
          <a
            href="https://gofundme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2  hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Heart className="w-5 h-5" />
            <span className="font-medium">Donate (GoFundMe)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
