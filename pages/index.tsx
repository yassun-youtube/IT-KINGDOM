import React from "react";
import Layout from "components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>チャンネル登録者4.7万人のエンジニアYouTuberがおくるITモノづくりサロン「IT KINGDOM 」</h1>
    <p>ババーンとかっこいい感じ</p>
    <button>入国手続きを行う</button>

    <hr />

    <h1>紹介VIDEO</h1>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/9XVuUr4DbNU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

    <hr />

    <h1>WHY（このWHYとかHOWとかの文言は変わる可能性大）</h1>
    <h2>最高のプロダクトを生み出す最強のコミュニティをつくりたい</h2>
    <p>
      私はこのサロンが、最先端で、優れたプロダクトを生み出すための最高の形だと信じています。
      みんなで最高のプロダクトを作ろう。
    </p>

    <h3>そのために私がやること</h3>
    <p>メンバーの戦闘力の強化。最高のプロダクトを作るコミュニティにできるよう最善を尽くします。</p>

    <h3>みんなにやってもらうこと</h3>
    <p>
      自分の戦闘力の強化。最高のプロダクトを作るために、日々研鑽していただきます。
      実際にプロダクト開発に参加しながら学んでいただきます。
      また学んだことは積極的にアウトプットを行い、コミュニティ全体をパワーアップさせてください。
    </p>

    <small>※ プログラミング学習の予定はなく、プロジェクトの動きや中の様子を見たいだけの方も入っていただけます。</small>
    <hr />

    <h1>HOW</h1>
    <h2>・みんなでプロダクト開発</h2>
    <p>
      私や周りの現役エンジニアが実際に新規事業のプロジェクトをたてます。
      プロジェクトはみんなが開発に参加できるように、GitHubを用いてコミュニティ内部限定のオープンソースで行います。
      みなさんには私や現役エンジニアと一緒にプロダクトの改善をしていっていってもらいます。
      コードを読んで勉強したり、実際に開発に参加してもらうことで実戦経験にもなります。
      プロダクトが完成したら実際にリリースして、世の中のユーザーに使ってもらいましょう。
    </p>

    <h2>・匿名で質問</h2>
    <p>
      Qastというサービスを使用します。Qastには匿名で質問を行う機能があります。
      何度も質問をするのは気が引ける、初歩的すぎて聞くのが恥ずかしいという方にも使っていただけます。
      また私だけではなく誰でも回答できます。回答することでポイントが溜まっていきます。
      自分が学ぶだけでなく、みんなで教え合い、コミュニティのナレッジを蓄えていきましょう。
    </p>

    <h2>・ブログの購読・執筆</h2>
    <p>
      Qastではブログを書くことも可能です。私のブログは当コミュニティ限定で読むことができます。
      私以外にも有名企業出身のエンジニアも学びになるブログを執筆予定です。
      フロントエンドだけではなくバックエンド・アプリエンジニア、後々は機械学習エンジニアも参加予定です。
      また誰でもブログは書くことができるので、学んだことを積極的にアウトプットしていきましょう。
      Qiitaだとたくさんの人に間違いを指摘されて怖いかもしれませんが、当コミュニティはみんなが優しく教えてくれます。
    </p>

    <h2>・ニュース配信</h2>
    <p>
      私の信念は「最高のプロダクトを生み出すコミュニティをつくること」です。
      優れたプロダクトを知るためには世の中の動向を知る必要があります。
      私が重要だと思ったニュースをコミュニティ内でシェアしたり、時事ネタを解説します。
      コメント欄で議論を行い、みんなでアイディアの精度を高めていきましょう。
    </p>

    <h2>・コミュニティ限定の勉強会</h2>
    <p>
      コミュニティのメンバーしか参加できないオフラインでの講座を考えています。
      フロントエンド・バックエンド・アプリ開発など講座内容は適宜考えていきます。
      プログラミング以外だと就活・転職活動講座も考えています。
      またコミュニティ内での交流はモチベーションの向上に繋がると考えており、
      プログラミングを一緒に勉強するもくもく会や、交流会も開催予定です。
      東京だけでなく各都市でも定期的に行いたいと考えています。
      <small>※1 コロナが落ち着いてから計画いたします。</small>
      <small>※2 オフラインでの講座は別途、費用がかかります。</small>
    </p>

    <h2>他にも色々考えています</h2>
    <p>
      ただプログラミングを学ぶだけのサロンではありません。
      最高のプロダクトを生み出すために、日々模索、そして進化していく必要があります。
      コミュニティのあり方をみんなと一緒に考え、みんなで成長させていくことが何よりも重要です。
      ここに書いてある以外にもおもしろいことは積極的に開催しましょう。
    </p>

    <hr />

    <h1>STEP UP</h1>
    <h2>1. 学習したての方（隊員〜什長）</h2>
    <p>
      プロジェクトにすぐ参加するのは難しいと思うので、まずはプログラミングの基礎知識を身につけましょう。
      （もちろんプロジェクトのコードはいつでも読むことはできます）。
      初心者向けの記事やGitHubを用いたプログラミング教材も用意する予定です。
      分からないところは過去にみんなが書いた記事からヒントを得たり、匿名で質問して助けてもらうことができます。
    </p>

    <h2>2. 基礎が分かってきた方（百人将〜千人将）</h2>
    <p>
      実際にプロジェクトの開発に参加しましょう。
      最初はコードが読めなかったり、何しているか分からなかったりするかと思います。
      ドキュメントはしっかり残す予定なので、ドキュメントを読みながら理解をしていって
      それでも分からない部分は質問して解決しましょう。 また定期的にコード解説の会を設ける予定です。
    </p>

    <h2>3. 開発ができるようになってきた方（二千人将〜五千人将）</h2>
    <p>
      どんどんコードを書いて、プロジェクトをリードしていってください。
      みんなが出すPR（プルリクエスト）をレビューしたり、コードをリファクタしたり、
      より良いプロダクトに育て上げていってください。 一緒に仕様を決めたり、タスクの割り振りなどもやりましょう。
    </p>

    <h2>4. 一通り経験してコミュニティをリードできる方（将軍、大将軍、側近）</h2>
    <p>一緒にIT KINGDOMの運営をしましょう。個別に連絡させていただきます。</p>

    <hr />

    <h1>WHO</h1>
    <h2>しまぶー（国王）</h2>
    <p>
      神戸大学経営学部卒。文系から独学でプログラミングを勉強し、新卒でヤフー株式会社に入社。
      新規事業部署でフロントエンドを担当した後に、知り合いづてで転職。フルリモートで働きながら様々な案件開発を行う。
      2019年に投資家から資金調達を行い起業。現在は新規のプロダクト開発に励んでいる。
    </p>

    <h3>まっつん（相国）</h3>
    <p>
      新卒でヤフーに入社し、決済の部署でインフラ・バックエンドを担当。現在は私と一緒に起業。
      当コミュニティではバックエンドの取りまとめを行う。
    </p>

    <h3>いっぽん（左丞相）</h3>
    <p>
      新卒でクックパッドに入社し、現在はITベンチャーで転職して勤務中。
      アプリ開発やフロントエンド・デザインに秀でており、当コミュニティでもその分野を担当。
    </p>

    <h3>やす（右丞相）</h3>
    <p>
      現役ヤフーエンジニア。幅広いエンジニアリング知識を持っている。
      聞けばだいたいの答えは返ってくるので、当コミュニティでは分野問わず幅広く担当する。
    </p>

    <h3>and more...</h3>
    <p>今後、六大将軍・三大天・魏火龍七師とか決めていきたい（キングダム好きすぎ）</p>

    <hr />

    <h1>MESSAGE</h1>

    <p>
      このサロンはただのプログラミングを教えるだけのサロンではありません。
      「最高のプロダクトを生み出す最強のコミュニティをつくりたい」という思いからできています。
      あくまで根底にあるのはモノづくりです。学んで終わりではなく実際にプロダクトをリリースしていきます。
      この思いに共感できる方、ワクワクする方に入っていただきたいと思います。
    </p>

    <p>
      私はこの信念の実現に向けて最強のコミュニティづくりに注力します。
      もちろんその中には「プログラミングスキルの向上」も最優先事項として含まれています。
      エンジニアを目指す方も多いかと思いますが、それはこのサロンも願っていることです。
      みなさんがIT企業に就職し、更にスキルアップして、より最高のプロダクトづくりができることを求めています。
      そのためのサポートは惜しみなく行う予定です。
    </p>

    <p>
      正直、このようなサロンは前例がないレベルの最先端な取り組みだと思っています。
      私自身うまく立ち回れるか不安ですが、そういった不安も一緒に楽しめる方に入っていただけると嬉しいです。
      個人の進化はもちろん、コミュニティの進化も目指して、一緒に最高のモノづくりをしましょう。
    </p>

    <hr />

    <h1>入国方法</h1>
    <h2>1. ログインを行う</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at
      voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?
    </p>

    <h2>2. PayPal登録を行う</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at
      voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?
    </p>

    <h2>3. PayPalでお支払いを行う</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at
      voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?
    </p>

    <h2>4. プロフィール登録を行いましょう</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at
      voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?
    </p>

    <h2>5. しまぶーから連絡が来ます。</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis temporibus ducimus dolorum animi at
      voluptate? Sit harum veniam quas? Repellendus alias libero similique quibusdam. Non quaerat eum ratione commodi?
    </p>

    <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
