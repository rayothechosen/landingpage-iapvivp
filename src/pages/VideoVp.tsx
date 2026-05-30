import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import LandingBody from "@/components/LandingBody";
import CtaButton from "@/components/CtaButton";

const CHECKOUT_LINK = "https://checkout.perfectpay.com.br/pay/PPU38CQCJC5";

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
                className="w-full rounded-2xl overflow-hidden ring-1 ring-white/10"
              >
                <img src="https://pub-e79c36fa1fb84177b4cf2c066a2fefae.r2.dev/giftopo.gif" alt="Exemplo vídeo próprio 1" className="w-full h-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full rounded-2xl overflow-hidden ring-1 ring-white/10"
              >
                <img src="https://pub-e79c36fa1fb84177b4cf2c066a2fefae.r2.dev/gifbaixo.gif" alt="Exemplo vídeo próprio 2" className="w-full h-auto" />
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
                QUERO TESTAR GRÁTIS
              </CtaButton>
            </motion.div>
          </div>
        </section>

        <LandingBody
          checkoutLink={CHECKOUT_LINK}
          vslMode
          theme="vp"
          darkFeatureCard
          ofertaImage="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CAPAOFERTA%20VIDEOSPROPRIOS.png"
          ofertaTitle="Ferramenta Vídeos Próprios + Bônus Exclusivos"
          ofertaHeading="Chegou a sua hora de criar Vídeos Próprios e testar vários Bônus Exclusivos!"
          comparativoTestItem="Crie vídeos próprios."
          pageOfertaItems={[
            "Ferramenta Vídeos Próprios",
            "Inteligência Artificial que posta por você",
            "+10.700 Vídeos Prontos",
            "Ferramenta Produto em Vídeo",
            "Bot Grupos de Ofertas",
            "+512 Carrosséis Prontos",
            "+1.052 Stories Prontos",
            "Produtos em Alta",
            "Treinamento Prático e Rápido",
          ]}
          pageFeatures={[
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20VP.jpg",
              title: "Ferramenta Vídeos Próprios",
              alt: "Ferramenta Vídeos Próprios",
              description: "Uma das ferramentas mais exclusivas para afiliadas. Ela transforma vídeos de referência em vídeos próprios, com seu rosto ou até com uma modelo de IA, sem precisar aparecer, gravar, editar ou ter o produto em mãos.",
            },
          ]}
          pageBonusCards={[
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20IAVIDEOS.jpg",
              title: "Inteligência Artificial que posta por você",
              alt: "Inteligência Artificial que posta por você",
              description: "Uma inteligência artificial que posta por você nos melhores horários, com as melhores hashtags e usando um pack com mais de 10.700 vídeos prontos para afiliadas Shopee.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%2010K.png",
              title: "+10.700 Vídeos Prontos",
              alt: "+10.700 Vídeos Prontos",
              description: "Tenha acesso ao maior pack de vídeos feito para afiliadas Shopee, com todos os vídeos organizados por nicho, editados, sem metadados e prontos para postar no seu perfil.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PVI.jpg",
              title: "Ferramenta Produto em Vídeo",
              alt: "Ferramenta Produto em Vídeo",
              description: "Acesse uma ferramenta que transforma qualquer produto da Shopee em vídeos prontos. Basta colar o link, escolher os estilos de vídeo que deseja gerar e receber conteúdos prontos para postar.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20GRUPOS.jpg",
              title: "Bot Grupos de Ofertas",
              alt: "Bot Grupos de Ofertas",
              description: "Teste um bot inteligente que cria, configura, divulga e envia ofertas nos seus grupos de WhatsApp.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20CARROSSEIS.png",
              title: "+512 Carrosséis Prontos",
              alt: "+512 Carrosséis Prontos",
              description: "Acesse mais de 500 carrosséis prontos para postar, criados pela nossa equipe de design e organizados por produto e nicho.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20STORIES.png",
              title: "+1.052 Stories Prontos",
              alt: "+1.052 Stories Prontos",
              description: "Acesse mais de 1.000 stories prontos para postar, organizados por produto e nicho.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PRODUTOS.png",
              title: "Produtos em Alta",
              alt: "Produtos em Alta",
              description: "Veja quais produtos afiliadas estão divulgando e vendendo na Shopee. A área é atualizada semanalmente.",
            },
            {
              image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20TREINAMENTO.png",
              title: "Treinamento Prático e Rápido",
              alt: "Treinamento Prático e Rápido",
              description: "Acesse um treinamento rápido e sem enrolação, ensinando como usar todas as ferramentas da plataforma pelo celular.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default VideoVp;
