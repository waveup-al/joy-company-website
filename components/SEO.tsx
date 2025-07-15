import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'Joy - Journey of You',
  description = 'Chuyên gia thương mại điện tử hàng đầu Việt Nam',
  keywords = 'Joy, thương mại điện tử, Amazon, TikTok Shop, Việt Nam, e-commerce',
  image = '/LOGO.png',
  url = 'https://waveup-al.github.io/joy-company-website',
  type = 'website'
}) => {
  const fullTitle = title.includes('Joy') ? title : `${title} | Joy - Journey of You`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Joy Vietnam" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="author" content="Joy Vietnam" />
      <meta name="language" content="Vietnamese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/LOGO.png" />
      <link rel="apple-touch-icon" href="/LOGO.png" />
    </Head>
  )
}

export default SEO