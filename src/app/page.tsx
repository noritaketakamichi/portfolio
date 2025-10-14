import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Intro Section */}
      <section id="intro" className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2">髙道 範武</h1>
              <p className="text-2xl lg:text-3xl text-gray-600">Takamichi Noritake</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              AIをこよなく愛する<br />プロダクトマネージャ
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AIをこよなく愛するプロダクトマネージャ。<br />
              B2B SaaS、中でもvertical SaaSが得意です。DXの構想策定からなんでもお任せください。<br />
              AIに関するYoutubeでの発信もしています。
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-200">
              <Image
                src="/images/drawingSelfie.PNG"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-video bg-gray-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RFLhSy2rxxk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">YouTube出演</h3>
                <p className="text-gray-700 mb-4">
                  以前通っていたコーディングブートキャンプのCode ChrysalisのYoutubeに出演させていただきました
                </p>
                <a
                  href="https://www.youtube.com/watch?v=RFLhSy2rxxk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  動画を見る
                </a>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <Image
                  src="https://assets.st-note.com/production/uploads/images/217256158/rectangle_large_type_2_97a863856b96bf3f9beccd2ada275d46.png?width=2000&height=2000&fit=bounds&quality=85"
                  alt="Note記事のサムネイル"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Note掲載</h3>
                <p className="text-gray-700 mb-4">
                  ライフストーリーメディアのPopcornに掲載いただきました
                </p>
                <a
                  href="https://note.com/hajikeru/n/n0d5f92626aa0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  記事を読む
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section id="sns" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            SNS
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { 
                name: 'YouTube', 
                url: 'https://www.youtube.com/@takamicchannel-ai', 
                icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
              },
              { 
                name: 'X', 
                url: 'https://x.com/norisuK1228', 
                icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
              },
              { 
                name: 'Facebook', 
                url: 'https://www.facebook.com/noritaket/', 
                icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
              },
              { 
                name: 'Instagram', 
                url: 'https://www.instagram.com/noritake_takamichi/', 
                icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
              },
              { 
                name: 'LinkedIn', 
                url: 'https://www.linkedin.com/in/noritaketakamichi/', 
                icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
              },
              { 
                name: 'GitHub', 
                url: 'https://github.com/noritaketakamichi', 
                icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="text-xl">
            <a
              href="mailto:nr.takamichi@gmail.com"
              className="hover:underline"
            >
              nr.takamichi@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}