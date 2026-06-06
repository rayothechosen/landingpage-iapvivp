import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import LandingBody from "@/components/LandingBody";
import CtaButton from "@/components/CtaButton";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQCJC5";

const vpBonusCards = [
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/ChatGPT%20Image%205%20de%20jun.%20de%202026%2C%2018_12_36.png",
    title: "Gerador de Modelos de IA",
    alt: "Gerador de Modelos de IA",
    description: "Crie sua própria modelo em segundos para usar nos vídeos, mesmo sem ter foto pronta, cenário bonito ou querer aparecer.",
  },
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/publicador.png",
    title: "Publicador Automático",
    alt: "Publicador Automático",
    description: "Depois que o vídeo fica pronto, você pode publicar na hora ou deixar programado. Use para postar na Shopee Video, TikTok e Instagram sem precisar fazer tudo manualmente todos os dias.",
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
];

const vpFaqItems = [
  { question: "Isso é difícil de usar?", answer: "Não. O processo foi pensado para ser simples, visual e direto, mesmo para quem nunca usou esse tipo de tecnologia antes." },
  { question: "Eu preciso saber editar vídeo?", answer: "Não. O sistema já facilita a parte principal da geração e ainda conta com recursos como edição automática e legendas." },
  { question: "Eu preciso aparecer?", answer: "Não. Você pode usar sua própria foto ou uma modelo criada por IA." },
  { question: "Eu preciso ter o produto em mãos?", answer: "Não. Essa é justamente uma das maiores vantagens do sistema." },
  { question: "O que exatamente eu consigo criar com isso?", answer: "Você pode criar vídeos de produto, unboxing, review, vídeos com modelo, criativos, personagens e vídeos com muito mais cara de próprios." },
  { question: "Isso serve para Shopee Vídeo?", answer: "Sim. Você pode usar para Shopee Vídeo e outros canais onde quiser publicar seus vídeos." },
  { question: "Vou aprender só a gerar o vídeo ou também como aplicar?", answer: "Você vai aprender os dois. O sistema mostra como gerar e o método mostra como aplicar isso na prática." },
  { question: "E se eu não gostar?", answer: "Você tem 7 dias de garantia. Se não gostar, basta solicitar o reembolso dentro do prazo." },
];

const VideoVp = () => {
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
        Feito para Afiliadas Shopee
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
            className="text-2xl md:text-4xl font-extrabold leading-[1.4] mb-3 text-zinc-950"
          >
            Crie{" "}
            <span className="inline-block whitespace-nowrap px-2 py-0.5 rounded-md text-white" style={{ background: "var(--gradient-cta)" }}>
              Vídeos Próprios
            </span>
            {" "}que vendem como Afiliada Shopee
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

      {/* ===== CONTEÚDO LIBERADO PELO VTURB ===== */}
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

        {/* ===== DEMO GIFS ===== */}
        <section className="py-14 px-4 flex flex-col items-center text-center" style={{ background: "#121212" }}>
          <div className="max-w-md mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-extrabold text-white leading-tight mb-2">
                Exemplos reais de{" "}
                <span className="inline-block whitespace-nowrap px-2 py-0.5 rounded-md bg-accent text-black">vídeos gerados</span>
              </h2>
              <p className="text-white/50 text-sm mt-3">
                Veja na prática como afiliadas estão criando seus vídeos
              </p>
            </motion.div>

            <div className="flex flex-col gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full rounded-2xl overflow-hidden"
              >
                <img src="https://pub-e79c36fa1fb84177b4cf2c066a2fefae.r2.dev/gifbaixo.gif" alt="Exemplo vídeo próprio" className="w-full h-auto" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CtaButton
                checkoutLink={CHECKOUT_LINK}
                variant="scroll"
                className="btn-primary flex items-center justify-center w-full text-center text-base"
              >
                QUERO CRIAR VÍDEOS PRÓPRIOS
              </CtaButton>
            </motion.div>
          </div>
        </section>

        <LandingBody
          checkoutLink={CHECKOUT_LINK}
          vslMode
          theme="vp"
          darkFeatureCard
          ctaLabel="QUERO CRIAR VÍDEOS PRÓPRIOS"
          depoimentosCtaLabel="QUERO CRIAR VÍDEOS PRÓPRIOS"
          featuresSectionSubtitle="Tudo isso liberado hoje"
          ofertaImage="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CAPAOFERTA%20VIDEOSPROPRIOS.png"
          ofertaTitle="Ferramenta Vídeos Próprios + Bônus Exclusivos"
          ofertaHeading="Chegou a sua hora de criar Vídeos Próprios e vender como Afiliada Shopee"
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
          comparativoTestItem="Crie vídeos próprios."
          pageOfertaItems={[
            "Ferramenta Vídeos Próprios",
            "Gerador de Modelos IA",
            "Publicador Automático",
            "Produtos em Alta",
            "Treinamento Prático e Rápido",
            "Acesso pelo Celular",
            "Suporte por WhatsApp",
          ]}
          pageFeatures={[
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20VP.jpg",
              title: "Ferramenta Vídeos Próprios",
              alt: "Ferramenta Vídeos Próprios",
              description: "Uma das ferramentas mais exclusivas para afiliadas. Ela transforma vídeos de referência em vídeos próprios, com seu rosto ou até com uma modelo de IA, sem precisar aparecer, gravar, editar ou ter o produto em mãos.",
            },
          ]}
          pageBonusCards={vpBonusCards}
          pageFaqItems={vpFaqItems}
        />
      </div>
    </div>
  );
};

export default VideoVp;
