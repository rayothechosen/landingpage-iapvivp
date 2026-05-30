import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
const bannerTopo = "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/TOPO%20IAVIDEOS.png";
import LandingBody from "@/components/LandingBody";
import CtaButton from "@/components/CtaButton";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQC6Q1";

const useCountdown = (initialMinutes: number) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  useEffect(() => {
    if (totalSeconds <= 0) return;
    const interval = setInterval(() => {
      setTotalSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [totalSeconds]);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return { minutes, seconds };
};

const LpIaDeVideos = () => {
  const { minutes, seconds } = useCountdown(15);

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
      {/* ===== COUNTDOWN BAR ===== */}
      <div className="w-full py-2.5 px-4 text-center bg-accent">
        <p className="text-black text-sm font-bold tracking-wide">
          <span>Teste grátis acaba em </span>
          <span className="inline-flex items-center gap-0.5 font-extrabold text-base">
            <span className="bg-black text-white rounded-md px-1.5 py-0.5 min-w-[28px] text-center tabular-nums">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="text-black">:</span>
            <span className="bg-black text-white rounded-md px-1.5 py-0.5 min-w-[28px] text-center tabular-nums">
              {String(seconds).padStart(2, "0")}
            </span>
          </span>
        </p>
      </div>

      {/* ===== HERO ===== */}
      <section className="px-4 pt-5 pb-12 flex flex-col items-center text-center bg-background">
        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-5"
          >
            <img
              src="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/logo%20shopee.png"
              alt="Shopee"
              className="h-8 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold leading-[1.4] mb-5 text-zinc-950"
          >
            +10.700 Vídeos Prontos com{" "}
            <span className="inline px-2 py-0.5 rounded-md text-white" style={{ background: "var(--gradient-cta)" }}>Inteligência Artificial</span>
            {" "}que posta por você
            <span className="block text-lg font-bold text-muted-foreground mt-3">
              Teste de graça por{" "}
              <span className="inline-block px-2 py-0.5 rounded-md bg-accent text-black text-lg font-extrabold">3 Dias</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-sm text-muted-foreground leading-relaxed mb-7 max-w-md mx-auto text-xs font-sans"
          >
            Acesse de graça por 3 dias um pack com +10.700 vídeos e uma inteligência artificial que posta por você como afiliada Shopee. Nada será cobrado hoje!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md mx-auto mb-7"
          >
            <img src={bannerTopo} alt="Kit Afiliada IA - vídeos prontos e inteligência artificial" className="w-full h-auto" />
          </motion.div>

          <CtaButton
            checkoutLink={CHECKOUT_LINK}
            className="btn-primary flex items-center justify-center w-full max-w-md mx-auto text-center text-base"
          >
            ATIVAR MEUS 3 DIAS GRÁTIS
          </CtaButton>
        </div>
      </section>

      {/* ===== ARROWS TRANSITION ===== */}
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

      {/* ===== SECTION 2 - VIDEO ===== */}
      <section className="bg-background px-4 pt-6 pb-14 flex flex-col items-center text-center">
        <div className="max-w-2xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold leading-tight mb-4 text-primary text-zinc-950"
          >
            Veja como funciona a IA que posta por você no automático!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-6 max-w-lg mx-auto font-sans text-sm"
          >
            O vídeo tem apenas 1 minuto. Veja o que fica liberado no teste grátis e entenda por que nada será cobrado hoje.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[400px] mx-auto mb-6 rounded-2xl overflow-hidden ring-1 ring-border shadow-card"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-6a1b48b9703894749f3cfeda" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
              }}
            />
          </motion.div>

          <CtaButton
            checkoutLink={CHECKOUT_LINK}
            className="btn-primary flex items-center justify-center w-full text-center text-base"
          >
            ATIVAR MEUS 3 DIAS GRÁTIS
          </CtaButton>
        </div>
      </section>

      <LandingBody checkoutLink={CHECKOUT_LINK} />
    </div>
  );
};

export default LpIaDeVideos;
