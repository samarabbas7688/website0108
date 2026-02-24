"use client";

import React, { useState, useEffect } from 'react';

export default function DareArqamHDEdition() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-green-500/40 overflow-x-hidden font-sans">
      
      {/* --- RGB NEON NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl px-6">
        <div className="max-w-7xl mx-auto h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-black text-black shadow-[0_0_20px_#22c55e]">DA</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase">Dar-e-Arqam</span>
              <span className="text-[8px] tracking-[0.4em] text-gray-500 font-bold">Bhowana Campus</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#home" className="hover:text-green-400 transition-all">Home</a>
            <a href="#leadership" className="hover:text-green-400 transition-all">Leadership</a>
            <a href="#contact" className="px-6 py-2 border border-green-500/50 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)]">Contact</a>
          </div>
        </div>
        {/* --- RGB FLOW LINE --- */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 via-yellow-400 via-pink-500 to-transparent animate-pulse"></div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              Aminpur Road • Bhowana
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter">
              ILM AUR <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-yellow-300 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                KIRDAR.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
              Director Iqbal Sahab ke khwab aur Ali Abbas Sahab ki mehnat. Jahan taleem Iqbal ke falsafay ke mutabiq di jati hai.
            </p>
            <button className="px-12 py-5 bg-green-500 text-black font-black rounded-full shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-110 transition-all duration-300 text-lg uppercase tracking-widest">
              Enroll Now
            </button>
          </div>

          {/* HD NEON CIRCLE (IQBAL TRIBUTE) */}
          <div className="flex-1 relative">
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto group">
              {/* RGB Rotating Rings */}
              <div className="absolute inset-0 border-[3px] border-green-500/40 rounded-full animate-[spin_8s_linear_infinite] shadow-[0_0_50px_rgba(34,197,94,0.2)]"></div>
              <div className="absolute inset-4 border-[2px] border-yellow-400/30 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
              <div className="absolute inset-2 flex items-center justify-center overflow-hidden rounded-full bg-[#0a0a0a] border-2 border-white/5 shadow-inner">
                 <div className="text-center">
                    <p className="text-yellow-400 font-mono text-sm tracking-[0.5em] mb-2 uppercase">Visionary</p>
                    <h2 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">TALEEM<br/><span className="text-green-500">IQBAL</span></h2>
                    <p className="text-gray-500 mt-4 font-bold tracking-[0.3em] uppercase text-xs">Bhowana Campus</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HD GALLERY & LEADERSHIP --- */}
      <section id="leadership" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-4 italic">ILLUMINATED <span className="text-green-500">LEADERSHIP</span></h2>
              <div className="h-[4px] w-40 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Director Card */}
            <div className="md:col-span-4 p-12 rounded-[45px] bg-[#111] border border-white/5 hover:border-yellow-500/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[80px] group-hover:bg-yellow-500/20 transition-all"></div>
              <div className="w-20 h-20 bg-yellow-500/10 border border-yellow-500/30 rounded-3xl flex items-center justify-center text-yellow-500 text-3xl font-black mb-10 shadow-lg">IS</div>
              <h3 className="text-3xl font-black mb-2">Iqbal Sahab</h3>
              <p className="text-yellow-500 text-xs font-black tracking-[0.4em] uppercase mb-6 italic border-b border-yellow-500/20 pb-2 inline-block">Director / Founder</p>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">"Khudi ko kar buland itna..." Iqbal Sahab ka vision hi is idaray ki bunyaad hai.</p>
            </div>

            {/* HD CAMPUS IMAGE (image.png) */}
            <div className="md:col-span-8 rounded-[45px] overflow-hidden border border-white/10 group relative h-[450px] shadow-2xl">
               <img 
                 src="/image.png" 
                 alt="Dar-e-Arqam Bhowana Campus HD" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-110"
                 onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000"; }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
               <div className="absolute bottom-10 left-10">
                  <div className="px-4 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-[10px] font-black tracking-widest uppercase mb-2">Campus Overview</div>
                  <h4 className="text-3xl font-black text-white tracking-tighter uppercase">Aminpur Road Excellence</h4>
               </div>
            </div>

            {/* Vice Principal Qari Zafar Card */}
            <div className="md:col-span-6 p-12 rounded-[45px] bg-gradient-to-br from-[#0d0d0d] to-[#151515] border border-white/5 hover:border-green-500/50 transition-all duration-500 shadow-xl">
              <div className="flex items-center gap-8 mb-10">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-3xl flex items-center justify-center text-green-500 text-3xl font-black shadow-[0_0_20px_rgba(34,197,94,0.2)]">QZ</div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight">Qari Zafar</h3>
                  <p className="text-green-500 text-xs font-black tracking-[0.3em] uppercase italic">Vice Principal</p>
                </div>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed italic border-l-4 border-green-500/30 pl-6">"Hifz-e-Quran section hamari pehchan hai. Yahan har bacha tilawat ka maahir banta hai."</p>
            </div>

            {/* Principal Ali Abbas Card */}
            <div className="md:col-span-6 p-12 rounded-[45px] bg-gradient-to-br from-[#0d0d0d] to-[#151515] border border-white/5 hover:border-green-500/50 transition-all duration-500 shadow-xl">
              <div className="flex items-center gap-8 mb-10">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-3xl flex items-center justify-center text-green-500 text-3xl font-black shadow-[0_0_20px_rgba(34,197,94,0.2)]">AA</div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight">Ali Abbas</h3>
                  <p className="text-green-500 text-xs font-black tracking-[0.3em] uppercase italic">Principal</p>
                </div>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed italic border-l-4 border-green-500/30 pl-6">"Discipline aur quality education par koi samjhota nahi. Hum kal ke kamiyab shehri bana rahe hain."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RGB FOOTER --- */}
      <footer id="contact" className="py-24 px-8 border-t border-white/5 bg-black relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <h4 className="text-4xl font-black mb-6 bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">DAR-E-ARQAM</h4>
            <div className="space-y-4 text-gray-500 font-black uppercase text-[10px] tracking-[0.5em]">
              <p className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition cursor-pointer">📍 Aminpur Road, Bhowana</p>
              <p className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition cursor-pointer">📞 03XX-XXXXXXX</p>
              <p className="text-green-500 underline decoration-green-500 underline-offset-8">✉️ info@darearqambhowana.pk</p>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 bg-green-500 blur-[60px] opacity-10 group-hover:opacity-20 transition-all"></div>
             <div className="relative p-12 rounded-[50px] bg-white/[0.02] border border-white/10 text-center backdrop-blur-xl">
                <p className="text-[10px] font-black tracking-[0.8em] text-gray-600 mb-4 uppercase">Managed By Excellence</p>
                <p className="text-2xl font-black text-yellow-400 italic">Ali Abbas & Qari Zafar</p>
                <div className="mt-4 flex justify-center gap-2">
                   {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-xs">★</span>)}
                </div>
             </div>
          </div>
        </div>
        <div className="mt-24 pt-10 border-t border-white/5 text-center text-[10px] text-gray-800 font-black tracking-[1.5em] uppercase">
          &copy; 2026 DAR-E-ARQAM BHOWANA. BUILT FOR GLORY.
        </div>
      </footer>

    </div>
  );
}