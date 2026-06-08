import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
const GIF_PLACEHOLDER = "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/8a0d44e7-848b-4fc1-b744-c4f6b95415db.png";
const GIF_SRC = "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/GIF%20PVI.gif";
import LandingBody from "@/components/LandingBody";
import CtaButton from "@/components/CtaButton";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQC47H";

const GifWithPlaceholder = () => {
  const [gifLoaded, setGifLoaded] = useState(false);
  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ isolation: "isolate" }}>
      {!gifLoaded && (
        <img src={GIF_PLACEHOLDER} alt="Ferramenta Produto em Vídeo" className="w-full h-auto" />
      )}
      <img
        src={GIF_SRC}
        alt="Ferramenta Produto em Vídeo"
        className={`w-full h-auto ${gifLoaded ? "block" : "hidden"}`}
        onLoad={() => setGifLoaded(true)}
      />
    </div>
  );
};

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
      "https://scripts.converteai.net/b4eae634-a642-471f-b580-88ad9ba9c8b1/players/6a2736fc9c44aeca98b8e9fd/v4/player.js";
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
            Transforme{" "}
            <span className="inline-block whitespace-nowrap px-2 py-0.5 rounded-md bg-accent text-black">Produtos</span>
            {" "}da Shopee em{" "}
            <span className="inline-block whitespace-nowrap px-2 py-0.5 rounded-md bg-accent text-black">Vídeos Prontos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-sm text-muted-foreground leading-relaxed mb-7 max-w-md mx-auto text-xs font-sans"
          >
            Cole o link do produto, escolha os estilos e a ferramenta cria vídeos para você divulgar como afiliada e publicar automaticamente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md mx-auto mb-7"
          >
            <GifWithPlaceholder />
          </motion.div>

          <CtaButton
            checkoutLink={CHECKOUT_LINK}
            className="btn-primary flex items-center justify-center w-full max-w-md mx-auto text-center text-base"
          >
            QUERO CRIAR MEUS VÍDEOS
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
            O vídeo tem apenas 1 minuto. Veja como funciona a ferramenta!
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
                __html: `<vturb-smartplayer id="vid-6a2736fc9c44aeca98b8e9fd" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
              }}
            />
          </motion.div>

          <CtaButton
            checkoutLink={CHECKOUT_LINK}
            className="btn-primary flex items-center justify-center w-full text-center text-base"
          >
            QUERO CRIAR MEUS VÍDEOS
          </CtaButton>
        </div>
      </section>

      <LandingBody
        checkoutLink={CHECKOUT_LINK}
        theme="pvi"
        ctaLabel="QUERO CRIAR MEUS VÍDEOS"
        depoimentosCtaLabel="QUERO CRIAR MEUS VÍDEOS"
        featuresSectionSubtitle="Tudo isso liberado hoje"
        ofertaImage="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CAPAOFERTA%20PRODUTOEMVIDEOS.png"
        ofertaTitle="Ferramenta Produtos em Vídeos + Bônus Exclusivos"
        ofertaHeading="Chegou a sua hora de transformar Produtos em Vídeos e vender como afiliada"
        ofertaSubtitle="Aproveite a oferta de hoje e receba acesso imediato a tudo isso:"
        ofertaBannerLabel="ACESSO IMEDIATO"
        showTrialPricing={false}
        paidPrice="17,90"
        ofertaCtaLabel="COMPRAR AGORA"
        showTrialNote={false}
        garantiaTitle="Garantia de 7 dias"
        garantiaBody="Se por qualquer motivo você não estiver satisfeita, basta solicitar o reembolso dentro de 7 dias. Você recebe 100% do seu dinheiro de volta, sem perguntas ou burocracias."
        showPorQueLiberamos={false}
        depoimentosGroup3Title="Sem saber nada de tecnologia e gerando comissões"
        depoimentosGroup3Items={[
          { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-05.png", alt: "Depoimento afiliada Shopee 5" },
          { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-06.png", alt: "Depoimento afiliada Shopee 6" },
        ]}
        comparativoTestItem="Transforme produtos em vídeos."
        pageFaqItems={[
          { question: "Preciso aparecer nos vídeos?", answer: "Não. Você pode criar vídeos sem aparecer." },
          { question: "Preciso comprar o produto?", answer: "Não. Você usa o link do produto da Shopee." },
          { question: "Funciona pelo celular?", answer: "Sim. Você consegue usar pelo celular." },
          { question: "Preciso saber editar?", answer: "Não. O sistema gera os vídeos prontos para postar." },
          { question: "Posso escolher o estilo do vídeo?", answer: "Sim. Você pode escolher entre viral, unboxing, demonstrativo e apresentação com modelo." },
          { question: "Posso gerar mais de um vídeo para o mesmo produto?", answer: "Sim. Você pode criar diferentes vídeos para o mesmo produto." },
          { question: "O sistema publica os vídeos?", answer: "Sim. Você pode publicar na hora ou deixar programado." },
          { question: "Serve para TikTok, Instagram e Shopee Video?", answer: "Sim. A ideia é usar os vídeos nessas plataformas." },
          { question: "Preciso ter experiência como afiliada?", answer: "Não. O treinamento mostra o passo a passo." },
        ]}
        pageOfertaItems={[
          "Ferramenta Produto em Vídeo",
          "Publicador automático",
          "Banco de produtos",
          "Planejador de Postagens",
          "Acesso pelo celular",
          "Suporte por WhatsApp",
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
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/publicador.png",
            title: "Publicador Automático",
            alt: "Publicador Automático",
            description:
              "Depois que o vídeo fica pronto, você pode publicar na hora ou deixar programado. Use para postar na Shopee Video, TikTok e Instagram sem precisar fazer tudo manualmente todos os dias.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/pvi-card03-DTF4frjz.png",
            title: "Planejador de Postagens",
            alt: "Planejador de Postagens",
            description:
              "Não sabe o que postar? Você escolhe o nicho e o período, e o sistema monta um plano com produtos para divulgar, indicando o que postar e qual estilo de vídeo usar.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PRODUTOS.png",
            title: "Banco de Produtos",
            alt: "Banco de Produtos",
            description:
              "Veja quais produtos afiliadas estão divulgando e vendendo na Shopee. A área é atualizada semanalmente com base em produtos, nichos e oportunidades para você divulgar.",
          },
          {
            image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20TREINAMENTO.png",
            title: "Treinamento Prático e Rápido",
            alt: "Treinamento Prático e Rápido",
            description:
              "Acesse um treinamento rápido e sem enrolação, ensinando como usar todas as ferramentas da plataforma pelo celular e começar a colocar em prática.",
          },
        ]}
      />
    </div>
  );
};

export default LpPvi;
