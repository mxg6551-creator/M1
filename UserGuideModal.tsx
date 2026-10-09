import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Cloud,
  Globe,
  Database,
  DollarSign,
  Shield,
  Layers,
  CheckCircle,
  Copy,
  Check,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const UserGuideModal: React.FC = () => {
  const { isGuideModalOpen, setIsGuideModalOpen, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'cloudflare' | 'domain' | 'firebase' | 'embeds' | 'adsterra'>('cloudflare');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isGuideModalOpen) return null;

  const copySnippet = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    showToast('Code copied to clipboard!');
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#10121c] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#151825] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Master Setup Guide & Architecture (Cloudflare, Firebase, Ads)
              </h2>
              <p className="text-xs text-slate-400">
                বাংলা ও ইংরেজিতে সহজবোধ্য নির্দেশিকা — কীভাবে ডোমেইন, সাব-ডোমেইন ও অ্যাডস যুক্ত করবেন।
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsGuideModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-2 bg-[#121420] border-b border-slate-800 overflow-x-auto text-xs shrink-0">
          <button
            onClick={() => setActiveTab('cloudflare')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              activeTab === 'cloudflare'
                ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cloud className="w-4 h-4 text-orange-400" />
            <span>1. Cloudflare Free Hosting</span>
          </button>

          <button
            onClick={() => setActiveTab('domain')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              activeTab === 'domain'
                ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>2. Domain & Sub-domain (admin.)</span>
          </button>

          <button
            onClick={() => setActiveTab('embeds')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              activeTab === 'embeds'
                ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span>3. Iframe Embed Hosting (Cheap)</span>
          </button>

          <button
            onClick={() => setActiveTab('firebase')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              activeTab === 'firebase'
                ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4 text-amber-400" />
            <span>4. Firebase Config</span>
          </button>

          <button
            onClick={() => setActiveTab('adsterra')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              activeTab === 'adsterra'
                ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>5. Adsterra & Monetization</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {/* TAB 1: CLOUDFLARE */}
          {activeTab === 'cloudflare' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Cloud className="w-5 h-5 text-orange-400" />
                Cloudflare Pages এ ১০০% আজীবন ফ্রি হোস্টিং
              </h3>

              <div className="p-3.5 rounded-xl bg-[#171927] border border-slate-800 space-y-2">
                <p className="text-slate-200 leading-relaxed">
                  <strong>আপনার প্রশ্নের উত্তর:</strong> হ্যাঁ, Cloudflare এর <strong>Cloudflare Pages</strong> সম্পূর্ণ ফ্রি! এতে আনলিমিটেড ব্যান্ডউইথ (Unlimited Bandwidth) এবং ফ্রি SSL (https://) থাকে। কোনো মাসিক ফি নেই।
                </p>
                <div className="space-y-1 text-slate-300 pl-4 border-l-2 border-emerald-500">
                  <div><strong>ধাপ ১:</strong> GitHub এ একটি নতুন ফ্রি অ্যাকাউন্ট খুলে এই কোড রিপোজিটরি পুশ করুন।</div>
                  <div><strong>ধাপ ২:</strong> Cloudflare.com এ গিয়ে <em>Workers & Pages</em> → <em>Create Application</em> → <em>Pages</em> এ ক্লিক করুন।</div>
                  <div><strong>ধাপ ৩:</strong> আপনার GitHub রিপোজিটরি সিলেক্ট করুন। Framework preset দিন <code className="text-amber-300">Vite</code>।</div>
                  <div><strong>ধাপ ৪:</strong> Build command দিন: <code className="text-amber-300">npm run build</code> এবং Output directory দিন: <code className="text-amber-300">dist</code>।</div>
                  <div><strong>ধাপ ৫:</strong> <em>Save and Deploy</em> দিলেই আপনার সাইট লাইভ হয়ে যাবে!</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DOMAIN & SUBDOMAIN */}
          {activeTab === 'domain' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                আগে ডোমেইন নাকি হোস্টিং? এবং <span className="font-mono text-amber-400">admin.site.com</span> ট্রিকস
              </h3>

              <div className="p-3.5 rounded-xl bg-[#171927] border border-slate-800 space-y-2.5">
                <p className="text-slate-200 leading-relaxed">
                  <strong>আগে কী কিনবেন?</strong> আগে ডোমেইন (যেমন: Namecheap, Porkbun বা Dynadot থেকে একটি <code>.com</code> বা <code>.xyz</code> ডোমেইন কিনবেন $1 থেকে $9 ডলারে)। হোস্টিং কেনার দরকার নেই কারণ Cloudflare Pages সম্পূর্ণ ফ্রি!
                </p>

                <h4 className="font-bold text-amber-300 pt-1">
                  💡 এক ডোমেইনে কীভাবে <code className="text-white">admin.bdtopupshop.com</code> বানানো হয়?
                </h4>
                <p className="text-slate-300">
                  যেকোনো ডোমেইন প্রভাইডারের DNS ম্যানেজমেন্টে গিয়ে একটি <strong>CNAME Record</strong> যোগ করলেই আনলিমিটেড সাব-ডোমেইন ফ্রি তৈরি হয়:
                </p>
                <div className="p-3 rounded-lg bg-black/60 font-mono text-xs text-emerald-400 border border-slate-800">
                  Type: CNAME | Name: admin | Target: your-site.pages.dev | Proxy: Proxied (Orange Cloud)
                </div>
                <p className="text-slate-400 text-xs">
                  আমাদের অ্যাপ্লিকেশনে অ্যাডমিন প্যানেল একটি সিকিউর ভিউ হিসেবে ইন্টারনালি এমবেড করা হয়েছে যা সরাসরি <code className="text-amber-300">/admin</code> বা উপরে অ্যাডমিন শিল্ড আইকনে ক্লিক করলেই ওপেন হয়।
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: IFRAME EMBEDS */}
          {activeTab === 'embeds' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                কমদামী হোস্টিংয়ে হাজার হাজার ভিডিও চালানোর উপায় (Iframe Embed)
              </h3>

              <div className="p-3.5 rounded-xl bg-[#171927] border border-slate-800 space-y-2">
                <p className="text-slate-200 leading-relaxed">
                  আপনার ওয়েবসাইট কোনো ভিডিও ফাইল হোস্ট করবে না! ভিডিও স্টোর হবে থার্ড-পার্টি ফ্রি ভিডিও হোস্টিং সাইটে, আর আপনার সাইটে শুধু প্লেয়ারটি এমবেড হবে:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="font-bold text-amber-300">১. Streamtape / Doodstream</span>
                    <p className="text-slate-400 mt-1">ফ্রি আনলিমিটেড ভিডিও আপলোড করা যায় এবং তারা একটি <code>&lt;iframe src=&quot;...&quot;&gt;</code> কোড দেয়।</p>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="font-bold text-amber-300">২. Mega.nz / Google Drive</span>
                    <p className="text-slate-400 mt-1">ফুল এইচডি ফাইল ডাউনলোডের জন্য মেগা লিঙ্ক আমাদের স্মার্ট লিঙ্ক প্রোটেকশনে বসিয়ে দিন।</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black/50 font-mono text-[11px] text-slate-300 border border-slate-800">
                  অ্যাডমিন প্যানেলে ভিডিও আপলোড করার সময় শুধু পেস্ট করুন:
                  <div className="text-amber-400 mt-1">
                    &lt;iframe src=&quot;https://streamtape.com/e/x920a...&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FIREBASE CONFIG */}
          {activeTab === 'firebase' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-400" />
                Firebase ডাটাবেজ ইন্টিগ্রেশন
              </h3>

              <div className="p-3.5 rounded-xl bg-[#171927] border border-slate-800 space-y-2">
                <p className="text-slate-200">
                  আপনার দেওয়া ফায়ারবেস কনফিগারেশনটি অ্যাপে যুক্ত করা হয়েছে:
                </p>
                <div className="relative p-3 rounded-lg bg-black/60 font-mono text-[11px] text-amber-300 border border-slate-800">
                  <button
                    onClick={() =>
                      copySnippet(
                        `projectId: "mmshub-79800",\nstorageBucket: "mmshub-79800.firebasestorage.app"`,
                        'fb'
                      )
                    }
                    className="absolute top-2 right-2 p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
                  >
                    {copiedCode === 'fb' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <div>projectId: &quot;mmshub-79800&quot;</div>
                  <div>authDomain: &quot;mmshub-79800.firebaseapp.com&quot;</div>
                  <div>storageBucket: &quot;mmshub-79800.firebasestorage.app&quot;</div>
                </div>
                <p className="text-slate-400 text-xs">
                  লোকাল ব্রাউজারে এটি 100% সুরক্ষিতভাবে লোকালস্টোরেজে সিঙ্ক হয়ে কাজ করে, তাই ইন্টারনেট বা নেটওয়ার্ক বিঘ্ন ছাড়াই অ্যাডমিন প্যানেলে করা সব কাজ সংরক্ষিত থাকে।
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: ADSTERRA */}
          {activeTab === 'adsterra' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                Adsterra দিয়ে ইনকাম ও ৩-স্টেপ স্মার্টলিঙ্ক সেটআপ
              </h3>

              <div className="p-3.5 rounded-xl bg-[#171927] border border-slate-800 space-y-2">
                <p className="text-slate-200 leading-relaxed">
                  Adsterra অ্যাডাল্ট এবং টিউব ট্রাফিকের জন্য সর্বোচ্চ CPM দেয়। আমাদের সাইটে নিম্নলিখিত অ্যাড স্পট তৈরি রয়েছে:
                </p>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span><strong>1. 728x90 Header Banner:</strong> সার্চ বারের ঠিক নিচে স্বয়ংক্রিয়ভাবে দেখায়।</span>
                    <span className="text-emerald-400 font-bold">Active</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span><strong>2. 3-Step Smartlink:</strong> ব্যবহারকারী ডাউনলোড চাপলে ৩টি স্মার্টলিঙ্ক ক্লিকের পর মেগা আনলক হয়।</span>
                    <span className="text-emerald-400 font-bold">High CPM</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span><strong>3. VIP Subscription:</strong> বিকাশ/নগদ/রকেটে ডাইরেক্ট টাকা পেমেন্ট রিসিভ করার গেটওয়ে।</span>
                    <span className="text-amber-400 font-bold">100% Profit</span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs pt-1">
                  আপনি অ্যাডমিন প্যানেলের <strong>Ads & Smartlinks</strong> ট্যাবে গিয়ে যেকোনো সময় নিজের Adsterra লিঙ্ক বা স্ক্রিপ্ট কোড বসিয়ে দিতে পারেন।
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
