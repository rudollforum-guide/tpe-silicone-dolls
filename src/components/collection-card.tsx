import Link from "next/link";
import { VisualPlaceholder } from "@/components/visual-placeholder";

type CollectionCardProps = {
  title: string;
  index: string;
};

export function CollectionCard({ title, index }: CollectionCardProps) {
  return (
    <article className="collection-card">
      <Link href="/categories" className="collection-card__visual" aria-label={`Explore ${title}`}>
        <VisualPlaceholder label={`${title} collection placeholder`} />
        <span className="collection-card__index">{index}</span>
      </Link>
      <div className="collection-card__body">
        <h3><Link href="/categories">{title}</Link></h3>
        <Link className="collection-card__link" href="/categories">
          Explore collection <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
