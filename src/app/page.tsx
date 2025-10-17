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
              ソフトウェアの開発が大好きです。DXの構想策定から実装までなんでもお任せください。<br />
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

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            About
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                東北大学大学院修了後、ソフトウェアエンジニアとしてキャリアを開始。2年の開発経験を経て教育系SaaSのプロダクトマネージャへ転身し、入社直後にベトナムの開発拠点へ移住。
                日本・ベトナム・フィリピン・シンガポールからなる多国籍チームを横断し、課題発見から要件定義、設計・実装、リリース後の検証までを一気通貫でリード。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AIをこよなく愛し、AI情報を発信するYouTubeチャンネル「たかみっちゃんねる」を運営中。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                強みは現場の課題を構造化し、最小コストで最大効果を出す実装に落とし込むこと。実績としては、要件定義からプロトタイプ、本番導入まで一貫して支援した案件が10社以上あり。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                趣味はムエタイ。年間数試合に出場。
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Strong points Section */}
      <section id="strong-points" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Strong points
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">業務効率化・コスト削減の設計</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  現場の無駄や課題を構造化し、最小コストで最大効果を出す改善策を設計。影響範囲・コスト・リスクを可視化して投資判断しやすい選択肢を提示し、定量指標で効果測定まで設計します。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">DX推進においての一気通貫での支援</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  プロダクトマネージャとフルスタックエンジニアの二刀流経験を活かし、開発を一気通貫でリード。品質・速度・保守性のバランスをとり、段階的に価値を届けるリリース計画で小さく作って早く学ぶ開発プロセスを推進。<></>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">人手不足解決のAI活用</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  n8n、dify等のツールで、問い合わせ対応や資料作成など人がやらなくても良い作業を自動化。貴重な人材をより付加価値の高い営業・企画業務に集中させ、運用・保守を見据えた体制設計（人手介入ポイント／ガバナンス／ログ設計）で安心して導入できます。
                  <br />
                  世界中のAIの最新情報を常に追っていますので、なんでもお聞きください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I can support Section */}
      <section id="support" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            What I can support
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              何から手をつければ良いか分からずともとにかく前に進めたい方、要件が曖昧で仕様に落ちず関係者の合意形成に苦戦している状況、PoCやプロトタイプから本番運用へ移行したいケース、AI活用を具体的なユースケースに落とし込みたいご相談、海外拠点や外部ベンダーと連携しながら進めたいプロジェクトなど、ぜひお任せください。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              まずはお気軽にご相談ください。現状を丁寧にヒアリングし、最短距離の打ち手をご提案します。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">YouTube出演</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  以前通っていたコーディングブートキャンプのCode ChrysalisのYoutubeに出演させていただきました
                </p>
                <a
                  href="https://www.youtube.com/watch?v=RFLhSy2rxxk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors"
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
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Note掲載</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  ライフストーリーメディアのPopcornに掲載いただきました
                </p>
                <a
                  href="https://note.com/hajikeru/n/n0d5f92626aa0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors"
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