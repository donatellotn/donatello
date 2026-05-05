export type Lang = 'fr' | 'en';

export const t = {
  fr: {
    // Header nav
    nav_about: 'À Propos',
    nav_menu: 'Menu',
    nav_reviews: 'Avis',
    nav_contact: 'Contact',
    nav_call: 'Appelez-nous',
    nav_open: 'Ouvrir le menu',
    nav_close: 'Fermer',

    // Hero
    hero_label: 'Salon de Thé · Bizerte',
    hero_tagline: 'Un bel endroit pour boire un bon café et passer un moment agréable.',
    hero_cta_menu: 'Découvrir le Menu',
    hero_cta_contact: 'Nous Contacter',

    // Our Story
    story_label: 'Notre Histoire',
    story_title: 'Bienvenue chez Donatello Bizerte',
    story_p1: 'Donatello est un salon de thé chaleureux avec une belle ambiance vintage. Un endroit parfait pour se détendre, boire un bon café et passer un bon moment.',
    story_p2: 'Découvrez notre décoration rétro avec des tables en bois, des fauteuils confortables et de beaux objets anciens qui donnent un charme unique à notre café.',
    story_tags: ["Café d'Exception", 'Ouvert dès 7h', 'Musique & Ambiance', 'Décor Vintage', 'Terrasse Ensoleillée'],

    // Home — Menu teaser
    specials_label: 'Nos Spécialités',
    specials_title: 'Notre Menu',
    specials_desc: 'Découvrez nos bons cafés, nos boissons fraîches et nos plats délicieux.',
    specials_cta: 'Voir le Menu Complet',

    // Reviews
    reviews_label: 'Avis Clients',
    reviews_title: 'Avis de nos clients',
    reviews: [
      { text: "Excellent café ! Musique et paix. Un endroit parfait pour se détendre et profiter d'un moment de tranquillité absolue.", author: 'NaNa G.' },
      { text: "L'ambiance est incroyable — le décor vintage, la musique, l'accueil chaleureux. Un vrai coup de cœur à Bizerte.", author: 'Moez Z.' },
      { text: 'Le brunch est un festin pour les yeux et le palais. Les mojitos aux fruits sont absolument spectaculaires !', author: 'Sarah M.' },
    ],

    // Contact
    contact_label: 'Où nous trouver',
    contact_title: 'Contact',
    contact_address: 'Adresse',
    contact_address_val: 'Bizerte, Tunisie',
    contact_hours: 'Horaires',
    contact_hours_val: 'Tous les jours : 7h00 — Tard le soir',
    contact_phone: 'Téléphone',
    contact_map_title: 'Donatello sur Google Maps',

    // Menu page
    menu_label: 'La Carte',
    menu_title_prefix: 'Menu',
    menu_title_suffix: 'Donatello',
    menu_loading: 'Chargement…',
    menu_error: 'Impossible de charger le menu.',
    menu_close: 'Fermer',
    menu_all: 'Tous',
    menu_details: 'Détails',

    // Footer
    footer_desc: 'Un bel endroit à Bizerte pour passer un moment agréable et boire un bon café.',
    footer_nav: 'Navigation',
    footer_hours: 'Horaires',
    footer_hours_val: 'Lun – Dim : 7h – 23h',
    footer_rights: '© 2025 Donatello · Tous droits réservés',
  },

  en: {
    // Header nav
    nav_about: 'About',
    nav_menu: 'Menu',
    nav_reviews: 'Reviews',
    nav_contact: 'Contact',
    nav_call: 'Call Us',
    nav_open: 'Open menu',
    nav_close: 'Close',

    // Hero
    hero_label: 'Tea Room · Bizerte',
    hero_tagline: 'A great place to enjoy a good coffee and spend a pleasant moment.',
    hero_cta_menu: 'See Our Menu',
    hero_cta_contact: 'Contact Us',

    // Our Story
    story_label: 'Our Story',
    story_title: 'Welcome to Donatello Bizerte',
    story_p1: 'Donatello is a warm tea room with a beautiful vintage atmosphere. A perfect place to relax, enjoy a good coffee and have a great time.',
    story_p2: 'Discover our retro decor with wooden tables, comfortable armchairs and beautiful antique objects that give a unique charm to our café.',
    story_tags: ['Premium Coffee', 'Open from 7am', 'Music & Vibes', 'Vintage Decor', 'Sunny Terrace'],

    // Home — Menu teaser
    specials_label: 'Our Specialties',
    specials_title: 'Our Menu',
    specials_desc: 'Discover our great coffees, fresh drinks and delicious dishes.',
    specials_cta: 'View Full Menu',

    // Reviews
    reviews_label: 'Customer Reviews',
    reviews_title: 'What our customers say',
    reviews: [
      { text: 'Excellent café! Music and peace. A perfect place to relax and enjoy a moment of absolute tranquility.', author: 'NaNa G.' },
      { text: 'The atmosphere is incredible — the vintage decor, the music, the warm welcome. A real gem in Bizerte.', author: 'Moez Z.' },
      { text: 'Brunch is a feast for the eyes and the palate. The fruit mojitos are absolutely spectacular!', author: 'Sarah M.' },
    ],

    // Contact
    contact_label: 'Find Us',
    contact_title: 'Contact',
    contact_address: 'Address',
    contact_address_val: 'Bizerte, Tunisia',
    contact_hours: 'Opening Hours',
    contact_hours_val: 'Every day: 7:00am — Late night',
    contact_phone: 'Phone',
    contact_map_title: 'Donatello on Google Maps',

    // Menu page
    menu_label: 'The Menu',
    menu_title_prefix: 'Menu',
    menu_title_suffix: 'Donatello',
    menu_loading: 'Loading…',
    menu_error: 'Unable to load the menu.',
    menu_close: 'Close',
    menu_all: 'All',
    menu_details: 'Details',

    // Footer
    footer_desc: 'A great place in Bizerte to spend a pleasant moment and enjoy a good coffee.',
    footer_nav: 'Navigation',
    footer_hours: 'Opening Hours',
    footer_hours_val: 'Mon – Sun: 7am – 11pm',
    footer_rights: '© 2025 Donatello · All rights reserved',
  },
} as const;

export type TranslationKey = keyof typeof t.fr;
