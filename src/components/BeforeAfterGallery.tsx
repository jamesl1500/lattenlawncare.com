import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { IconMapPin } from "@/components/icons";
import { serviceLabel, type GalleryProject } from "@/lib/gallery";

type BeforeAfterGalleryProps = {
  projects: GalleryProject[];
  headingLevel?: "h2" | "h3";
};

export default function BeforeAfterGallery({
  projects,
  headingLevel: Heading = "h3",
}: BeforeAfterGalleryProps) {
  const hasIllustrations = projects.some((project) => project.illustration);

  return (
    <>
      <div className="ba-gallery">
        {projects.map((project, index) => (
          <figure className="ba-card" key={project.slug}>
            <BeforeAfterSlider
              title={project.title}
              before={project.before}
              after={project.after}
              width={project.width}
              height={project.height}
              priority={index === 0}
            />
            <figcaption className="ba-card__caption">
              <span className="ba-card__meta">
                <span className="ba-card__service">{serviceLabel(project.service)}</span>
                <span className="ba-card__city">
                  <IconMapPin />
                  {project.city}
                </span>
              </span>
              <Heading className="ba-card__title">{project.title}</Heading>
              <p>{project.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      {hasIllustrations ? (
        <p className="ba-gallery__note">
          Illustrations shown. Real project photos from Lorain County yards are
          being added this season.
        </p>
      ) : null}
    </>
  );
}
