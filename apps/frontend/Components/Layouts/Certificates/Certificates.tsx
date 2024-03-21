import Section from "@/Components/Stateless/Section/Section";
import Gallery, { IGalleryItem } from "../Gallery/Gallery";

function Certificate({
  images,
  title,
}: {
  images: IGalleryItem[];
  title?: string;
}) {
  return (
    <Section>
      <Gallery title={title} images={images} />
    </Section>
  );
}

export default Certificate;
