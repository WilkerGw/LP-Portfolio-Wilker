# Script de Implementação Passo a Passo: Melhorias de Segurança

Este guia detalha as etapas para implementar as melhorias de segurança e boas práticas sugeridas na análise do repositório **LP-Portfolio-Wilker**.

## 1. Auditoria e Gerenciamento de Dependências

É crucial manter as dependências do projeto atualizadas e livres de vulnerabilidades conhecidas.

### Passo 1.1: Executar Auditoria de Segurança

Utilize o gerenciador de pacotes para verificar vulnerabilidades nas dependências do projeto.

```bash
# Navegue até o diretório do projeto
cd LP-Portfolio-Wilker

# Execute a auditoria de segurança (assumindo o uso de pnpm ou npm)
# Se você usa pnpm:
pnpm audit

# Se você usa npm:
npm audit
```

### Passo 1.2: Corrigir Vulnerabilidades

Após a auditoria, o gerenciador de pacotes geralmente oferece comandos para correção automática.

```bash
# Para pnpm:
pnpm audit --fix

# Para npm:
npm audit fix
```

**Observação:** Sempre revise as alterações feitas automaticamente para garantir que não quebrem a aplicação.

## 2. Proteção Anti-Spam no Formulário de Contato (Honeypot)

O formulário de contato atual (`src/components/Contact.tsx`) envia dados diretamente para o WhatsApp, o que é seguro, mas não impede o envio de spam por *bots*. A técnica *Honeypot* (campo isca) é uma solução simples e eficaz.

### Passo 2.1: Modificar `src/components/Contact.tsx`

Adicione um novo campo ao estado `formData` e inclua um campo oculto no formulário.

**A. Atualizar o Estado (`formData`)**

No início do arquivo, adicione um novo campo, por exemplo, `honeypot`:

```typescript
// src/components/Contact.tsx (Linhas 8-12)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // NOVO CAMPO: Campo isca para bots
    honeypot: "", 
  });
```

**B. Adicionar o Campo Oculto (Honeypot)**

Dentro do `<form>` (após a linha 162), adicione o campo `honeypot`. **É vital que este campo esteja visível apenas para bots (via CSS) e não para usuários reais.**

```typescript
// src/components/Contact.tsx (Adicionar após o campo 'email')

                {/* INÍCIO: CAMPO HONEYPOT (Visível apenas para bots) */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="honeypot" className="block text-sm font-medium text-gray-400 mb-2">
                    Não preencha este campo
                  </label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1} // Impede que usuários reais cheguem aqui via tab
                    autoComplete="off" // Impede preenchimento automático
                  />
                </div>
                {/* FIM: CAMPO HONEYPOT */}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
// ... restante do formulário
```

**C. Implementar a Verificação no `handleSubmit`**

Antes de processar o envio, verifique se o campo `honeypot` foi preenchido. Se foi, é um bot, e o envio deve ser ignorado silenciosamente.

```typescript
// src/components/Contact.tsx (Linhas 23-34)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // NOVO: Verificação Honeypot
    if (formData.honeypot) {
      console.log("Tentativa de spam detectada e bloqueada.");
      // Retorna sem enviar a mensagem, mas sem feedback visível ao bot
      return; 
    }

    const { name, email, message } = formData;

    const text = `*Novo Contato via Site*\n\n*Nome:* ${name}\n*Email:* ${email}\n*Mensagem:* ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5534993210534?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };
```

## 3. Gerenciamento de Chaves de API (Next.js)

O projeto utiliza a biblioteca `@google/generative-ai`. Se a chave de API for usada no lado do cliente (browser), ela será exposta. Se for usada no lado do servidor (Next.js API Routes), ela deve ser protegida.

### Passo 3.1: Utilizar Variáveis de Ambiente

Para garantir que a chave de API não seja exposta no código-fonte, utilize o sistema de variáveis de ambiente do Next.js.

1.  **Crie um arquivo `.env.local`** na raiz do projeto (se ainda não existir).
2.  **Adicione a chave de API** com o prefixo `NEXT_PUBLIC_` se for usada no cliente, ou sem o prefixo se for usada apenas no servidor (API Routes).

```
# .env.local
# Chave de API para o Google Gemini (APENAS se usada em API Routes ou Server Components)
GEMINI_API_KEY="SUA_CHAVE_SECRETA_AQUI"

# Se a chave for usada no cliente (o que não é recomendado para segredos):
# NEXT_PUBLIC_GEMINI_API_KEY="SUA_CHAVE_SECRETA_AQUI"
```

### Passo 3.2: Acessar a Chave no Código

Acesse a chave usando `process.env`.

```typescript
// Exemplo de uso em um Server Component ou API Route
const apiKey = process.env.GEMINI_API_KEY;

// Exemplo de uso em um Client Component (apenas se for NEXT_PUBLIC_)
const publicApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
```

**Recomendação de Segurança:** Se a chave for usada para gerar conteúdo (como no `AIShowcase.tsx`), o ideal é que a lógica de chamada da API seja movida para uma **API Route** do Next.js, mantendo a chave **não pública** (sem o prefixo `NEXT_PUBLIC_`) e protegida no servidor.

## 4. Boas Práticas de Desenvolvimento

### Passo 4.1: Revisão de Código e XSS

Embora o React/Next.js ofereça proteção nativa contra XSS, é uma boa prática revisar o código periodicamente.

*   **Evitar `dangerouslySetInnerHTML`:** Certifique-se de que este método não está sendo usado, a menos que seja estritamente necessário e o conteúdo injetado seja sanitizado de forma rigorosa.
*   **Sanitização de Entrada:** Se o projeto incluir campos de entrada que serão exibidos a outros usuários (o que não parece ser o caso de um portfólio estático), use bibliotecas como `DOMPurify` para sanitizar o HTML.

### Passo 4.2: Configuração de Headers de Segurança

Para aumentar a segurança contra ataques comuns, configure *headers* de segurança no `next.config.ts`.

```typescript
// next.config.ts

const nextConfig = {
  // ... outras configurações
  async headers() {
    return [
      {
        // Aplica a todos os caminhos
        source: '/:path*',
        headers: [
          // Previne ataques de clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Previne ataques XSS
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Política de Segurança de Conteúdo (CSP) - Exemplo Básico
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://wa.me;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

**Atenção:** A política `Content-Security-Policy` deve ser ajustada para incluir todas as fontes externas que seu site utiliza (como fontes, scripts de terceiros, etc.). O exemplo acima é um ponto de partida.

---
*Fim do Script de Implementação.*
