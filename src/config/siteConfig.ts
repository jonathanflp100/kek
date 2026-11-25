/**
 * Configuração centralizada do site Indústria K&K Alimentos – Moinho de Trigo K&K.
 * Edite textos, URLs (YouTube, Spotify, WhatsApp, redes sociais) e caminhos de imagens
 * diretamente neste arquivo.
 */

export const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
export const SPOTIFY_PLAYLIST_URL =
  'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6';

export const WHATSAPP_NUMBER = '5587981054763';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site da Indústria K&K Alimentos e gostaria de falar com a equipe sobre a Farinha de Trigo K&K.';

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export interface RecipeItem {
  id: string;
  title: string;
  subtitle: string;
  image: string | null;
  imageAlt: string;
  prepTime: string;
  yield: string;
  difficulty: string;
  flourTip: string;
  ingredients: string[];
  steps: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  city?: string;
  avatar: string | null;
  initials: string;
}

export interface PlaylistTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  action?: 'terms';
}

export const siteConfig = {
  brand: {
    name: 'Indústria K&K Alimentos',
    subtitle: 'Moinho de Trigo K&K',
    city: 'São João - PE',
    /**
     * Se quiser usar sua própria imagem de logo circular (PNG/SVG),
     * basta preencher o caminho abaixo (ex.: '/src/assets/images/logo-kek.png').
     * Quando null, o site exibe o brasão circular vetorial da K&K.
     */
    logoUrl: null as string | null,
  },

  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'contato', label: 'Contato', href: '#contato' },
    { id: 'blog', label: 'Blog', href: '#receitas' },
    { id: 'termos', label: 'Termos e Condições', href: '#termos', action: 'terms' },
    { id: 'moinho', label: 'Moinho', href: '#moinho' },
  ] as NavItem[],

  hero: {
    lineOne: 'Qualidade',
    lineTwo: 'incomparável',
    image: '/src/assets/images/hero_artisan_bread_1795619420067.jpg',
    imageAlt: 'Baguetes e pães rústicos artesanais sobre saco de juta polvilhado com farinha de trigo',
  },

  about: {
    titlePrefix: 'Refinamento, qualidade e paixão',
    titleScript: 'para panificação',
    description:
      'Industria KeK é arte. É gastronomia para além do ordinário. É fabricação industrial de alta performance dos grandes produtores de biscoitos, bolachas e pães com a melhor farinha extraída da parte mais nobre do trigo. Pureza garantida, qualidade incomparável, resultados impecáveis.',
    ctaLabel: 'Entre em contato',
    image: '/src/assets/images/flour_bags_lineup_1795619400022.jpg',
    imageAlt: 'Sacos de farinha de trigo Indústria K&K Alimentos lado a lado com espigas de trigo',
  },

  history: {
    titlePrefix: 'Nossa história com',
    titleScript: 'Farinha de trigo',
    image: '/src/assets/images/mill_storefront_facade_1795619412191.jpg',
    imageAlt: 'Fachada da Indústria K&K Alimentos – Moinho de Trigo em São João - PE',
    paragraphs: [
      'A indústria KeK nasceu da paixão e conhecimento da família Pereira sobre o mercado de panificação e confeitaria. Com vasta experiência na distribuição de farinha de trigo, identificamos as reais necessidades dos nossos clientes e nos dedicamos a oferecer produtos de excelência.',
      'Fundada por José Romildo, Eusita Rodrigues e seus quatro filhos, a KeK é a realização de um antigo sonho familiar. Unidos pela determinação e amor pela panificação, construímos uma empresa que valoriza qualidade e inovação.',
      'Hoje, a KeK é sinônimo de confiança, produzindo farinhas que atendem aos mais altos padrões do mercado. Nossa missão é clara: superar as expectativas de nossos clientes com produtos que respeitam as tradições e incorporam a inovação.',
      'Venha conhecer a KeK e descubra como nossa história com a farinha de trigo pode contribuir para o seu sucesso.',
    ],
  },

  millStructure: {
    titlePrefix: 'Veja nossa estrutura de',
    titleScript: 'Moinho',
    subtitle:
      'Uma estrutura de altíssimo nível para produzir os melhores e mais sofisticados tipos de Farinha de Trigo.',
    youtubeEmbedUrl: YOUTUBE_VIDEO_URL,
    videoTitle: 'Estrutura do Moinho de Trigo K&K – São João - PE',
    ctaLabel: 'Entre em contato',
  },

  recipesSection: {
    titlePrefix: 'Receitas Super',
    titleScript: 'Deliciosas',
    description:
      'Do coração do trigo para o coração da sua receita. Receitas diferenciadas, autênticas e refinadas para inspirar uma explosão artística aí na sua cozinha.',
    cardSubtitle: 'Imperdível simplesmente Delicioso',
    cardButtonLabel: 'Ver completa',
    ctaLabel: 'Entre em contato',
    items: [
      {
        id: 'bolacha-sete-capas',
        title: 'Bolacha sete capas',
        subtitle: 'Imperdível simplesmente Delicioso',
        image: '/src/assets/images/recipe_bolacha_sete_capas_1795619380203.jpg',
        imageAlt: 'Bolacha sete capas dourada e folhada servida com café',
        prepTime: '55 min',
        yield: '24 unidades',
        difficulty: 'Média',
        flourTip:
          'A Farinha de Trigo K&K garante a elasticidade ideal para laminar as sete camadas finíssimas sem rasgar a massa.',
        ingredients: [
          '500 g de Farinha de Trigo K&K (sem fermento)',
          '200 ml de leite integral morno',
          '80 g de manteiga ou margarina de boa qualidade (em temperatura ambiente)',
          '10 g de sal refinado',
          '15 g de açúcar cristal',
          '5 g de fermento biológico seco',
          'Manteiga derretida e Farinha K&K extra para folhear as camadas',
        ],
        steps: [
          'Em uma tigela grande, dissolva o fermento biológico e o açúcar no leite morno e deixe descansar por 5 minutos.',
          'Adicione a Farinha de Trigo K&K, o sal e a manteiga. Sove bem por cerca de 8 a 10 minutos até obter uma massa lisa, elástica e homogênea.',
          'Deixe a massa descansar coberta com um pano limpo por 20 minutos.',
          'Abra a massa com um rolo em formato retangular bem fino. Pincele manteiga derretida e polvilhe uma camada leve de farinha.',
          'Faça dobras sucessivas (dobra em três, gire 90° e repita) até completar o processo de 7 camadas, sempre pincelando levemente com manteiga entre as dobras.',
          'Abra novamente na espessura de 0,5 cm, corte em retângulos tradicionais, fure levemente com um garfo e disponha em assadeira untada.',
          'Asse em forno preaquecido a 200 °C por 18 a 22 minutos até dourar levemente e ficar crocante por fora e folhada por dentro.',
        ],
      },
      {
        id: 'bolacha-coquinho',
        title: 'Bolacha Coquinho',
        subtitle: 'Imperdível simplesmente Delicioso',
        image: null,
        imageAlt: 'Bolacha Coquinho artesanal crocante com coco ralado',
        prepTime: '40 min',
        yield: '35 unidades',
        difficulty: 'Fácil',
        flourTip:
          'Com a pureza da Farinha de Trigo K&K, a Bolacha Coquinho atinge crocância equilibrada e textura que derrete na boca.',
        ingredients: [
          '400 g de Farinha de Trigo K&K',
          '150 g de açúcar refinado',
          '120 g de manteiga sem sal em ponto de pomada',
          '100 g de coco ralado seco (fino ou médio)',
          '2 ovos inteiros em temperatura ambiente',
          '1 colher (chá) de fermento químico em pó',
          '1 pitada de sal e 2 colheres (sopa) de leite de coco',
        ],
        steps: [
          'Bata a manteiga com o açúcar até formar um creme claro e fofo.',
          'Acrescente os ovos um a um, o leite de coco e misture bem até incorporar.',
          'Adicione o coco ralado, a pitada de sal e vá incorporando a Farinha de Trigo K&K peneirada com o fermento até formar uma massa macia que solte das mãos.',
          'Modele pequenas bolinhas do tamanho de uma noz, achate levemente com um garfo ou com a palma da mão e coloque em assadeira forrada com papel manteiga.',
          'Leve ao forno preaquecido a 180 °C por cerca de 15 a 18 minutos, até que as bordas fiquem delicadamente douradas.',
          'Deixe esfriar completamente sobre uma grade para garantir a crocância perfeita antes de armazenar em pote bem fechado.',
        ],
      },
      {
        id: 'pao-frances',
        title: 'Pão Francês',
        subtitle: 'Imperdível simplesmente Delicioso',
        image: '/src/assets/images/recipe_pao_frances_1795619423009.jpg',
        imageAlt: 'Pão Francês quentinho com casca crocante e pestana dourada',
        prepTime: '2h 30min',
        yield: '12 unidades',
        difficulty: 'Média',
        flourTip:
          'A força de glúten balanceada da Farinha de Trigo K&K proporciona salto de forno impressionante, pestana aberta e miolo aerado.',
        ingredients: [
          '500 g de Farinha de Trigo K&K para Panificação',
          '300 ml de água bem gelada',
          '10 g de sal refinado',
          '10 g de açúcar',
          '5 g de fermento biológico seco instantâneo',
          '10 g de manteiga ou gordura vegetal',
        ],
        steps: [
          'Misture a Farinha de Trigo K&K, o açúcar e o fermento seco na tigela. Adicione a água gelada aos poucos enquanto mistura.',
          'Quando a massa começar a ganhar corpo, acrescente o sal e a manteiga e sove até atingir o ponto de véu (cerca de 12 minutos na mão ou 8 na batedeira com gancho).',
          'Divida a massa em porções de aproximadamente 65 g a 70 g, boleie e deixe descansar por 15 minutos cobertas.',
          'Modele os filões de pão francês enrolando com firmeza para criar tensão na superfície e acomode em assadeira com a emenda para baixo.',
          'Deixe fermentar em local protegido de vento por cerca de 1h15 a 1h30, até dobrar de volume.',
          'Faça o corte característico no topo com lâmina bem afiada, borrife água na superfície e leve ao forno preaquecido a 220 °C com vapor nos primeiros 8 minutos.',
          'Asse por 18 a 20 minutos no total até a casca ficar bem dourada, fina e crocante.',
        ],
      },
    ] as RecipeItem[],
  },

  familyBanner: {
    titlePrefix: 'Faça parte da Família',
    titleScript: 'K&K',
    image: '/src/assets/images/banner_baker_tray_1795619427438.jpg',
    imageAlt: 'Padeiro segurando bandeja de madeira repleta de pães artesanais recém-assados',
  },

  community: {
    titlePrefix: 'Chamada para uma comunidade',
    titleScript: 'Especial',
    description:
      'Uma boa companhia – mesmo à distância – torna o ato de cozinhar muito mais catártico, não acha? Então aproveite e entre para nosso clube que já conta com mais de 30 mil pessoas cozinhando juntas, apaixonadas por nossa puríssima e pela culinária.',
    highlightText: 'Todo mês você recebe em seu e-mail dicas e receitas incomparáveis.',
    submitLabel: 'Enviar',
    successTitle: 'Bem-vindo(a) à nossa comunidade!',
    successMessage:
      'Seu cadastro foi salvo com sucesso. Em breve você receberá nossas dicas exclusivas e receitas com Farinha de Trigo K&K.',
    storageKey: 'kek_alimentos_comunidade_inscricoes',
  },

  playlist: {
    title: 'Passagem só de ida para universo K&K',
    paragraphs: [
      'A música é o meio de transporte mais eficaz do universo. Ela é capaz de nos levar para lugares incríveis em questão de segundos. Por isso, nós da Família Pereira fizemos uma playlist com músicas incríveis e selecionadas a dedo para você curtir as receitas de com Farinha de Trigo.',
      'Afivele os cintos e vamos entrar no clima, com músicas ótimas para se inspirar e fazer as melhores receitas.',
    ],
    ctaLabel: 'Nossa Play List',
    spotifyUrl: SPOTIFY_PLAYLIST_URL,
    playlistName: 'Universo K&K – Cozinha & Tradição',
    playlistCurator: 'Família Pereira · Moinho K&K',
    tracks: [
      { id: 't1', title: 'Cheiro de Pão Quentinho', artist: 'Acústico Nordestino', duration: '3:24' },
      { id: 't2', title: 'Manhã no Agreste', artist: 'Trio Serenata', duration: '3:51' },
      { id: 't3', title: 'Café na Mesa', artist: 'Bossa & Violão', duration: '2:58' },
      { id: 't4', title: 'Tradição de Família', artist: 'Raízes de Pernambuco', duration: '4:12' },
    ] as PlaylistTrack[],
  },

  testimonials: [
    {
      id: 'francisco-ribeiro',
      quote:
        'Venho agradecer por todas as receitas maravilhosas que recebo de vocês. Amei! Aqui em casa não falta farinha K&K, amo demais. Sempre falo para as pessoas amigas sobre essa farinha.',
      name: 'Francisco Ribeiro',
      role: 'Padeiro',
      avatar: '/src/assets/images/baker_portrait_francisco_1795619419776.jpg',
      initials: 'FR',
    },
    {
      id: 'maria-silva',
      quote:
        'Desde que passamos a utilizar a Farinha de Trigo K&K na nossa confeitaria, a leveza das massas e o rendimento das fornadas elevaram o padrão de todos os nossos bolos e biscoitos.',
      name: 'Maria Silva',
      role: 'Confeiteira',
      avatar: '/src/assets/images/baker_portrait_maria_1795619500728.jpg',
      initials: 'MS',
    },
    {
      id: 'carlos-mendonca',
      quote:
        'Trabalho há mais de vinte anos com panificação em Pernambuco e poucas farinhas entregam tanta regularidade e crocância no pão francês quanto a K&K. Parceria de confiança.',
      name: 'Carlos Mendonça',
      role: 'Mestre Padeiro',
      avatar: null,
      initials: 'CM',
    },
  ] as TestimonialItem[],

  footer: {
    contactTitle: 'Contato',
    phone: '(87) 9 8105-4763',
    address: 'Sít. Frexeiras, Rod PE 177 Km 06 — SÃO JOÃO - PE',
    email: 'contato@industriakek.com.br',
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
    copyrightPrefix: '© 2026 Industria K&k Alimentos – Todos os direitos reservados. – Desenvolvido por',
    developerName: 'kleytonPereira',
  },

  terms: {
    title: 'Termos e Condições de Uso',
    updatedAt: 'Atualizado em 2026',
    sections: [
      {
        heading: '1. Sobre a Indústria K&K Alimentos',
        body: 'Este site institucional apresenta informações sobre a Indústria K&K Alimentos – Moinho de Trigo K&K, localizada em Sít. Frexeiras, Rod PE 177 Km 06, São João - PE, seus produtos, receitas e canais oficiais de atendimento.',
      },
      {
        heading: '2. Comunidade e Recebimento de Receitas',
        body: 'Ao se cadastrar no formulário da Comunidade K&K, você concorda em receber periodicamente dicas de panificação, receitas e novidades sobre nossos produtos. Seus dados não são comercializados com terceiros.',
      },
      {
        heading: '3. Propriedade Intelectual',
        body: 'Marcas, receitas editoriais, fotografias e conteúdos apresentados neste portal pertencem à Indústria K&K Alimentos ou são utilizados sob licença, sendo vedada a reprodução comercial sem autorização prévia.',
      },
      {
        heading: '4. Atendimento e Contato',
        body: 'Para dúvidas comerciais, distribuição industrial ou solicitações referentes aos seus dados, entre em contato pelo e-mail contato@industriakek.com.br ou WhatsApp (87) 9 8105-4763.',
      },
    ],
  },
};
