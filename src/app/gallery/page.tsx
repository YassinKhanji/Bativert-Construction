"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_ByfEpXhicEhdJz6XJzAGaDUiAnwAjw9p_V2Vn9k8ezj63kuYA2j4ewCvm6hnjJAbAjNHGWmZuje-89V7bRwNVM37z79IG9L-Fjb9811jTmcDZ7mZYGsnhiXKIFVUEDLffzDSvWmOEVjyeLT3Sto2q9IblKXxceoLnTKt_9sPpQ9ZBNCWttVdxyFUtrl-RoKKJpVJewtinxsrx7rSW6WqfcV3lAwTBBTgqXyO5LAzhXleC3qoWBrv_sGK3caIYYMY35bMIxDOsSU",
  "https://lh3.googleusercontent.com/aida/ADBb0uhcAPns0nh3IVlhyy7I5f8WaBKUW5ANcmHXspY26j8UUg0-0tXzJ8OW4jQuKyQzbSUFdwnDIH75oqEOkXP5HeWgn4Cai2IjUGAtv97ZwbXyBiIt02QwvXntRt2Tb503WjomY6WfYmjblrxdpK9jFwUf0Qhr-qnOC1Oy2GjN_uChfGy34Ghm52g0HkvgdUTWaN0wSx4MC4t82PJiIY1D_jHk6xUivw3URSZf1Oi9qqISkNEAy0S5Mqlkdm8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEP07qbmihKw9ldD0E8-JHI55dwsO_O_gEoLrh43LB7Uhn0mAnpVuD5TiptazkZKB4Do_h7pVPhSHoZ3RXLzJHfjqlBJsJEZHZkDUG-zHvEp-7CRtNsiz0zZ0t7p2j6SmunhBAbnLBF20gzgKH9q7UGOvWV4NRwNhD2WZVAqZgKDHUZ6dywPOj0FnTnOEV1NTeSgoCvGPekNr3GFr36myKICffA3FQAOQXNC98AuGMtufM0jmd6rshn7UdmWPZ_BxYYxJyhyuyNno",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCPtm9h5deDJXkQyLF7sW6J3hjJZ3wxhd0Qn3NS_duPnDWXWsuKkiDEFzKA8CJTpEZPyr_J4ifkgMMAzo70kcDex5Y2w9gcdPUG718MnC-TH6fck1NzBoYdPGqVRZQ2oy9_-5CSzpAa7Qy1RZ8OhZUmurf0rdFx1MMB6zMQQJQdXw8Y0_4fW6fOGIDUoGYD48jIsJWP2hd2OP1YXEN_vUCjbMIbw57kgb1unhL8H8DkxmgiMnd1kDxgMHrz2OGUjzv546Q_vJ6go3I",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_XqRe8kf6gBA_a8JbSQIhQkg96uXVleeLYLyePnwBFbzHeCgPPtv4tMXwZr9E02Z6wmLJHB9gN5U0hiAIu1OlGqxIwRZYj2qTV-hC_KQUJCIIFL8BLr8Mtg_mu4jk25qQTgJkSP1JhjeLd2hsk0ywrw8iHXxsQqLcPCPekcW1IRE6k2L4Ml0dmoyhxjQD3uggp5CGU5TxElCVigl5wE4JH7IX-pREOGH5qJwiyJgi58E80fAaA11KQZQJ3TK_kvUT--r7dcMoeS0Y0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBZMmKB-h7km3lncANwi5snlhRTLpAidp4UYOciaotKcTMtxzpJrcBa7L4hPLCAU17qlcGEJS4kP7GqGCD9O-Vn51xY2p7JypXk3FNoo8mq1zwWJs2SMH376lRXXFgDZIL01A_kWgyZZq35GiCdC2ns5RCxI1m8RfW9Hxu1iCLyWraysliFkgOv3Y1JQXK9PoweHDmcM_PRivFZ3pPp-80In8P9GTFUiHVIs1dm0nuy91gBk-X8FdEoUf1RnvQ6Hve92Yt0llCGb44",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqc1YeNarpciIkVN8QzfKzMLd1TlpeXPVCNXgBmgH6QFdPkEKJGlzJGu93zJihA9MQ4WxUeMndS_6WuF2aJPfFf-pcbeQDQlna4PgwowpuEfdLBg4EZy-nL_uxqTgeywsKTFplbAytwwTYGdxkOLLsGVLdcWBxSjW4dM2DkxyRrVJK8xx4JfKefuA8tssHYZA-p93xpw2K07Oyyd8qqJ6bI6FHAfyU568NsX45r2AeqNRwuCyf1Vhyb2unzneAC6l9g_MWjcaDAsQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9Ph1VP_ISvYA7xlHgJA19K8OFP2zfn2lomhysALJC0Pv8NGETkAAgK2zkW7M5wbYDu-4exzssxByU40jBcTg7QqsOytrycogWNnNMFAl_KH3RrdSCjRJMW9hRipfdnhSrjjRR7TSA1BJeEJpdNw8cRYSd2g6XRtOOoDkcTIPO4xxQcbByqzvxX_eeRYGrfa82DV7qeutxidrMRF_H3R5HfF7BQGGU6f5sA0y2SQcQ57KoqA9hNXgjF7OZ4mDMTIKTVlt583OI6o",
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
        <SectionHeader subtitle={t.gallery.sub} title={t.gallery.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => {
            const isTall = index % 5 === 0;
            const isWide = index % 7 === 0;
            
            return (
              <div 
                key={index} 
                className={`group cursor-pointer overflow-hidden bg-(--color-surface-container) relative
                  ${isTall ? 'md:row-span-2' : ''} 
                  ${isWide ? 'md:col-span-2' : ''}
                `}
              >
                <div className={`w-full h-full ${isTall ? 'aspect-[3/4] md:aspect-auto' : isWide ? 'aspect-video md:aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={src}
                    alt={`${t.gallery.altPrefix} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white uppercase tracking-widest text-[10px] font-bold border border-white px-6 py-2 backdrop-blur-sm">View</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
