# Personal do Idoso - Jundiaí/SP 🏋️‍♂️👵

Landing Page de alta conversão para o serviço de treinamento físico funcional e personalizado em domicílio para a terceira idade em Jundiaí - SP e região.

---

## 🌟 Sobre o Projeto

O **Personal do Idoso** é uma plataforma desenvolvida com foco em acessibilidade, usabilidade e alta taxa de conversão (CRO) para atender idosos (60+) e seus familiares em busca de autonomia, equilíbrio e prevenção de quedas.

### Principais Características
- **Design Sóbrio & Acolhedor:** Estética clínica e profissional (sem visual de academia convencional de musculação ou atmosfera hospitalar).
- **Mobile First:** Textos com tipografia ampla (mínimo 16px), touch targets confortáveis e foto compacta integrada acima da dobra no mobile.
- **Micro-Animações Sutis & CRO:**
  - Efeito *Shimmer* dinâmico nos botões de CTA.
  - Botão flutuante de WhatsApp com anel pulsante suave (*pulse/ping*).
  - Animação de revelação suave na rolagem (*Scroll Reveal* via `IntersectionObserver`).
  - FAQ interativo em Accordion com chips de bairros de Jundiaí com links diretos para o WhatsApp.
  - Prova social com histórias reais e avaliação 4.9/5 estrelas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura acessível com tags semânticas (`<header>`, `<section>`, `<aside>`, `<footer>`, `<button>` com atributos `aria-*`).
- **Tailwind CSS (CDN):** Estilização moderna e responsiva com paleta personalizada (`slate` profundo e verde `emerald`).
- **JavaScript Puro (Vanilla JS):** Código leve e performático para o accordion do FAQ e o `IntersectionObserver` de revelação ao rolar.
- **Node.js (Servidor Local):** Script simples em Node.js (`server.js`) para servir os arquivos estáticos localmente na porta 3000.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js instalado na máquina.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/felipemartins008-create/personaldoidoso.git
   cd personaldoidoso
   ```

2. **Inicie o servidor local:**
   ```bash
   node server.js
   ```

3. **Acesse no navegador:**
   Abra `http://localhost:3000`

---

## 📁 Estrutura de Arquivos

```text
├── index.html              # Landing Page completa em arquivo único
├── server.js               # Servidor estático local Node.js
├── logo.svg                # Emblema oficial vetorizado em alta definição
├── foto-personal.jpg       # Foto do personal trainer especialista
├── foto-idoso-treino.jpg   # Foto da aluna em treinamento funcional
└── README.md               # Documentação do projeto
```

---

## 📞 Contato & Atendimento

- **Local:** Residências e condomínios em Jundiaí - SP (Malota, Chácara Urbana, Samambaia, Eloy Chaves, etc.)
- **WhatsApp:** [(11) 96134-3758](https://wa.me/5511961343758)
