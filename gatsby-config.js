module.exports = {
  siteMetadata: {
    title: `Montréal Photo Club 📷`,
    name: `MontrealPhotoClub`,
    siteUrl: `https://montrealphoto.club`,
    description: `Un rassemblement amical de photographes Montréalais.e.s de tous niveaux et horizons.`,
    hero: {
      heading: `Nous sommes un rassemblement amical de photographes et nous organisons des événements régulièrement à Montréal.`,
      dontmiss: `Ne ratez aucun événement à venir`,
      join: `Inscrivez vous gratuitement 👇`,
      maxWidth: 1080,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mtlphotoclub`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/montrealphotoclub`,
      },
      {
        name: `facebook`,
        url: `https://facebook.com/montrealphotoclub`,
      },
      {
        name: `github`,
        url: `https://github.com/montrealphotoclub`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: '0e60a8fc-0072-47db-91a2-0ac805f433c7',
        srcUrl: 'https://analytics.jpvalery.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://club.us12.list-manage.com/subscribe/post?u=82813799388b14db2174b8591&amp;id=428156c588", // add your MC list endpoint here; see plugin repo for instructions
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://montrealphoto.club`,
        sitemap:`https://montrealphoto.club/sitemap.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://fr.montrealphoto.club`,
        sitemap:`https://fr.montrealphoto.club/sitemap.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
  ],
};
