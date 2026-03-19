import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'Rental Agreement Checker',
    description: 'AI-powered rental agreement analyzer for Australian tenancy laws. Upload your rental contract and get instant analysis using Claude AI with RAG-enhanced legal knowledge. Supports NSW, VIC, QLD, ACT and more.',
    techStack: ['HTML', 'Claude AI', 'RAG', 'LangChain', 'Python', 'FastAPI'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Rental-Agreement-Checker' }],
  },
  {
    title: 'QLoRA Fine-Tuning Gemma 2B',
    description: "Memory-efficient fine-tuning of Google's Gemma-2B using QLoRA. Train large LLMs on limited GPU resources using 4-bit quantization and LoRA adapters.",
    techStack: ['Python', 'QLoRA', 'Gemma-2B', 'Hugging Face', 'PEFT', 'PyTorch', 'BitsAndBytes'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/QLoRA-Fine-Tuning-of-Gemma-2B-on-English-Quotes-Dataset' }],
  },
  {
    title: 'QLoRA Fine-Tuning TinyLlama',
    description: 'Parameter-efficient fine-tuning of TinyLlama 1.1B Chat model using QLoRA (4-bit quantization + LoRA). A hands-on deep dive into modern LLM fine-tuning techniques.',
    techStack: ['Python', 'QLoRA', 'TinyLlama', 'PEFT', 'Hugging Face', 'PyTorch', 'LoRA'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/QLoRA-Fine-Tuning-TinyLlama' }],
  },
  {
    title: 'LLM to Neo4j Career Agent',
    description: 'AI agent that turns career queries into a Neo4j knowledge graph of roles, skills, and tools. Powered by Google Gemini + LangGraph.',
    techStack: ['Python', 'Google Gemini', 'LangGraph', 'Neo4j', 'LangChain', 'Knowledge Graphs'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/llm-to-neo4j' }],
  },
  {
    title: 'Tomato Leaf Disease Detection',
    description: 'Web app for detecting tomato leaf diseases using TinyVGG CNN. FastAPI backend + React frontend, containerized with Docker.',
    techStack: ['Python', 'TinyVGG', 'FastAPI', 'React', 'Docker', 'PyTorch', 'CNN'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Tomato-lef-detection' }],
  },
  {
    title: 'LangGraph Exploration',
    description: 'LangGraph AI workflows with conditional and looping graphs. Chroma vector DB + RAG pipelines for LLM-powered question answering over custom documents.',
    techStack: ['Python', 'LangGraph', 'LangChain', 'Chroma', 'RAG', 'Vector DB'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/LangGraph-Exploration' }],
  },
  {
    title: 'Pet Name Generator',
    description: "AI-powered app using LangChain, Streamlit, and GroqAPI to suggest creative pet names based on pet type and colour.",
    techStack: ['Python', 'LangChain', 'Streamlit', 'Groq API', 'LLM'],
    date: '2024',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Pet-name-Generator' }],
  },
  {
    title: 'Glioma Grading Analysis',
    description: 'ML analysis on glioma grading — IDH mutations, 1p/19q co-deletion and their effect on tumor classification and patient outcomes.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'scikit-learn', 'Statistical Analysis'],
    date: '2024',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Glioma-grading-analysis' }],
  },
  {
    title: 'Gamma-Hadron Classification',
    description: 'High-energy particle classification comparing SVM, Logistic Regression, Naive Bayes on real Cherenkov telescope physics data.',
    techStack: ['Python', 'scikit-learn', 'SVM', 'Logistic Regression', 'Naive Bayes', 'Pandas'],
    date: '2024',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Gamm-Hadron-classification' }],
  },
  {
    title: 'Online Shoppers Analysis',
    description: 'Analysis of 12,330 e-commerce sessions — bounce rates, exit rates, time-on-page — to identify key conversion drivers.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'scikit-learn', 'EDA'],
    date: '2024',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Online-shoppers-analysis' }],
  },
  {
    title: 'Hospital Management System',
    description: 'Full Python system for hospital admin — patient registration, appointments, billing built with clean OOP principles.',
    techStack: ['Python', 'OOP', 'File Handling', 'Data Structures'],
    date: '2024',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset/Hospital-Management-System' }],
  },
  {
    title: 'AI Portfolio',
    description: 'This portfolio! AI-powered chat with memoji avatar, WebGL fluid cursor, Framer Motion animations and Groq LLM backend.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Groq', 'WebGL'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/pradipbanset' }],
  },
];

interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);
  if (!projectData) return <div>Project details not available</div>;

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="text-sm text-neutral-500">{projectData.date}</div>
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span key={index} className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500">Links</h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Export metadata separately for card display
export const projectMeta = PROJECT_CONTENT.map(p => ({
  description: p.description,
  techStack: p.techStack,
}));

export const data = [
  { category: 'AI / RAG / Legal', title: 'Rental Agreement Checker', src: '', content: <ProjectContent project={{ title: 'Rental Agreement Checker' }} /> },
  { category: 'LLM Fine-Tuning', title: 'QLoRA Fine-Tuning Gemma 2B', src: '', content: <ProjectContent project={{ title: 'QLoRA Fine-Tuning Gemma 2B' }} /> },
  { category: 'LLM Fine-Tuning', title: 'QLoRA Fine-Tuning TinyLlama', src: '', content: <ProjectContent project={{ title: 'QLoRA Fine-Tuning TinyLlama' }} /> },
  { category: 'AI Agent / Knowledge Graph', title: 'LLM to Neo4j Career Agent', src: '', content: <ProjectContent project={{ title: 'LLM to Neo4j Career Agent' }} /> },
  { category: 'Computer Vision', title: 'Tomato Leaf Disease Detection', src: '', content: <ProjectContent project={{ title: 'Tomato Leaf Disease Detection' }} /> },
  { category: 'AI Workflows / RAG', title: 'LangGraph Exploration', src: '', content: <ProjectContent project={{ title: 'LangGraph Exploration' }} /> },
  { category: 'LLM App', title: 'Pet Name Generator', src: '', content: <ProjectContent project={{ title: 'Pet Name Generator' }} /> },
  { category: 'Medical Data Analysis', title: 'Glioma Grading Analysis', src: '', content: <ProjectContent project={{ title: 'Glioma Grading Analysis' }} /> },
  { category: 'Machine Learning', title: 'Gamma-Hadron Classification', src: '', content: <ProjectContent project={{ title: 'Gamma-Hadron Classification' }} /> },
  { category: 'Data Analysis', title: 'Online Shoppers Analysis', src: '', content: <ProjectContent project={{ title: 'Online Shoppers Analysis' }} /> },
  { category: 'Python / OOP', title: 'Hospital Management System', src: '', content: <ProjectContent project={{ title: 'Hospital Management System' }} /> },
  { category: 'AI / Next.js', title: 'AI Portfolio', src: '', content: <ProjectContent project={{ title: 'AI Portfolio' }} /> },
];