import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
const bannerTopo = "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/TOPO%20IAVIDEOS.png";
import LandingBody from "@/components/LandingBody";
import CtaButton from "@/components/CtaButton";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQC4SP";

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
      "https://scripts.converteai.net/b4eae634-a642-471f-b580-88ad9ba9c8b1/players/6a273748d597d3e049c1f951/v4/player.js";
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
          <span>Oferta acaba em: </span>
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
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-sm text-muted-foreground leading-relaxed mb-7 max-w-md mx-auto text-xs font-sans"
          >
            Tenha acesso a um pack com +10.700 vídeos e uma inteligência artificial que posta por você nos melhores horários e hashtags para viralizar e vender como afiliada Shopee.
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
            QUERO INTELIGÊNCIA ARTIFICIAL
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
            O vídeo tem apenas 1 minuto. Veja tudo que você vai receber hoje.
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
                __html: `<vturb-smartplayer id="vid-6a273748d597d3e049c1f951" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
              }}
            />
          </motion.div>

          <CtaButton
            checkoutLink={CHECKOUT_LINK}
            className="btn-primary flex items-center justify-center w-full text-center text-base"
          >
            QUERO INTELIGÊNCIA ARTIFICIAL
          </CtaButton>
        </div>
      </section>

      <LandingBody
        checkoutLink={CHECKOUT_LINK}
        ctaLabel="QUERO INTELIGÊNCIA ARTIFICIAL"
        depoimentosBgOverride="#0f0f0f"
        depoimentosTitle="Quem usou mudou de vida"
        depoimentosCtaLabel="QUERO INTELIGÊNCIA ARTIFICIAL"
        featuresSectionSubtitle="Tudo isso liberado hoje"
        ofertaHeading="Chegou a sua hora de usar a Inteligência Artificial e vender no automático!"
        ofertaSubtitle="Aproveite a oferta de hoje e receba acesso imediato a tudo isso:"
        ofertaBannerLabel="ACESSO IMEDIATO"
        showTrialPricing={false}
        paidPrice="17,90"
        ofertaCtaLabel="COMPRAR AGORA"
        showTrialNote={false}
        garantiaTitle="Garantia de 7 dias"
        garantiaBody="Se por qualquer motivo você não estiver satisfeita, basta solicitar o reembolso dentro de 7 dias. Você recebe 100% do seu dinheiro de volta, sem perguntas ou burocracias."
        showPorQueLiberamos={false}
        pageBonusCards={[
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20GRUPOS.jpg",
            title: "Bot Grupos de Ofertas",
            alt: "Bot Grupos de Ofertas",
            description: "Tenha um bot inteligente que cria, configura, divulga e envia ofertas nos seus grupos de WhatsApp. Ele foi feito para ajudar afiliadas a movimentarem grupos de ofertas todos os dias no automático.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PRODUTOS.png",
            title: "Produtos em Alta",
            alt: "Produtos em Alta",
            description: "Veja quais produtos afiliadas estão divulgando e vendendo na Shopee. A área é atualizada semanalmente com base em produtos, nichos e oportunidades para você divulgar.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20TREINAMENTO.png",
            title: "Treinamento Prático e Rápido",
            alt: "Treinamento Prático e Rápido",
            description: "Acesse um treinamento rápido e sem enrolação, ensinando como usar todas as ferramentas da plataforma pelo celular e começar a colocar em prática.",
          },
        ]}
        pageOfertaItems={[
          "Inteligência Artificial que posta por você",
          "+10.700 Vídeos Prontos",
          "Bot Grupos de Ofertas",
          "Produtos em Alta",
          "Treinamento Prático e Rápido",
        ]}
        pageFaqItems={[
          { question: "Preciso aparecer para vender como afiliada?", answer: "Não. A plataforma foi pensada justamente para quem quer vender como afiliada sem precisar aparecer, gravar vídeos ou mostrar o rosto. Você pode usar vídeos prontos, conteúdos organizados e ferramentas com IA para divulgar os produtos." },
          { question: "Funciona pelo celular?", answer: "Sim. Você consegue acessar a plataforma pelo celular e usar os conteúdos e ferramentas de forma simples, sem precisar de computador." },
          { question: "Preciso saber editar vídeos?", answer: "Não. Os vídeos já são entregues prontos para usar. Além disso, as ferramentas com IA ajudam a criar conteúdos sem você precisar entender de edição." },
          { question: "Como recebo acesso?", answer: "Após a compra, você recebe os dados de acesso no e-mail cadastrado. Com eles, é só entrar na plataforma e começar a usar os conteúdos, vídeos, bônus e ferramentas disponíveis." },
          { question: "A IA posta em quais redes?", answer: "A IA foi criada para facilitar a criação e publicação de conteúdos em redes como Instagram, TikTok e outras plataformas de vídeo curto, de acordo com as configurações disponíveis na sua conta." },
          { question: "Recebo treinamento para usar tudo?", answer: "Sim. Dentro da plataforma você encontra um treinamento prático mostrando como acessar os materiais, usar as ferramentas e começar a divulgar como afiliada mesmo que esteja começando do zero." },
          { question: "Como funciona a garantia?", answer: "Você tem 7 dias de garantia. Se acessar a plataforma e entender que ela não é para você, basta solicitar o reembolso dentro desse prazo, conforme as regras da garantia." },
          { question: "Preciso ter experiência para usar?", answer: "Não. A Afiliada Prime foi feita para iniciantes também. Você recebe materiais prontos, ferramentas simples e orientação para começar mesmo sem experiência com afiliados, edição ou criação de conteúdo." },
        ]}
      />
    </div>
  );
};

export default LpIaDeVideos;
