import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "June 25, 2025",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Consectetur Adipiscing Elit",
      date: "June 20, 2025",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      category: "Innovation",
      readTime: "8 min read"
    },
    {
      title: "Sed Do Eiusmod Tempor",
      date: "June 15, 2025",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "Development",
      readTime: "6 min read"
    },
    {
      title: "Ut Labore Et Dolore Magna",
      date: "June 10, 2025",
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: "Research",
      readTime: "7 min read"
    },
    {
      title: "Quis Nostrud Exercitation",
      date: "June 5, 2025",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      category: "Industry",
      readTime: "4 min read"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Blog & Insights</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ 
              display: 'grid', 
              gap: '30px',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {blogPosts.map((post, index) => (
                <article key={index} className="card" style={{ 
                  display: 'grid',
                  gap: '15px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      background: 'var(--light-gray)',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '14px'
                    }}>{post.category}</span>
                    <span style={{ 
                      color: 'var(--dark-gray)',
                      fontSize: '14px'
                    }}>{post.date} • {post.readTime}</span>
                  </div>

                  <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
                    <a href="#" style={{ 
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}>
                      {post.title}
                    </a>
                  </h2>

                  <p style={{ color: 'var(--dark-gray)' }}>{post.excerpt}</p>

                  <div>
                    <a href="#" className="button secondary" style={{ 
                      padding: '8px 16px',
                      fontSize: '14px'
                    }}>Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Subscribe to Our Newsletter</h2>
            <p style={{ marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            
            <form style={{ 
              maxWidth: '500px', 
              margin: '0 auto',
              display: 'flex',
              gap: '15px'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
                required
              />
              <button type="submit" className="button">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
