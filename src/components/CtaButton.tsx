import { useState, useEffect, ReactNode, CSSProperties } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CtaButtonProps {
  checkoutLink: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  variant?: "scroll" | "modal" | "direct";
}

const CtaButton = ({ checkoutLink, className, style, children, variant = "scroll" }: CtaButtonProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const existing = document.getElementById("vturb-oferta-script");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "vturb-oferta-script";
    s.src = "https://scripts.converteai.net/f3993fb3-b7fc-4628-bf7a-d82c39d224ab/players/6a1b44e2e6e507e5f58321a4/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, [open]);

  if (variant === "direct") {
    return (
      <a href={checkoutLink} className={className} style={style}>
        {children}
      </a>
    );
  }

  if (variant === "scroll") {
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => {
          const el = document.getElementById("oferta");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
        {children}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-2xl px-4 py-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-foreground text-center leading-snug">
              Antes de continuar, entenda seu teste grátis
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground text-center -mt-1">
            Assista esse vídeo rápido para entender como funciona
          </p>

          <div
            className="w-full rounded-xl overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: `<vturb-smartplayer id="vid-6a1b44e2e6e507e5f58321a4" style="display:block;margin:0 auto;width:100%;max-width:400px;"></vturb-smartplayer>`,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CtaButton;
