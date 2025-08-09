# Site Dra. Maíra - Pediatria e Psicanálise

Site estático responsivo para Dra. Maíra, desenvolvido com HTML, TailwindCSS e JavaScript puro.

## 🎨 Design

O site foi inspirado nas referências fornecidas e segue uma identidade visual acolhedora e elegante:

- **Tipografia**: Marcellus para títulos, Inter para textos
- **Cores**: Paleta terrosa com rosa como cor principal (#B87A6B)
- **Estilo**: Bordas arredondadas, sombras leves, espaçamento generoso
- **Responsivo**: Mobile-first design

## 📁 Estrutura do Projeto

```
sitemaira/
├── index.html              # Página principal
├── blog.html              # Página do blog
├── posts/                 # Posts individuais do blog
│   └── desenvolvimento-infantil.html
├── js/
│   └── main.js           # JavaScript com funcionalidades
├── src/
│   └── input.css         # CSS de entrada do Tailwind
├── dist/
│   └── output.css        # CSS compilado (gerado)
├── elementos/            # Imagens e assets
├── tailwind.config.js    # Configuração do Tailwind
├── package.json          # Dependências
└── README.md
```

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd sitemaira
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Compile o CSS do Tailwind**
   ```bash
   npm run build
   ```

4. **Para desenvolvimento (com watch)**
   ```bash
   npm run dev
   ```

5. **Abra o site**
   - Abra `index.html` no navegador
   - Ou use um servidor local como Live Server (VS Code)

## 📱 Funcionalidades

### Página Principal (index.html)
- **Navbar fixa** com menu responsivo
- **Seção Hero** com call-to-action
- **Sobre Mim** com apresentação da Dra. Maíra
- **Consultório** com informações de localização e mapa
- **Especialidades** (Pediatria, Hebiatria, Psicanálise)
- **Mídia** com participações em TV e revistas
- **FAQ** com accordion interativo
- **Contato** com informações completas
- **Footer** com links e redes sociais

### Blog (blog.html)
- Lista de posts em grid responsivo
- Newsletter signup
- Links para posts individuais

### Posts Individuais
- Layout completo para artigos
- Botões de compartilhamento
- Posts relacionados
- Call-to-action para agendamento

## 🎯 Funcionalidades JavaScript

- **Menu mobile** com toggle
- **FAQ accordion** com animações
- **Scroll suave** para âncoras
- **Navbar dinâmica** com background no scroll
- **Lazy loading** para imagens
- **Animações** nos botões

## 🎨 Personalização

### Cores (tailwind.config.js)
```javascript
colors: {
  brand: '#B87A6B',        // Rosa terroso principal
  'brand-light': '#E6CFC7', // Fundo claro
  'brand-dark': '#8B4E3F',  // Tom mais escuro
  'neutral-light': '#F7F5F2', // Fundo neutro claro
  'neutral-dark': '#2E2E2E',  // Texto principal
  accent: '#A6B5A8',       // Verde acinzentado
}
```

### Fontes
- **Marcellus**: Títulos e headings
- **Inter**: Textos e botões

## 📸 Imagens Necessárias

Crie a pasta `elementos/` e adicione as seguintes imagens:

### Principais
- `logomaira.png` - Logo da Dra. Maíra
- `dra-maira-hero.jpg` - Foto principal da Dra. Maíra
- `dra-maira-sobre.jpg` - Foto da Dra. Maíra em consulta
- `dra-maira-avatar.jpg` - Avatar para posts do blog

### Consultório
- `consultorio-1.jpg` - Foto do consultório
- `consultorio-2.jpg` - Sala de espera
- `consultorio-externo.jpg` - Fachada do consultório

### Blog
- `blog-post-1.jpg` - Desenvolvimento infantil
- `blog-post-2.jpg` - Alimentação infantil
- `blog-post-3.jpg` - Saúde mental adolescente
- `blog-post-4.jpg` - Vacinação infantil
- `blog-post-5.jpg` - Sono infantil
- `blog-post-6.jpg` - Psicanálise infantil

### Mídia
- `tv-cultura.jpg` - Participação TV Cultura
- `cnn.jpg` - Participação CNN
- `revista.jpg` - Participação revista

### Outros
- `favicon.ico` - Ícone do site

## 🔧 Configurações

### WhatsApp
Substitua o número do WhatsApp nos links:
```html
<a href="https://wa.me/5511999999999" target="_blank">
```

### Google Maps
Substitua o iframe do Google Maps com o endereço correto:
```html
<iframe src="https://www.google.com/maps/embed?pb=...">
```

### E-mail
Substitua o e-mail de contato:
```html
<a href="mailto:contato@dramaira.com.br">
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

Para fazer deploy do site:

1. **Compile o CSS final**
   ```bash
   npm run build
   ```

2. **Faça upload dos arquivos** para seu servidor web:
   - `index.html`
   - `blog.html`
   - `posts/` (pasta completa)
   - `js/` (pasta completa)
   - `dist/output.css`
   - `elementos/` (pasta completa)

3. **Configure o servidor** para servir arquivos estáticos

## 📞 Suporte

Para dúvidas ou suporte:
- E-mail: contato@dramaira.com.br
- WhatsApp: (11) 99999-9999

## 📄 Licença

Este projeto foi desenvolvido especificamente para Dra. Maíra. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para cuidar de você**
