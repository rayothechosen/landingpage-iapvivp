import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
const cardSistema = "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CAPAOFERTA%20IAVIDEOS.png";
import garantiaSelo from "@/assets/selo-garantia-gold.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CtaButton from "@/components/CtaButton";

const features = [
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20IAVIDEOS.jpg",
    title: "Inteligência Artificial que posta por você",
    alt: "Inteligência Artificial que posta por você",
    description:
      "Inteligência artificial que posta por você nos melhores horários, com as melhores hashtags e usando um pack com mais de 10.700 vídeos prontos para afiliadas Shopee.",
  },
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%2010K.png",
    title: "+10.700 Vídeos Prontos",
    alt: "+10.700 Vídeos Prontos",
    description:
      "Tenha acesso ao maior pack de vídeos feito para afiliadas Shopee, com todos os vídeos organizados por nicho, editados, sem metadados e prontos para postar no seu perfil.",
  },
];

const bannerCards = [
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PVI.jpg",
    title: "Ferramenta Produto em Vídeo",
    alt: "Ferramenta Produto em Vídeo",
    description:
      "Acesse uma ferramenta que transforma qualquer produto da Shopee em vídeos prontos. Basta colar o link, escolher os estilos de vídeo que deseja gerar e receber conteúdos prontos para postar.",
  },
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20VP.jpg",
    title: "Ferramenta Vídeos Próprios",
    alt: "Ferramenta Vídeos Próprios",
    description:
      "Uma das ferramentas mais exclusivas para afiliadas. Ela transforma vídeos de referência em vídeos próprios, com seu rosto ou até com uma modelo de IA, sem precisar aparecer, gravar, editar ou ter o produto em mãos.",
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
      "Acesse mais de 500 carrosséis prontos para postar, criados pela nossa equipe de design e organizados por produto e nicho para facilitar sua rotina como afiliada.",
  },
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20STORIES.png",
    title: "+1.052 Stories Prontos",
    alt: "+1.052 Stories Prontos",
    description:
      "Acesse mais de 1.000 stories prontos para postar, organizados por produto e nicho. Todos os dias novos stories são adicionados para você ter mais conteúdos de divulgação.",
  },
  {
    image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/CARD%20PRODUTOS.png",
    title: "Produtos em Alta",
    alt: "Produtos em Alta",
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
];

const testimonials = [
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-01.png", alt: "Depoimento afiliada Shopee 1" },
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-02.png", alt: "Depoimento afiliada Shopee 2" },
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-03.png", alt: "Depoimento afiliada Shopee 3" },
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-04.jpeg", alt: "Depoimento afiliada Shopee 4" },
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-05.png", alt: "Depoimento afiliada Shopee 5" },
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-06.png", alt: "Depoimento afiliada Shopee 6" },
  { image: "https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/dp-07.png", alt: "Depoimento afiliada Shopee 7" },
];

const faqItems = [
  { question: "É grátis mesmo?", answer: "Sim. Você testa por 3 dias sem pagar nada hoje." },
  { question: "Por que precisa colocar cartão?", answer: "O cartão serve apenas para ativar seu teste e manter o acesso caso você decida continuar depois dos 3 dias." },
  { question: "Vai cobrar alguma coisa hoje?", answer: "Não. Nada será cobrado hoje." },
  { question: "No checkout aparece R$34,90. Vou pagar agora?", answer: "Não. Esse é o valor da assinatura após o teste. Hoje você paga R$0,00. A cobrança só acontece depois dos 3 dias grátis, caso você não cancele." },
  { question: "Quando começa a cobrança?", answer: "A cobrança só acontece depois dos 3 dias grátis, caso você continue com o acesso." },
  { question: "Quanto custa depois do teste?", answer: "Depois dos 3 dias, se você continuar, o acesso fica R$34,90/mês." },
  { question: "Posso cancelar antes da cobrança?", answer: "Sim. Se cancelar antes do fim dos 3 dias, você não paga nada." },
  { question: "E se eu pagar e não gostar?", answer: "Você ainda tem 7 dias de garantia após a cobrança para pedir reembolso." },
  { question: "O que eu recebo no teste?", answer: "Você acessa a IA, o pack com +10.700 vídeos prontos, produtos em alta, rotina de postagem e treinamento simples." },
  { question: "Preciso aparecer nos vídeos?", answer: "Não. A ideia do kit é facilitar sua rotina usando vídeos prontos e uma estrutura organizada." },
  { question: "Funciona pelo celular?", answer: "Sim. A plataforma foi pensada para ser usada pelo celular." },
  { question: "Preciso saber editar?", answer: "Não. Você recebe vídeos prontos e treinamento simples para aprender a usar." },
  { question: "A IA posta por mim?", answer: "A IA ajuda você a organizar sua rotina de postagens com vídeos prontos, nichos, produtos e frequência. Dentro da plataforma, você vê como configurar e usar a estrutura." },
  { question: "Isso garante comissão?", answer: "Não. O Kit entrega estrutura, vídeos e organização, mas seus resultados dependem da sua aplicação e consistência." },
];

const faqItemsIaVideos = [
  { question: "Preciso aparecer para vender como afiliada?", answer: "" },
  { question: "Funciona pelo celular?", answer: "" },
  { question: "Preciso saber editar vídeos?", answer: "" },
  { question: "Como recebo acesso?", answer: "" },
  { question: "A IA posta em quais redes?", answer: "" },
  { question: "Recebo treinamento para usar tudo?", answer: "" },
  { question: "Como funciona a garantia?", answer: "" },
  { question: "Preciso ter experiência para usar?", answer: "" },
];

const ofertaItems = [
  "+10.700 Vídeos Prontos",
  "Ferramenta Produto em Vídeo",
  "Ferramenta Vídeos Próprios",
  "Bot Grupos de Ofertas",
  "+512 Carrosséis Prontos",
  "+1.052 Stories Prontos",
  "Produtos em Alta",
  "Treinamento Prático e Rápido",
];

interface CardItem {
  image: string;
  title: string;
  alt: string;
  description: string;
}

interface LandingBodyProps {
  checkoutLink: string;
  vslMode?: boolean;
  pageFeatures?: CardItem[];
  pageBonusCards?: CardItem[];
  ofertaImage?: string;
  ofertaTitle?: string;
  pageOfertaItems?: string[];
  ofertaHeading?: string;
  comparativoTestItem?: string;
  theme?: "default" | "whatsapp" | "pvi" | "vp";
  ctaClassName?: string;
  ctaStyle?: React.CSSProperties;
  darkFeatureCard?: boolean;
  depoimentosBgOverride?: string;
  depoimentosGroup3Title?: string;
  depoimentosGroup3Items?: { image: string; alt: string }[];
  ctaLabel?: string;
  depoimentosTitle?: string;
  depoimentosCtaLabel?: string;
  featuresSectionSubtitle?: string;
  ofertaSubtitle?: string;
  ofertaBannerLabel?: string;
  showTrialPricing?: boolean;
  paidPrice?: string;
  ofertaCtaLabel?: string;
  showTrialNote?: boolean;
  garantiaTitle?: string;
  garantiaBody?: string;
  pageFaqItems?: { question: string; answer: string }[];
  showPorQueLiberamos?: boolean;
}

const THEMES = {
  default: {
    cardAccent: "var(--gradient-cta)",
    badgeBg: "var(--gradient-cta)",
    badgeShadow: "0 4px 12px hsl(18 97% 48% / 0.35)",
    bonusBadgeClass: "bg-accent text-accent-foreground",
    depoimentosBg: "var(--gradient-vibrant)",
    depoimentosTitleClass: "text-white",
    depoimentosSubClass: "text-white/70",
    depoimentosBadgeBg: "var(--gradient-cta)",
    depoimentosBadgeClass: "text-white",
    garantiaBg: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(13 99% 35%) 100%)",
  },
  whatsapp: {
    cardAccent: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)",
    badgeBg: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)",
    badgeShadow: "0 4px 12px rgba(7, 94, 84, 0.35)",
    bonusBadgeClass: "text-white",
    depoimentosBg: "linear-gradient(135deg, #075E54 0%, #128C7E 60%, #25D366 100%)",
    depoimentosTitleClass: "text-white",
    depoimentosSubClass: "text-white/70",
    depoimentosBadgeBg: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)",
    depoimentosBadgeClass: "text-white",
    garantiaBg: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(13 99% 35%) 100%)",
  },
  pvi: {
    cardAccent: "var(--gradient-cta)",
    badgeBg: "var(--gradient-cta)",
    badgeShadow: "0 4px 12px hsl(18 97% 48% / 0.35)",
    bonusBadgeClass: "bg-accent text-accent-foreground",
    depoimentosBg: "hsl(42 100% 58%)",
    depoimentosTitleClass: "text-zinc-950",
    depoimentosSubClass: "text-zinc-700",
    depoimentosBadgeBg: "var(--gradient-cta)",
    depoimentosBadgeClass: "text-white",
    garantiaBg: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(13 99% 35%) 100%)",
  },
  vp: {
    cardAccent: "var(--gradient-cta)",
    badgeBg: "var(--gradient-cta)",
    badgeShadow: "0 4px 12px hsl(18 97% 48% / 0.35)",
    bonusBadgeClass: "text-white",
    depoimentosBg: "#0f0f0f",
    depoimentosTitleClass: "text-white",
    depoimentosSubClass: "text-white/50",
    depoimentosBadgeBg: "var(--gradient-cta)",
    depoimentosBadgeClass: "text-white",
    garantiaBg: "#121212",
  },
};

const WA_CTA = "flex items-center justify-center w-full text-center text-base text-white font-bold py-4 px-8 rounded-full";
const WA_STYLE: React.CSSProperties = { background: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)", boxShadow: "0 8px 24px rgba(7,94,84,0.45)" };

const LandingBody = ({ checkoutLink, vslMode = false, pageFeatures, pageBonusCards, ofertaImage, ofertaTitle, pageOfertaItems, ofertaHeading, comparativoTestItem, theme = "default", ctaClassName, ctaStyle, darkFeatureCard = false, depoimentosBgOverride, depoimentosGroup3Title, depoimentosGroup3Items, ctaLabel, depoimentosTitle, depoimentosCtaLabel, featuresSectionSubtitle, ofertaSubtitle, ofertaBannerLabel, showTrialPricing = true, paidPrice, ofertaCtaLabel, showTrialNote = true, garantiaTitle, garantiaBody, pageFaqItems, showPorQueLiberamos = true }: LandingBodyProps) => {
  const t = THEMES[theme];
  const activeCta = ctaClassName ?? "btn-primary flex items-center justify-center w-full text-center text-base";
  const activeCtaStyle = ctaStyle ?? undefined;
  const activeFeatures = pageFeatures ?? features;
  const activeBonusCards = pageBonusCards ?? bannerCards;
  const activeOfertaImage = ofertaImage ?? cardSistema;
  const activeOfertaTitle = ofertaTitle ?? "Inteligência Artificial + Bônus Exclusivos";
  const activeOfertaItems = pageOfertaItems ?? ofertaItems;
  const activeOfertaHeading = ofertaHeading ?? "Chegou a sua hora de testar a IA das Afiliadas Shopee";
  const activeComparativoTestItem = comparativoTestItem ?? "Testa a IA e +10.700 vídeos.";
  const activeCtaLabel = ctaLabel ?? "ATIVAR MEUS 3 DIAS GRÁTIS";
  const activeDepoimentosTitle = depoimentosTitle ?? "Quem testou não parou de usar";
  const activeDepoimentosCtaLabel = depoimentosCtaLabel ?? "QUERO TESTAR GRÁTIS AGORA";
  const activeFeaturesSectionSubtitle = featuresSectionSubtitle ?? "Tudo isso liberado para testar por 3 dias grátis";
  const activeOfertaSubtitle = ofertaSubtitle ?? "Aproveite a liberação gratuita de hoje e receba acesso imediato a tudo isso:";
  const activeOfertaBannerLabel = ofertaBannerLabel ?? "DE GRAÇA POR 3 DIAS";
  const activeOfertaCtaLabel = ofertaCtaLabel ?? "ATIVAR MEU TESTE GRÁTIS";
  const activeGarantiaTitle = garantiaTitle ?? "Teste grátis por 3 dias";
  const activeGarantiaBody = garantiaBody ?? null;
  const activeFaqItems = pageFaqItems ?? faqItems;
  return (
    <>
      {/* ===== O QUE VOCÊ TESTA ===== */}
      <section id="conteudo" className="bg-secondary text-foreground py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent-foreground inline-block px-3 py-1 rounded-full bg-accent text-xs tracking-[0.18em] uppercase font-bold mb-3">
              O QUE VOCÊ RECEBE
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black">{activeFeaturesSectionSubtitle}</h2>
          </motion.div>

          <div className="grid gap-6">
            {activeFeatures.map((f, i) => {
              const isDark = darkFeatureCard;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`p-5 relative rounded-2xl overflow-hidden ${isDark ? "" : "feature-card-lp"}`}
                  style={isDark ? { background: "#121212", border: "1px solid rgba(255,255,255,0.08)" } : undefined}
                >
                  <span
                    className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                    style={{ background: t.cardAccent }}
                  />
                  <div className="flex items-start gap-3 mb-4 mt-1">
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                      style={{ background: t.badgeBg, boxShadow: t.badgeShadow }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-bold text-base leading-tight ${isDark ? "text-white" : "text-zinc-950"}`}>{f.title}</h3>
                      <p className={`text-sm mt-1.5 leading-relaxed whitespace-pre-line ${isDark ? "text-white/60" : "text-gray-600"}`}>
                        {f.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full rounded-xl overflow-hidden">
                    <img src={f.image} alt={f.alt} className="w-full h-auto object-cover" />
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 my-2"
            >
              <span className={`flex-1 h-px ${darkFeatureCard ? "bg-white/15" : "bg-border"}`} />
              <span
                className={`inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase font-extrabold whitespace-nowrap ${t.bonusBadgeClass}`}
                style={theme === "whatsapp" || theme === "vp" ? { background: t.cardAccent } : undefined}
              >
                Bônus Exclusivos
              </span>
              <span className={`flex-1 h-px ${darkFeatureCard ? "bg-white/15" : "bg-border"}`} />
            </motion.div>

            {activeBonusCards.map((b, i) => (
              <motion.div
                key={`banner-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`p-5 relative rounded-2xl overflow-hidden ${darkFeatureCard ? "" : "feature-card-lp"}`}
                style={darkFeatureCard ? { background: "#121212", border: "1px solid rgba(255,255,255,0.08)" } : undefined}
              >
                <span
                  className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                  style={{ background: t.cardAccent }}
                />
                <div className="flex items-start gap-3 mb-4 mt-1">
                  <span
                    className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-[0.14em] uppercase ${darkFeatureCard ? "text-white" : "bg-accent text-accent-foreground"}`}
                    style={darkFeatureCard ? { background: t.cardAccent } : undefined}
                  >
                    Bônus
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-bold text-base leading-tight ${darkFeatureCard ? "text-white" : "text-zinc-950"}`}>{b.title}</h3>
                    <p className={`text-sm mt-1.5 leading-relaxed whitespace-pre-line ${darkFeatureCard ? "text-white/60" : "text-gray-600"}`}>
                      {b.description}
                    </p>
                  </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden">
                  <img src={b.image} alt={b.alt} className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <CtaButton
              checkoutLink={checkoutLink}
              className={activeCta} style={activeCtaStyle}
            >
              {activeCtaLabel}
            </CtaButton>
          </motion.div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: depoimentosBgOverride ?? t.depoimentosBg }}>
        <div className="max-w-2xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs tracking-[0.18em] uppercase font-bold mb-3 ${t.depoimentosBadgeClass}`}
              style={{ background: t.depoimentosBadgeBg }}
            >
              Resultados reais
            </span>
            <h2 className={`text-2xl md:text-3xl font-extrabold leading-tight mb-2 ${t.depoimentosTitleClass}`}>
              {activeDepoimentosTitle}
            </h2>
            <p className={`text-sm ${t.depoimentosSubClass}`}>
              Resultado de afiliadas que usam todos os dias
            </p>
          </motion.div>

          {[
            {
              num: "01",
              title: "Afiliadas que viajaram com as comissões",
              desc: "Começaram do zero e usaram os ganhos da Shopee para realizar viagens.",
              items: [testimonials[0], testimonials[1]],
              delay: 3000,
            },
            {
              num: "02",
              title: "Todo dia chegam agradecimentos assim",
              desc: "Recebemos depoimentos como esse no WhatsApp todos os dias.",
              items: [testimonials[2], testimonials[6]],
              delay: 3600,
            },
            {
              num: "03",
              title: depoimentosGroup3Title ?? "Sem saber nada de tecnologia, criando grupos e gerando comissão",
              desc: "Mulheres comuns, sem experiência, que começaram do zero e já estão viralizando vídeos e ganhando comissão na Shopee.",
              items: depoimentosGroup3Items ?? [testimonials[3], testimonials[4], testimonials[5]],
              delay: 4200,
            },
          ].map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="mb-5"
            >
              <div className="rounded-2xl p-4 pb-5 bg-gray-100">
                <div className="mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 text-zinc-400 font-extrabold text-xs tracking-widest pt-1">
                    {group.num}
                  </span>
                  <div>
                    <p className="text-zinc-900 font-extrabold text-base leading-snug mb-1">
                      {group.title}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {group.desc}
                    </p>
                  </div>
                </div>
                <Carousel opts={{ loop: true, align: "center" }} plugins={[Autoplay({ delay: group.delay, stopOnInteraction: false })]}>
                  <CarouselContent className="-ml-3">
                    {group.items.map((t, i) => (
                      <CarouselItem key={i} className="pl-3 basis-[88%] sm:basis-1/2">
                        <div className="rounded-xl overflow-hidden">
                          <img src={t.image} alt={t.alt} className="w-full h-auto object-cover" loading="lazy" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CtaButton
              checkoutLink={checkoutLink}
              className="flex items-center justify-center w-full text-center text-base bg-white text-black font-bold rounded-full py-4 px-6 hover:bg-white/90 transition-colors shadow-lg"
            >
              {activeDepoimentosCtaLabel}
            </CtaButton>
          </motion.div>

        </div>
      </section>

      {/* ===== POR QUE LIBERAMOS ===== */}
      {showPorQueLiberamos && <section className="bg-background py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs tracking-[0.18em] uppercase font-bold mb-4">
              teste com segurança
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-3">
              Chega de comprar promessa.
              <br />
              <span className="text-primary">Teste antes de pagar.</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Muita afiliada já viu promessa demais na internet. Por isso, liberamos 3 dias grátis para você entrar, testar por dentro e decidir depois.
            </p>
          </motion.div>

          {/* Comparativo */}
          <div className="grid gap-4 md:grid-cols-2 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-5 bg-red-50 border-2 border-red-500"
            >
              <h4 className="text-red-700 font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-extrabold">
                  ✕
                </span>
                Sem o teste grátis
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Compra sem ver por dentro.",
                  "Confia só em prints e promessa.",
                  "Medo de cair em golpe.",
                  "Só descobre depois se faz sentido.",
                ].map((t, i) => (
                  <li key={i} className="text-red-900/70 text-sm flex gap-2">
                    <span className="text-red-600 font-bold">–</span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-5 border-2 border-green-600 bg-green-50 relative"
              style={{ boxShadow: "0 8px 24px hsl(142 76% 36% / 0.25), 0 2px 6px hsl(142 76% 30% / 0.15)" }}
            >
              <h4 className="text-green-700 font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                Com 3 dias grátis
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Entra sem pagar hoje.",
                  activeComparativoTestItem,
                  "Cancela antes e não paga nada.",
                  "Se continuar, 7 dias de garantia.",
                ].map((t, i) => (
                  <li key={i} className="text-green-900 text-sm flex gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-extrabold text-foreground leading-tight text-center mb-5"
          >
            Como funciona o teste grátis
          </motion.h3>

          <div className="grid gap-3 mb-6">
            {[
              { n: "01", t: "Ative seus 3 dias grátis." },
              { n: "02", t: "Cadastre o cartão. Nada é cobrado hoje." },
              { n: "03", t: "Teste tudo de graça." },
              { n: "04", t: "Continue por R$34,90/mês ou cancele antes." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="feature-card-lp p-4 flex items-center gap-4"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  {s.n}
                </span>
                <p className="text-foreground text-sm font-semibold">{s.t}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <CtaButton
              checkoutLink={checkoutLink}
              className={activeCta} style={activeCtaStyle}
            >
              {activeCtaLabel}
            </CtaButton>
          </motion.div>
        </div>
      </section>}

      {/* ===== OFERTA ===== */}
      <section id="oferta" className="py-16 px-4 bg-secondary">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-black leading-tight">
              {activeOfertaHeading}
            </h2>
            <p className="text-muted-foreground text-sm mt-3">
              {activeOfertaSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="feature-card-lp p-6 text-left"
          >
            <div className="mb-5 -mx-6 -mt-6 overflow-hidden">
              <div className="bg-accent py-2.5 px-4 text-center">
                <span className="text-black text-sm font-extrabold tracking-wide">{activeOfertaBannerLabel}</span>
              </div>
              <img src={activeOfertaImage} alt="Kit Afiliada IA" className="w-full h-auto" />
            </div>

            <h3 className="font-bold text-lg text-zinc-950 text-center mb-5">{activeOfertaTitle}</h3>

            <ul className="space-y-3 mb-6">
              {activeOfertaItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="check-badge">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-6 py-4 border-y border-border">
              <p className="text-red-500 line-through text-sm">De R$97,45</p>
              {showTrialPricing ? (
                <>
                  <p className="text-5xl font-extrabold mt-1 text-[#008526]">R$0,00</p>
                  <p className="text-muted-foreground text-xs mt-2">Depois R$34,90/mês</p>
                </>
              ) : (
                <p className="text-5xl font-extrabold mt-1 text-[#008526]">R${paidPrice ?? "17,90"}</p>
              )}
            </div>

            <CtaButton
              checkoutLink={checkoutLink}
              variant="direct"
              className="flex items-center justify-center w-full text-center text-base bg-[#008526] hover:bg-[#006e1f] text-white font-bold rounded-full py-4 px-6 transition-colors"
            >
              {activeOfertaCtaLabel}
            </CtaButton>

            {showTrialNote && (
              <p className="text-xs text-muted-foreground text-center mt-4">
                Você cadastra o cartão apenas para ativar seu teste. Nenhum valor é cobrado hoje.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== GARANTIA ===== */}
      <section
        className="py-20 px-4"
        style={{ background: t.garantiaBg }}
      >
        <div className="max-w-md mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img src={garantiaSelo} alt="Selo de garantia" className="w-48 h-auto mb-6 drop-shadow-2xl" />
            <h2
              className="text-2xl md:text-3xl font-extrabold text-white mb-4"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              {activeGarantiaTitle}
            </h2>
            {activeGarantiaBody ? (
              <p className="text-white/85 text-sm leading-relaxed max-w-sm text-left">{activeGarantiaBody}</p>
            ) : (
              <div className="text-white/85 text-sm leading-relaxed max-w-sm space-y-3 text-left">
                <p>Você tem 3 dias para entrar, acessar a plataforma e ver se o Afiiada Prime faz sentido para você.</p>
                <p>Se não quiser continuar, cancele antes do fim do teste e não pague nada.</p>
                <p>Se continuar, a assinatura será de R$34,90/mês. E mesmo após a cobrança, você ainda tem <strong className="text-white">7 dias de garantia</strong> para pedir reembolso caso não goste.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs tracking-[0.18em] uppercase font-bold mb-3">
              Tire suas dúvidas
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Perguntas Frequentes</h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {activeFaqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border bg-card rounded-xl px-5 shadow-card"
              >
                <AccordionTrigger className="text-foreground text-sm font-semibold text-left hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-primary py-8 text-center">
        <p className="text-primary-foreground/50 text-[10px]">
          Afiiada Prime Shopee &middot; Todos os direitos reservados
        </p>
      </div>
    </>
  );
};

export default LandingBody;
