import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import LandingBody from "@/components/LandingBody";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQC4SP";

const VideoIaDeVideos = () => {
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
                __html: `<vturb-smartplayer id="vid-6a273748d597d3e049c1f951" style="display:block;margin:0 auto;width:100%;max-width:400px;"></vturb-smartplayer>`,
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

        <LandingBody
          checkoutLink={CHECKOUT_LINK}
          vslMode
          depoimentosBgOverride="#0f0f0f"
          ctaLabel="QUERO INTELIGÊNCIA ARTIFICIAL"
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
    </div>
  );
};

export default VideoIaDeVideos;
