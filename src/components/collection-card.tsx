import Image from "next/image";

type CollectionCardProps = {
  title: string;
  image: string;
  href: string;
};

export function CollectionCard({ title, image, href }: CollectionCardProps) {
  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer sponsored",
  } as const;

  return (
    <article className="collection-card">
      <a
        href={href}
        className="collection-card__visual"
        aria-label={`Explore the ${title} collection at Moon-Doll`}
        {...externalLinkProps}
      >
        <Image
          src={image}
          alt={`${title} collection`}
          fill
          sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) 50vw, 33vw"
        />
      </a>
      <div className="collection-card__body">
        <h3><a href={href} {...externalLinkProps}>{title}</a></h3>
        <a className="collection-card__link" href={href} {...externalLinkProps}>
          Explore collection
        </a>
      </div>
    </article>
  );
}
