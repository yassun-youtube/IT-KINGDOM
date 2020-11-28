import Link from "next/link";
import React from "react";
import { SupportLayout } from "src/layouts/support";

export default function TermsPage(): JSX.Element {
  return (
    <SupportLayout page="利用規約" styled>
      <h1>利用規約</h1>
      <p>
        この利用規約（以下「本規約」といいます）は、しまぶー（@shimabu_it）（以下「当サービス提供者」とします）が提供するオンラインサロン、またはオンラインサロンにて提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って、本サービスをご利用いただきます。
      </p>

      <h2>第１条 適用</h2>
      <ol>
        <li>
          本規約は、ユーザーと当サービス提供者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
        </li>
        <li>
          当サービス提供者は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
        </li>
        <li>
          本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めがない限り、個別規定の規定が優先されるものとします。
        </li>
      </ol>

      <h2>第２条 利用登録</h2>
      <ol>
        <li>
          本サービスにおいては、登録希望者が本規約に同意の上、当サービス提供者の定める方法によって利用登録を申請し、利用登録が完了するものとします。
        </li>
        <li>
          当サービス提供者は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
        </li>
        <ol>
          <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
          <li>本規約に違反したことがある者からの申請である場合</li>
          <li>その他、当サービス提供者が利用登録を相当でないと判断した場合</li>
          <li>
            反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると判断した場合
          </li>
        </ol>
      </ol>

      <h2>第３条 ユーザーIDおよびパスワードの管理</h2>
      <ol>
        <li>ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
        <li>
          ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当サービス提供者は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
        </li>
        <li>
          ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当サービス提供者に故意又は重大な過失がある場合を除き、当サービス提供者は一切の責任を負わないものとします。
        </li>
      </ol>

      <h2>第４条 利用料金および支払方法</h2>
      <ol>
        <li>
          ユーザーは、本サービスの有料部分の対価として、当サービス提供者が別途定め、本ウェブサイトに表示する利用料金を、当サービス提供者が指定する方法により支払うものとします。
        </li>
        <li>
          会員が利用料金の支払を遅滞した場合には、当サービス提供者が指定する支払方法にて当該金額を支払うものとします。
        </li>
        <li>
          当サービス提供者は、当サービス提供者の責めに帰すべき事由に基づく不当利得が生じた場合を除き、ユーザーから既に受領した利用料金の返還義務を負わないものとします。
        </li>
      </ol>

      <h2>第５条 禁止事項</h2>
      <ol>
        <li>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</li>
        <ol>
          <li>法令または公序良俗に違反する行為 犯罪行為に関連する行為</li>
          <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
          <li>
            当サービス提供者、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
          </li>
          <li>本サービスによって得られた情報を商業的に利用する行為</li>
          <li>当サービス提供者のサービスの運営を妨害するおそれのある行為</li>
          <li>不正アクセスや不正アクセスを試みる行為 </li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>不正な目的を持って本サービスを利用する行為</li>
          <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
          <li>他のユーザーに成りすます行為</li>
          <li>当サービス提供者が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
          <li>面識のない異性との出会いを目的とした行為</li>
          <li>当サービス提供者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          <li>当サービス提供者または本サービスの名誉または信用を毀損する行為</li>
          <li>その他、当サービス提供者が不適切と判断する行為</li>
        </ol>
        <li>
          ユーザーが前項各号または本規約のその他の条項に違反し、これにより当サービス提供者に損害が生じた場合、ユーザーは、当サービス提供者に対し、当該損害を賠償するものとします。
        </li>
      </ol>

      <h2>第６条 本サービスの提供の停止等</h2>
      <ol>
        <li>
          当サービス提供者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
        </li>
        <ol>
          <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
          <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
          <li>コンピュータまたは通信回線等が事故により停止した場合</li>
          <li>その他、当サービス提供者が本サービスの提供が困難と判断した場合</li>
        </ol>
        <li>
          当サービス提供者は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
        </li>
      </ol>

      <h2>第７条 利用制限および登録抹消</h2>
      <ol>
        <li>
          当サービス提供者は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
        </li>
        <ol>
          <li>本規約のいずれかの条項に違反した場合</li>
          <li>登録事項に虚偽の事実があることが判明した場合</li>
          <li>料金等の支払債務の不履行があった場合</li>
          <li>当サービス提供者からの連絡に対し、一定期間返答がない場合</li>
          <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
          <li>その他、当サービス提供者が本サービスの利用を適当でないと判断した場合</li>
        </ol>
        <li>
          当サービス提供者は、本条に基づき当サービス提供者が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
        </li>
      </ol>

      <h2>第８条 退会</h2>
      <ol>
        <li>ユーザーは、当サービス提供者の定める退会手続により、本サービスから退会できるものとします。</li>
        <li>
          ユーザーが退会した場合であっても、ユーザーは、退会理由を問わず、既に支払った利用料金の支払義務を免れないものとします。
        </li>
        <li>
          当サービス提供者は、ユーザーからのお問い合わせの対応のために、ユーザーの退会後も最低3ヶ月は該当ユーザーの情報を保持します。それ以降は当サービス提供者の任意のタイミングでユーザー情報を完全に抹消します。ユーザー情報の抹消後はお問い合わせを受け付けられませんので、ご注意ください。
        </li>
      </ol>

      <h2>第９条 保証の否認および免責事項</h2>
      <ol>
        <li>
          当サービス提供者は、以下に掲げる事項について一切保証しないものとします。会員は、本サービスの利用及び本サービスにより提供される情報の有用性等を自己の判断、かつ責任で利用するものとします。
        </li>
        <ol>
          <li>
            発信情報及び配信コンテンツの内容を含む、本サービスで提供される全ての情報（本サービスから提供される情報及び本サービス上に表示される第三者が管理又は運営するリンク先に含まれる一切の情報等を含みます。以下、本項において同様とします。）に関する、有用性、適合性、完全性、正確性、信頼性、安全性、合法性、道徳性、最新性
          </li>
          <li>会員間のやりとりに関する一切の事項</li>
          <li>本サービスの提供に不具合、エラーや障害が生じないこと</li>
          <li>本サービス及び各オンラインサロンの存続又は同一性が維持されること</li>
          <li>本サービスがユーザーに対し特定の効能、結果等をもたらすこと</li>
        </ol>
        <li>
          当サービス提供者は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当サービス提供者とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
        </li>
        <li>
          前項ただし書に定める場合であっても、当サービス提供者は、当サービス提供者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当サービス提供者またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当サービス提供者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
        </li>
        <li>
          当サービス提供者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
        </li>
      </ol>

      <h2>第１０条 サービス内容の変更等</h2>
      <p>
        当サービス提供者は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
      </p>

      <h2>第１１条 利用規約の変更</h2>
      <p>
        当サービス提供者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなし、変更後の規約が、当サービス提供者と当該ユーザーとの法律関係にただちに適用されるものとします。
      </p>

      <h2>第１２条 個人情報の取扱い</h2>
      <p>
        当サービス提供者は、本サービスの利用によって取得する個人情報については、「
        <Link href="/support/privacy-policy">
          <a>プライバシーポリシー</a>
        </Link>
        」に従い適切に取り扱うものとします。
      </p>

      <h2>第１３条 通知または連絡</h2>
      <p>
        ユーザーと当サービス提供者との間の通知または連絡は、当サービス提供者の定める方法によって行うものとします。当サービス提供者は、ユーザーから、当サービス提供者が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
      </p>

      <h2>第１４条 権利義務の譲渡の禁止</h2>
      <p>
        ユーザーは、当サービス提供者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
      </p>

      <h2>第１５条 準拠法・裁判管轄</h2>
      <ol>
        <li>本規約は、日本法に従って解釈されます。</li>
        <li>
          当サービス提供者とユーザーとの紛争については、日本法を準拠法とし、訴額に応じて東京簡易裁判所又は東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </li>
      </ol>

      <time>2020年10月15日 制定</time>
    </SupportLayout>
  );
}
