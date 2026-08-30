// Vercel serverless function to generate OpenGraph meta tags for social sharing
export default function handler(req, res) {
  const { type, id } = req.query;

  // Profile data (same as in React component)
  const arbitratorsData = {
    'iain-sharp': {
      name: 'Iain Sharp',
      title: 'FCIArb, FCIMArb',
      subtitle: 'Partner, Hill Dickinson Singapore',
      ogImage: '/og-images/ian-sharp.jpg',
      expertise: [
        'International Commercial Arbitration',
        'International Trade & Commodities',
        'Energy & Natural Resources'
      ]
    }
  };

  const successStoriesData = {
    'amanda-lee': {
      name: 'Amanda Lee',
      qualification: 'ACIMArb',
      ogImage: '/og-images/amanda-lee.jpg',
      story: {
        intro: "Amanda Lee's CIMA journey began with one lecture."
      }
    }
  };

  let profileData, profileUrl, pageTitle, pageDescription;

  if (type === 'arbitrator' && arbitratorsData[id]) {
    const profile = arbitratorsData[id];
    profileUrl = `https://www.thecima.org/arbitrator/${id}`;
    pageTitle = `${profile.name} - Global Arbitrator Spotlight | CIMA`;
    pageDescription = `${profile.name}, ${profile.title} - ${profile.subtitle}. ${profile.expertise.slice(0, 3).join(', ')}.`;
    profileData = profile;
  } else if (type === 'success-story' && successStoriesData[id]) {
    const story = successStoriesData[id];
    profileUrl = `https://www.thecima.org/success-story/${id}`;
    pageTitle = `${story.name} - Success Story | CIMA`;
    pageDescription = `${story.story.intro} Read how ${story.name} achieved ${story.qualification} certification through CIMA's professional training programs.`;
    profileData = story;
  } else {
    res.status(404).send('Profile not found');
    return;
  }

  const imageUrl = `https://www.thecima.org${profileData.ogImage}`;

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="${profileUrl}" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDescription}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${profileData.name}" />
    <meta property="og:site_name" content="CIMA - Center for International Mediators and Arbitrators" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${profileUrl}" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDescription}" />
    <meta name="twitter:image" content="${imageUrl}" />
  </head>
  <body>
    <!-- This page is for crawlers only -->
  </body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
}
