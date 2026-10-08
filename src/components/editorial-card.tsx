import Link from "next/link";
import { VisualPlaceholder } from "@/components/visual-placeholder";

type EditorialCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  index?: string;
};

export function EditorialCard({ eyebrow, title, description, href, index }: EditorialCardProps) {
  return (
    <article className="editorial-card">
      <Link href={href} className="editorial-card__visual" aria-label={`Explore ${title}`}>
        <VisualPlaceholder label={`${title} placeholder`} />
      </Link>
      <div className="editorial-card__body">
        <div className="editorial-card__meta">
          <span>{eyebrow}</span>
          {index ? <span>{index}</span> : null}
        </div>
        <h3><Link href={href}>{title}</Link></h3>
        <p>{description}</p>
        <Link className="text-link" href={href}>Discover</Link>
      </div>
    </article>
  );
}
