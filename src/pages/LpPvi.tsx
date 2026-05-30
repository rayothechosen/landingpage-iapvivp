import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
const bannerTopo = "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/TOPO%20PRODUTOEMVIDEOS.png";
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

const LpPvi = () => {
  const { minutes, seconds } = useCountdown(15);

  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/86b88a9f-fb0d-4413-b3ae-3fbda54e9b43/players/6a0793c6a8ee75d656a8d433/v4/player.js";
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
            Transforme{" "}
            <span className="inline-block whitespace-nowrap px-2 py-0.5 rounded-md bg-accent text-black">1 Produto</span>
            {" "}da Shopee em{" "}
            <span className="inline-block whitespace-nowrap px-2 py-0.5 rounded-md bg-accent text-black">4 Vídeos Prontos</span>
            <span className="block text-lg font-bold text-muted-foreground mt-3">
              Teste de graça por{" "}
              <span className="inline-block px-2 py-0.5 rounded-md text-white text-lg font-extrabold" style={{ background: "var(--gradient-cta)" }}>3 Dias</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-sm text-muted-foreground leading-relaxed mb-7 max-w-md mx-auto text-xs font-sans"
          >
            Acesse de graça por 3 dias uma ferramenta que transforma qualquer produto da Shopee em vídeos prontos. Nada será cobrado hoje!
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
            Veja como funciona a ferramenta que transforma produtos em vídeos e posta por você no automático!
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
                __html: `<vturb-smartplayer id="vid-6a0793c6a8ee75d656a8d433" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
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

      {/* ===== DEMO GIF ===== */}
      <section className="py-14 px-4 flex flex-col items-center text-center" style={{ background: "#121212" }}>
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs tracking-[0.18em] uppercase font-bold mb-4">
              Exemplo prático
            </span>
            <h2 className="text-2xl font-extrabold text-white leading-tight mb-2">
              Veja o que dá pra fazer com a ferramenta
            </h2>
            <p className="text-white/50 text-sm">
              1 Produto vira vídeos virais
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-2xl overflow-hidden mb-8 ring-1 ring-white/10"
          >
            <img
              src="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/GIF%20PVI.gif"
              alt="Ferramenta Produto em Vídeo - demo"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CtaButton
              checkoutLink={CHECKOUT_LINK}
              className="btn-primary flex items-center justify-center w-full text-center text-base"
            >
              QUERO TESTAR GRÁTIS
            </CtaButton>
          </motion.div>
        </div>
      </section>

      <LandingBody
        checkoutLink={CHECKOUT_LINK}
        theme="pvi"
        ofertaImage="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CAPAOFERTA%20PRODUTOEMVIDEOS.png"
        ofertaTitle="Ferramenta Produtos em Vídeos + Bônus Exclusivos"
        ofertaHeading="Chegou a sua hora de transformar Produtos em Vídeos e testar vários Bônus Exclusivos"
        comparativoTestItem="Transforme produtos em vídeos."
        pageOfertaItems={[
          "Ferramenta Produto em Vídeo",
          "Inteligência Artificial que posta por você",
          "+10.700 Vídeos Prontos",
          "Bot Grupos de Ofertas",
          "+512 Carrosséis Prontos",
          "+1.052 Stories Prontos",
          "Produtos em Alta",
          "Treinamento Prático e Rápido",
        ]}
        pageFeatures={[
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PVI.jpg",
            title: "Ferramenta Produto em Vídeo",
            alt: "Ferramenta Produto em Vídeo",
            description:
              "Acesse uma ferramenta que transforma qualquer produto da Shopee em vídeos prontos. Basta colar o link, escolher os estilos de vídeo que deseja gerar e receber conteúdos prontos para postar.",
          },
        ]}
        pageBonusCards={[
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20IAVIDEOS.jpg",
            title: "Inteligência Artificial que posta por você",
            alt: "Inteligência Artificial que posta por você",
            description:
              "Uma inteligência artificial que posta por você nos melhores horários, com as melhores hashtags e usando um pack com mais de 10.700 vídeos prontos para afiliadas Shopee.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%2010K.png",
            title: "+10.700 Vídeos Prontos",
            alt: "+10.700 Vídeos Prontos",
            description:
              "Tenha acesso ao maior pack de vídeos feito para afiliadas Shopee, com todos os vídeos organizados por nicho, editados, sem metadados e prontos para postar no seu perfil.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20VP.jpg",
            title: "Ferramenta Vídeos Próprios",
            alt: "Ferramenta Vídeos Próprios",
            description:
              "Ela transforma vídeos de referência em vídeos próprios, com seu rosto ou até com uma modelo de IA, sem precisar aparecer, gravar, editar ou ter o produto em mãos.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20GRUPOS.jpg",
            title: "Bot Grupos de Ofertas",
            alt: "Bot Grupos de Ofertas",
            description:
              "Teste um bot inteligente que cria, configura, divulga e envia ofertas nos seus grupos de WhatsApp. Ele foi feito para ajudar afiliadas a movimentarem grupos de ofertas todos os dias no automático.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20CARROSSEIS.png",
            title: "+512 Carrosséis Prontos",
            alt: "+512 Carrosséis Prontos",
            description:
              "Acesse mais de 500 carrosséis prontos para postar, criados pela nossa equipe de design e organizados por produto e nicho.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20STORIES.png",
            title: "+1.052 Stories Prontos",
            alt: "+1.052 Stories Prontos",
            description:
              "Acesse mais de 1.000 stories prontos para postar, organizados por produto e nicho. Todos os dias novos stories são adicionados.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PRODUTOS.png",
            title: "Produtos em Alta",
            alt: "Produtos em Alta",
            description:
              "Veja quais produtos afiliadas estão divulgando e vendendo na Shopee. A área é atualizada semanalmente.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20TREINAMENTO.png",
            title: "Treinamento Prático e Rápido",
            alt: "Treinamento Prático e Rápido",
            description:
              "Acesse um treinamento rápido e sem enrolação, ensinando como usar todas as ferramentas da plataforma pelo celular.",
          },
        ]}
      />
    </div>
  );
};

export default LpPvi;
