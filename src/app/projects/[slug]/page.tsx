import fs from 'fs';
import path from 'path';
import ProjectGalleryPageContent from '@/components/ProjectGalleryPageContent';

export async function generateStaticParams() {
  try {
    const dir = path.join(process.cwd(), 'public', 'project-galleries');
    if (!fs.existsSync(dir)) return [];
    
    const slugs = fs.readdirSync(dir);
    return slugs.map((slug) => ({
      slug,
    }));
  } catch (e) {
    console.error("Error generating static params", e);
    return [];
  }
}

export default async function ProjectGallery({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Handle both Next.js versions gracefully
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  
  // Format the name nicely (e.g. 3-plex-berri -> 3 plex berri -> 3 Plex Berri)
  const formatName = (s: string) => {
    // some special names don't format perfectly with simple capitalization, but this is a good default
    return s.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };
  const projectName = formatName(slug);

  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'project-galleries', slug);
    const files = fs.readdirSync(dir);
    // Sort numerically because files are named 1.jpg, 2.jpg, etc.
    files.sort((a, b) => parseInt(a) - parseInt(b));
    images = files.filter(f => f.endsWith('.jpg')).map(f => `/project-galleries/${slug}/${f}`);
  } catch (e) {
    console.error("Directory not found or no images for", slug);
  }

  return <ProjectGalleryPageContent projectName={projectName} images={images} />;
}
