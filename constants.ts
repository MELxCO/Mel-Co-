import { Megaphone, Layout, Calendar, Video, PenTool, TrendingUp } from 'lucide-react';
import { Service, CaseStudy, Testimonial } from './types';

// Images from the prompt
export const BRAND_IMAGES = {
  office: "https://res.cloudinary.com/dm8mis5k2/image/upload/v1770885883/Capture_d_e%CC%81cran_2026-02-12_a%CC%80_09.44.31_yiym4d.png",
  team: "https://res.cloudinary.com/dm8mis5k2/image/upload/v1770885883/Capture_d_e%CC%81cran_2026-02-12_a%CC%80_09.44.25_zow7h8.png",
  meeting: "https://res.cloudinary.com/dm8mis5k2/image/upload/v1770885883/Capture_d_e%CC%81cran_2026-02-12_a%CC%80_09.44.09_ebwrjh.png",
  creative: "https://res.cloudinary.com/dm8mis5k2/image/upload/v1770885883/Capture_d_e%CC%81cran_2026-02-12_a%CC%80_09.44.15_ali8nr.png",
  strategy: "https://res.cloudinary.com/dm8mis5k2/image/upload/v1770885883/Capture_d_e%CC%81cran_2026-02-12_a%CC%80_09.44.20_xubmy6.png",
  logo: "https://res.cloudinary.com/dm8mis5k2/image/upload/v1768475844/M_C_couleurs_OK_depobv.png"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Stratégie de Communication',
    slug: 'strategie-communication',
    shortDescription: 'Audit, positionnement et plan de communication 360° pour dominer votre marché.',
    fullDescription: 'Une approche analytique pour définir votre ADN de marque et toucher votre cible en plein cœur.',
    icon: TrendingUp,
    image: BRAND_IMAGES.strategy
  },
  {
    id: '2',
    title: 'Événementiel Entreprise',
    slug: 'evenementiel-paris',
    shortDescription: 'Séminaires, lancements de produits et soirées corporate mémorables à Paris & IDF.',
    fullDescription: 'De la conception à la logistique, nous créons des moments uniques qui fédèrent vos équipes et clients.',
    icon: Calendar,
    image: BRAND_IMAGES.meeting
  },
  {
    id: '3',
    title: 'Brand Content & Social Media',
    slug: 'brand-content',
    shortDescription: 'Création de contenus visuels et éditoriaux qui engagent votre communauté.',
    fullDescription: 'Shooting photo, vidéo, rédaction : nous donnons de la voix à votre marque sur tous les canaux.',
    icon: Megaphone,
    image: BRAND_IMAGES.creative
  },
  {
    id: '4',
    title: 'Identité Visuelle & Web',
    slug: 'design-web',
    shortDescription: 'Logos, chartes graphiques et sites web performants pour une image forte.',
    fullDescription: 'Le design au service de la conversion. UX/UI moderne et direction artistique pointue.',
    icon: Layout,
    image: BRAND_IMAGES.office
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Lancement Produit Tech',
    client: 'InnovTech Paris',
    category: 'Événementiel',
    slug: 'innovtech-lancement',
    description: 'Organisation d\'une soirée de lancement immersive pour 500 personnes au cœur de Paris.',
    results: ['+500 participants', 'Retombées presse majeures', 'Satisfaction client 9.8/10'],
    image: BRAND_IMAGES.meeting
  },
  {
    id: '2',
    title: 'Refonte Identité Visuelle',
    client: 'Maison Bio',
    category: 'Branding',
    slug: 'maison-bio-rebranding',
    description: 'Modernisation complète de l\'image de marque d\'une chaîne de magasins bio en Île-de-France.',
    results: ['+30% de trafic en magasin', 'Nouveau site e-commerce', 'Charte graphique déployée'],
    image: BRAND_IMAGES.creative
  },
  {
    id: '3',
    title: 'Stratégie Social Media',
    client: 'StartImmo',
    category: 'Digital',
    slug: 'startimmo-social',
    description: 'Accompagnement annuel sur LinkedIn et Instagram pour générer des leads qualifiés.',
    results: ['+200% d\'engagement', 'Génération de 50 leads/mois', 'Communauté doublée'],
    image: BRAND_IMAGES.office
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sophie Martin',
    role: 'Directrice Marketing',
    company: 'Groupe Axa',
    content: 'Mel&Co a su comprendre nos enjeux business tout en apportant une touche créative rafraîchissante. Une agence pro et réactive.',
    rating: 5
  },
  {
    id: '2',
    author: 'Thomas Dubois',
    role: 'CEO',
    company: 'TechFlow',
    content: 'L\'événement organisé pour nos 10 ans était tout simplement parfait. La gestion logistique était impeccable.',
    rating: 5
  },
  {
    id: '3',
    author: 'Clara Yana',
    role: 'Fondatrice',
    company: 'Cosmétique Bio',
    content: 'Merci à l\'équipe pour la refonte de notre identité. Nous avons enfin une image à la hauteur de nos produits.',
    rating: 5
  }
];
