# Pet Town — Pet Shop & Clínica Veterinária (Casa Forte, Recife)

Aplicação web moderna, responsiva e de alta performance desenvolvida com **Next.js 16 (App Router)**, **Tailwind CSS v4** e **TypeScript**, equipada com ícones da biblioteca **Lucide React**.

---

## 🐾 Funcionalidades Implementadas

- **Header & Navegação Sticky**: Barra de acento temática, links de navegação suave, drawer mobile animado e botão de ação direta.
- **Hero Section Atraente**: Destaques visuais, micro-estatísticas de satisfação e CTAs claros para WhatsApp.
- **Sobre Nós (Pilares de Cuidado)**: Equipe qualificada, cuidado 360°, ambiente acolhedor e protocolos de biossegurança.
- **Nossos Tratamentos (Serviços)**:
  - Banho & Tosa Especializado (produtos hipoalergênicos e toalhas individuais).
  - Clínica Veterinária & Vacinas Importadas (V10, Raiva, Giárdia).
  - Pet Shop & Farmácia Completa.
  - Seção especial para pets idosos e com necessidades específicas.
- **Simulador Interativo de Agendamento**:
  - Escolha de espécie (Cão ou Gato).
  - Porte do pet e nome.
  - Seleção dinâmica de serviços.
  - Preferência de turno (Manhã / Tarde).
  - Geração automática de link do WhatsApp com mensagem pré-formatada em 1 clique!
- **Depoimentos de Tutores Locais**: Avaliações de clientes de Casa Forte e Recife.
- **Localização & Horários**: Mapa integrado do Google Maps, botão para Waze/Google Maps e endereço completo (Rua Jader de Andrade, nº 71).
- **FAQ Sanfonado (Perguntas Frequentes)**: Dúvidas sobre vacinação, toalhas esterilizadas, agendamentos e manejo calmo sem sedativos.
- **Canais de Contato Direto**: WhatsApp, Telefone e Instagram.
- **Botão Flutuante do WhatsApp**: Efeito de pulso animado para conversão contínua.

---

## 🚀 Como Executar

### Opção 1: Via atalho rápido (Windows)
Dê um duplo clique no arquivo [`iniciar.bat`](./iniciar.bat).

### Opção 2: Via terminal
```bash
# Instalar dependências (já instaladas)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Iniciar build de produção
npm run start
```

O servidor iniciará em [http://localhost:3000](http://localhost:3000).

---

## 📁 Estrutura do Projeto

```
e:\22-Pet-Town\
├── src\
│   ├── app\
│   │   ├── globals.css      # Design tokens, cores da marca e Tailwind CSS
│   │   ├── layout.tsx       # Metadata, SEO e OpenGraph
│   │   └── page.tsx         # Composição da Landing Page
│   └── components\
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── BookingCalculator.tsx
│       ├── TestimonialsSection.tsx
│       ├── LocationSection.tsx
│       ├── FaqSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── FloatingWhatsApp.tsx
├── public\                  # Favicons e mídias estáticas
├── iniciar.bat              # Script de inicialização rápida
├── next.config.ts
├── tsconfig.json
└── package.json
```
