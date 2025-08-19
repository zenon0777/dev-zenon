"use client";
import { fadeIn, hoverScale, staggerContainer } from "@/app/components/motions";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  mediumUrl: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Applications with Next.js and TypeScript",
    excerpt:
      "Learn how to leverage Next.js and TypeScript to create robust, type-safe applications that scale.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    imageUrl: "/1.svg",
    mediumUrl: "https://zenon0777.medium.com//article-1",
    tags: ["Next.js", "TypeScript", "Web Development"],
  },
  {
    title: "Microservices Architecture with NestJS",
    excerpt:
      "A deep dive into building microservices using NestJS, including best practices and common pitfalls.",
    date: "Feb 28, 2024",
    readTime: "12 min read",
    imageUrl: "/1.svg",
    mediumUrl: "https://zenon0777.medium.com//article-2",
    tags: ["NestJS", "Microservices", "Backend"],
  },
  {
    title: "Modern State Management in React Applications",
    excerpt:
      "Exploring different state management solutions in React and when to use each one.",
    date: "Jan 20, 2024",
    readTime: "10 min read",
    imageUrl: "/1.svg",
    mediumUrl: "https://zenon0777.medium.com//article-3",
    tags: ["React", "State Management", "Frontend"],
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.a
      href={post.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      variants={fadeIn("up")}
      whileHover={hoverScale}
      className="block bg-gray-800/50 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-[#64ffda]/10"
    >
      <div className="relative">
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={200}
            height={200}
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-100 group-hover:text-[#64ffda] transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[#64ffda]/10 text-[#64ffda] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="blog"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="min-h-screen flex items-center px-6 py-20 max-w-6xl mx-auto"
    >
      <div className="w-full space-y-16">
        <motion.div variants={fadeIn("down")} className="text-center space-y-4">
          <h2 className="text-4xl font-bold flex items-center justify-center text-gray-100">
            <span className="text-[#64ffda] font-mono mr-4">04.</span>
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and technical insights through
            detailed articles. Follow my journey and learn from my experiences
            in software development.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up")} className="text-center">
          <a
            href="https://zenon0777.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300"
          >
            <span>View All Posts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
