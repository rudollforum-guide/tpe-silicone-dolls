import Image from "next/image";
import Link from "next/link";
import type { Model } from "@/data/models";

type ModelCardProps = {
  model: Model;
};

export function ModelCard({ model }: ModelCardProps) {
  const facts = [model.material, model.height, model.cup].filter(Boolean);

  return (
    <article className="model-card">
      <Link href={`/models/${model.slug}`} className="model-card__visual" aria-label={`View ${model.displayName}`}>
        <Image src={model.images[0]} alt={`${model.displayName} by ${model.brandName}`} fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw" />
      </Link>
      <div className="model-card__meta"><span>{model.brandName}</span><span>{model.category}</span></div>
      <h3><Link href={`/models/${model.slug}`}>{model.displayName}</Link></h3>
      {facts.length ? <p className="model-card__facts">{facts.join(" · ")}</p> : null}
      <Link className="text-link" href={`/models/${model.slug}`}>View model <span aria-hidden="true">↗</span></Link>
    </article>
  );
}
