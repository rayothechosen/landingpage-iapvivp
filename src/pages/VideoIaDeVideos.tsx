import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import LandingBody from "@/components/LandingBody";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQCJC5";

const VideoIaDeVideos = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/f3993fb3-b7fc-4628-bf7a-d82c39d224ab/players/6a1b48b9703894749f3cfeda/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      try { document.head.removeChild(s); } catch {}
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ===== FAIXA TOPO ===== */}
      <div className="w-full bg-accent text-black text-center py-2.5 px-3 font-bold text-sm">
        DE GRAÇA POR 3 DIAS
      </div>

      {/* ===== HERO COM VÍDEO ===== */}
      <section className="px-4 pt-10 pb-6 flex flex-col items-center text-center bg-background">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-5"
          >
            <img src="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/logo%20shopee.png" alt="Shopee" className="h-8 w-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold leading-[1.3] mb-3 text-zinc-950"
          >
            +10.700 Vídeos Prontos com{" "}
            <span
              className="inline px-2 py-0.5 rounded-md text-white"
              style={{ background: "var(--gradient-cta)" }}
            >
              Inteligência Artificial
            </span>{" "}
            que posta por você
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-sm mb-6 max-w-md mx-auto"
          >
            Assista o vídeo abaixo para entender como funciona.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden ring-1 ring-border shadow-card"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-6a1b48b9703894749f3cfeda" style="display:block;margin:0 auto;width:100%;max-width:400px;"></vturb-smartplayer>`,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ===== CONTEÚDO LIBERADO NO MINUTO 6 PELO VTURB ===== */}
      <div id="pagina" style={{ display: "none" }}>
        <div className="bg-background flex flex-col items-center pb-2 gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-coral" />
            </motion.div>
          ))}
        </div>

        <LandingBody checkoutLink={CHECKOUT_LINK} vslMode />
      </div>
    </div>
  );
};

export default VideoIaDeVideos;
