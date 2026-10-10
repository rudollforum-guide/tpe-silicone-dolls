import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

const earningOptions = [
  ["$1 spent", "1 point"],
  ["New account registration", "1,000 points"],
  ["Positive order review on Moon-Doll", "1,500 points"],
  ["Positive review of the same order on TDF / The Doll Forum", "1,500 points"],
] as const;

const redemptionExamples = [
  ["1,000 points", "$20"],
  ["1,500 points", "$30"],
  ["3,000 points", "$60"],
  ["5,000 points", "$100"],
] as const;

const vipLevels = [
  { level: "Lv.1", name: "Regular Member", benefit: "No separate VIP discount listed", featured: false },
  { level: "Lv.2", name: "VIP", benefit: "2% additional discount", featured: false },
  { level: "Lv.3", name: "Silver VIP", benefit: "5% additional discount", featured: true },
  { level: "Lv.4", name: "Gold VIP", benefit: "7% additional discount", featured: true },
  { level: "Lv.5", name: "Diamond VIP", benefit: "10% discount", featured: true },
] as const;

const milestones = ["€2,595.96", "€4,326.60", "€12,979.80", "€43,266.00"] as const;

const accountRules = [
  "Moon-Doll currently states that points do not have a fixed expiration date.",
  "Points are tied to the member account.",
  "Points cannot be transferred to another user.",
  "Points cannot be exchanged for cash.",
  "Point earning and redemption rules may change.",
  "Compatibility between VIP discounts, promotional discounts and coupon codes should be confirmed during checkout.",
] as const;

export function RewardsSection() {
  const { affiliate } = siteConfig;

  return (
    <section className="rewards-section" aria-labelledby="rewards-heading">
      <Container>
        <header className="rewards-header">
          <div>
            <p className="eyebrow">Moon-Doll rewards</p>
            <h2 id="rewards-heading">Points, perks &amp; VIP levels</h2>
          </div>
          <div className="rewards-header__copy">
            <p>Moon-Doll offers a loyalty program that rewards purchases and selected account activities with points, alongside a five-level VIP system with additional discounts.</p>
            <p className="rewards-note">Program terms and promotional earning rates may change. Always confirm the current offer in your Moon-Doll account before ordering.</p>
          </div>
        </header>

        <div className="rewards-overview">
          <article className="rewards-panel">
            <p className="rewards-index">01 / Earning</p>
            <h3>Earn points</h3>
            <div className="rewards-metric-grid">
              {earningOptions.map(([activity, points]) => (
                <div className="rewards-metric" key={activity}>
                  <span>{activity}</span>
                  <strong>{points}</strong>
                </div>
              ))}
            </div>
            <p className="rewards-panel__note">Moon-Doll may occasionally run promotions with increased earning rates, such as double-points events.</p>
          </article>

          <article className="rewards-panel rewards-panel--redemption">
            <p className="rewards-index">02 / Redemption</p>
            <h3>Use your points</h3>
            <div className="rewards-conversion" aria-label="50 points equals 1 dollar">
              <span><strong>50</strong> points</span>
              <b aria-hidden="true">=</b>
              <span><strong>$1</strong></span>
            </div>
            <div className="rewards-example-grid">
              {redemptionExamples.map(([points, value]) => (
                <div key={points}><span>{points}</span><strong>{value}</strong></div>
              ))}
            </div>
            <p>During checkout, eligible accumulated points may be offered as a way to reduce the amount payable.</p>
            <p className="rewards-panel__note">Moon-Doll may occasionally offer separate point-redemption promotions for discounts or products.</p>
          </article>
        </div>

        <article className="rewards-vip">
          <div className="rewards-subheading">
            <div><p className="rewards-index">03 / Membership</p><h3>Five VIP levels</h3></div>
            <p>Each level is presented as a progression within Moon-Doll&apos;s loyalty interface. Check your account for the benefits currently assigned to your tier.</p>
          </div>
          <ol className="vip-levels">
            {vipLevels.map((item) => (
              <li className={item.featured ? "vip-level vip-level--featured" : "vip-level"} key={item.level}>
                <span>{item.level}</span>
                <strong>{item.name}</strong>
                <p>{item.benefit}</p>
              </li>
            ))}
          </ol>
        </article>

        <div className="rewards-details">
          <article className="rewards-progression">
            <p className="rewards-index">04 / Account display</p>
            <h3>VIP progression</h3>
            <p>Moon-Doll&apos;s account interface also displays cumulative-consumption milestones associated with VIP progression.</p>
            <div className="rewards-milestones" aria-label="Currently observed cumulative-consumption values">
              {milestones.map((milestone) => <span key={milestone}>{milestone}</span>)}
            </div>
            <p className="rewards-panel__note">These are cumulative-consumption values, not product prices. Displayed currency or exact thresholds may vary with account, region or program changes. Check your own Moon-Doll Rewards panel for current values.</p>
          </article>

          <article className="rewards-rules">
            <p className="rewards-index">05 / Terms</p>
            <h3>Points &amp; account rules</h3>
            <ul>{accountRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
          </article>
        </div>

        <div className="rewards-callout">
          <div>
            <p className="eyebrow">Your Moon-Doll account</p>
            <h3>Where to find your rewards</h3>
          </div>
          <div>
            <p>On Moon-Doll, open the Rewards control — the small gift-box / star-style button located near the lower-left corner of the website — to view your points, earning history and VIP status.</p>
            <p>Your account&apos;s Points Center shows point balances, earnings and redemptions. This independent site does not control Moon-Doll&apos;s Rewards interface.</p>
            <ButtonLink href={affiliate.url} external>View Moon-Doll rewards</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
