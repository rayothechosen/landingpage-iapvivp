# CLAUDE.md — Guia completo do projeto

## O que é esse projeto

Landing page de afiliada Shopee com modelo de **trial gratuito de 3 dias**. O produto se chama **Afiiada Prime** e a promessa central é: *+10.700 vídeos prontos com Inteligência Artificial que posta por você*.

Existe uma LP principal (`/`) e uma página VSL (`/video-3d`) onde o conteúdo é travado e liberado por um player de vídeo no minuto 6.

---

## Stack

- **React + TypeScript + Vite**
- **Tailwind CSS** com variáveis CSS customizadas (ver `src/index.css`)
- **shadcn/ui** para componentes base (Dialog, Accordion, Carousel, etc.)
- **Framer Motion** para animações
- **embla-carousel-autoplay** para autoplay nos carrosséis
- **react-router-dom** para rotas

---

## Estrutura de arquivos

```
src/
  pages/
    Index.tsx          ← LP principal (/)
    Video3d.tsx        ← Página VSL (/video-3d)
    NotFound.tsx
  components/
    LandingBody.tsx    ← Corpo completo da LP (seções reutilizadas nas duas páginas)
    CtaButton.tsx      ← Botão CTA com 3 variantes de comportamento
    ui/                ← Componentes shadcn/ui
  index.css            ← Design system (variáveis de cor, gradientes, classes utilitárias)
  App.tsx              ← Rotas
```

---

## Design system — LEIA ANTES DE MEXER

As cores e gradientes estão em `src/index.css` como variáveis CSS:

| Variável | Valor | Uso |
|---|---|---|
| `--primary` | Laranja `hsl(18 97% 48%)` | Cor principal da marca |
| `--accent` | Dourado `hsl(42 100% 58%)` | Badges, destaques em fundo claro |
| `--gradient-cta` | Degradê coral→laranja→dourado | Botões primários, destaques em headline |
| `--gradient-vibrant` | Degradê coral→laranja | Fundo da seção de depoimentos |
| `--coral` | Laranja escuro `hsl(13 99% 41%)` | Ícones, detalhes |

### Regras de contraste — IMPORTANTE

- **Fundo branco/claro** → use `bg-accent text-accent-foreground` para badges (dourado com texto escuro)
- **Fundo laranja** (`--gradient-vibrant`) → use `bg-white text-primary` para badges. **Nunca use `bg-accent` (dourado) em fundo laranja** — as cores conflitam
- **Texto em fundo laranja** → use `text-white` para títulos principais. Para subheadlines use `text-white/70` ou `text-white/80`
- **Texto preto em fundo laranja** → evite, o contraste não funciona

### Classes CSS customizadas (definidas em `src/index.css`)

- `.btn-primary` — botão laranja degradê com sombra e efeito shimmer
- `.feature-card-lp` — card branco com borda, sombra e border-radius
- `.highlight-pill` — pill com degradê laranja e texto branco
- `.check-badge` — ícone de check verde circular

---

## Componentes principais

### `LandingBody.tsx`

Recebe duas props:

```tsx
<LandingBody
  checkoutLink="https://..."  // link do checkout
  vslMode={false}             // true na página VSL (botão da oferta vai direto, sem modal)
/>
```

**Arrays de dados dentro do arquivo** (edite esses para personalizar o conteúdo):

- `features` — 2 cards principais da seção "O QUE VOCÊ RECEBE"
- `bannerCards` — 7 cards de bônus (seção "Bônus Exclusivos")
- `testimonials` — depoimentos (imagens externas via URL)
- `ofertaItems` — lista de itens do card da oferta
- `faqItems` — perguntas e respostas do FAQ

**Seções em ordem:**
1. `#conteudo` — O que você recebe (2 cards principais + 7 bônus)
2. Depoimentos (3 carrosséis temáticos em fundo laranja)
3. Por que liberamos (comparativo + como funciona)
4. `#oferta` — Card da oferta com preço e CTA
5. Garantia
6. FAQ
7. Footer

### `CtaButton.tsx`

Três variantes de comportamento:

```tsx
// Rola suavemente até #oferta (padrão — use em todos os botões fora do card da oferta)
<CtaButton variant="scroll" checkoutLink="...">TEXTO</CtaButton>

// Abre modal com vídeo VSL antes do checkout (use no botão do card da oferta na LP principal)
<CtaButton variant="modal" checkoutLink="...">TEXTO</CtaButton>

// Vai direto para o checkout sem modal (use no botão do card da oferta na página VSL)
<CtaButton variant="direct" checkoutLink="...">TEXTO</CtaButton>
```

O modal (`variant="modal"`) carrega o script vturb dinamicamente ao abrir. O ID do player e a URL do script ficam no `useEffect` dentro do componente — atualize se trocar o vídeo.

---

## Rotas ativas

| Rota | Arquivo | Oferta |
|---|---|---|
| `/lp-iadevideos` | `LpIaDeVideos.tsx` | IA de Vídeos — LP principal |
| `/video-iadevideos` | `VideoIaDeVideos.tsx` | IA de Vídeos — VSL |
| `/lp-grupos` | `LpGrupos.tsx` | Bot Grupos — LP |
| `/video-grupos` | `VideoGrupos.tsx` | Bot Grupos — VSL |
| `/lp-pvi` | `LpPvi.tsx` | PVI — LP |
| `/video-pvi` | `VideoPvi.tsx` | PVI — VSL |
| `/lp-vp` | `LpVp.tsx` | Vídeos Próprios — LP ⬅️ **FOCO ATUAL** |
| `/video-vp` | `VideoVp.tsx` | Vídeos Próprios — VSL |

> Para cada nova oferta: duplicate o par LP + Video correspondente, renomeie o componente e a rota, e atualize `CHECKOUT_LINK` e conteúdo.

---

## Páginas

### `LpIaDeVideos.tsx` — LP principal (`/lp-iadevideos`)

Estrutura:
1. Countdown bar (amarelo, 15 minutos regressivos)
2. Hero com headline + imagem de topo + CTA
3. Seção com player de vídeo VSL de apresentação
4. `<LandingBody>` completo

**Variáveis a editar:**
- `CHECKOUT_LINK` no topo do arquivo
- `bannerTopo` — URL da imagem de topo do hero

### `VideoIaDeVideos.tsx` — VSL IA de Vídeos (`/video-iadevideos`)

Estrutura:
1. Faixa topo "DE GRAÇA POR 3 DIAS"
2. Headline + player vturb
3. `div id="pagina" style="display:none"` — liberado pelo vturb no minuto configurado
4. Dentro do `#pagina`: setas animadas + `<LandingBody vslMode />`

**Para trocar o vídeo:** atualize o `id` do `vturb-smartplayer` e a URL do script no `useEffect`.

**Para trocar o checkout:** atualize `CHECKOUT_LINK` no topo do arquivo.

O vturb libera o `div#pagina` via botão configurado na plataforma com tipo "Mostrar conteúdo oculto", ID `pagina`, início no minuto desejado.

---

## Como adaptar para uma nova oferta

1. **Duplique `Index.tsx`** e/ou `Video3d.tsx` com novo nome
2. **Atualize `CHECKOUT_LINK`** para o link do novo produto
3. **Edite os arrays em `LandingBody.tsx`** (ou crie um novo LandingBody):
   - `features` — os 2 entregáveis principais (imagem + título + descrição)
   - `bannerCards` — os bônus (imagem + título + descrição)
   - `ofertaItems` — lista de itens da oferta
   - `faqItems` — perguntas frequentes
4. **Troque as imagens** — todas usam URLs externas (R2/CDN), basta atualizar as strings
5. **Atualize o player vturb** no modal (`CtaButton.tsx`) e na página VSL
6. **Registre a rota** em `App.tsx`

### Imagens — padrão usado

Todas as imagens são URLs externas no formato:
```
https://pub-087c3f92e3134b8cb358b6210b3554f5.r2.dev/NOME-DO-ARQUIVO.png
```

---

## Convenções visuais aprendidas

- **Foco total em mobile** — ignore desktop ao tomar decisões de layout
- **Texto inline com chips** — para headlines no mobile, use elementos `inline` que quebram naturalmente pela largura da tela. Evite `block` com palavras soltas em linhas separadas
- **Seção de depoimentos** — fundo `--gradient-vibrant` (laranja). Usar cards com `rgba(0,0,0,0.22)` de fundo para dar profundidade sem mudar o gradiente. Títulos em `text-white`, badges em `bg-white text-primary`
- **Não mudar cor de fundo** de seções sem proposta clara — preferir ajustar elementos internos
- **Badges/pills** seguem o padrão: `px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs tracking-[0.18em] uppercase font-bold`
- **Sem comentários óbvios no código** — apenas comentários de seção (`/* ===== NOME ===== */`)
