import styles from "src/components/faq/index.module.scss";
import { CONTACT_URL } from "src/constants";

const FAQs = [
  {
    label: "サロンの内容について",
    items: [
      {
        question: `どのような方が対象ですか？`,
        answer: `IT業界に興味のある方やプログラミングやデザインに興味のある方にオススメしております。ITを活用したプロダクトを実際にリリースするので、ITビジネスにご興味のある方にもオススメです。`,
      },
      {
        question: `プログラミング初心者ですが参加可能ですか？`,
        answer: `もちろん大歓迎です。初心者から経験者まで誰でもご参加いただけます。`,
      },
      {
        question: `参加したらプログラミングができるようになりますか？`,
        answer: `参加しただけでプログラミングができるようになるものではございません。自主学習と併用してご活用いただくことをオススメしています。当サロンでは「一人だとモチベーションが維持できない」「詰まったときに答えが見つからない」「実際にコードを書こうとすると分からなくなる」といったプログラミング学習における課題を解決できるための仕組みを用意しております。`,
      },
      {
        question: `IT企業に就職・転職できるようになりますか？`,
        answer: `必ずできるという約束はできかねますが、就職・転職活動もサポートしていく予定です。`,
      },
      {
        question: `なぜしまぶーさん以外に運営がいるのですか？`,
        answer: `サロンの人数が多くなると考え、そうなった場合に1人で運営を行うことが不可能だと判断したためです。また当サロンは実際にプロダクトを作るサロンで、私一人の開発では限界があります。私以上にプログラミング能力がある方を運営に招くことで、プロダクトの開発速度とクオリティをアップさせたいと考えました。`,
      },
      {
        question: `オフラインのイベントもありますか？`,
        answer: `新型コロナウイルス感染症が収まり次第、オフラインイベントも行う予定です。また東京に偏りすぎないように地方でも積極的にイベントを行います。`,
      },
      {
        question: `マンガ『キングダム』と関係ありますか？`,
        answer: `IT KINGDOMは原泰久先生の作品『キングダム』とは一切関係がない非公式のサービスです。オマージュとして設定を一部拝借しております。`,
      },
    ],
  },
  {
    label: "お支払いやアカウントについて",
    items: [
      {
        question: `どのような支払い方法がありますか？`,
        answer: `クレジットカードの他、Stripeが指定するお支払い方法をご利用いただけます。`,
      },
      {
        question: `入会後、初回料金はいつ決済されますか？`,
        answer: `入会手続き完了時に決済が行われます。`,
      },
      {
        question: `クレジットカード情報、登録メールアドレス、その他の情報を変更したいです`,
        answer: `ログイン後のマイページから変更可能です。`,
      },
      {
        question: `退会方法を教えてください`,
        answer: `ログイン後のマイページより退会手続きが行えます。`,
      },
      {
        question: `キャンセルしたいです`,
        answer: `申し訳ございませんが原則キャンセルは承っておりません。参加後に満足いただけなかった場合は退会をお願いしております。なお退会における返金は受け付けておりませんので、参加前に十分なご検討をお願いいたします。`,
      },
    ],
  },
];

export function Faq(): JSX.Element {
  return (
    <>
      <h1 className={styles.title}>よくある質問</h1>
      <ul>
        {FAQs.map(({ label, items }) => (
          <li key={label} className={styles.category}>
            <h2>{label}</h2>
            <ul>
              {items.map(({ question, answer }) => (
                <li key={question} className={styles.qa}>
                  <h3>{`Q ${question}`}</h3>
                  <p>{answer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        その他ご不明点がございましたら、
        <a target="_blank" rel="noopener noreferrer" href={CONTACT_URL}>
          お問い合わせ
        </a>
        よりご連絡ください。
      </p>
    </>
  );
}
