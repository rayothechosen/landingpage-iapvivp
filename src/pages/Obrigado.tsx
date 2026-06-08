import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 max-w-sm w-full"
      >
        {/* ícone */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-cta)" }}>
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>

        {/* logo */}
        <img
          src="https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/logo%20shopee.png"
          alt="Shopee"
          className="h-7 w-auto opacity-70"
        />

        {/* heading */}
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-950 leading-tight mb-2">
            Compra realizada com sucesso! 🎉
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Em breve você vai receber um e-mail com o seu acesso. Verifique a caixa de entrada e o spam.
          </p>
        </div>

        {/* botão gmail */}
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center gap-2 w-full text-base"
        >
          <Mail className="w-4 h-4" />
          Abrir meu Gmail
        </a>

        <p className="text-xs text-muted-foreground">
          Não encontrou? Cheque a pasta de <strong>Spam</strong> ou <strong>Promoções</strong>.
        </p>
      </motion.div>
    </div>
  );
};

export default Obrigado;
