import { MdInsertLink } from "react-icons/md";

export default function ProjectItem({
  image,
  heading,
  desc,
  githubLink,
  liveLink,
  githubText,
  linkLinkText,
  isScrollAble = false,
}) {
  return (
    <div className="border-tertiary bg-bg-secondary/50 nav-bar-1 flex flex-col overflow-hidden rounded-xl border p-4 shadow-md">
      <div className="flex flex-col gap-8 sm:flex-row">
          {/* ✅ Project Image */}
        <div className="relative w-full sm:w-96 aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={heading || "project image"}
            className={
              "w-full h-full object-cover object-center transition-transform duration-[1s] ease-in-out " +
              (isScrollAble ? "hover:-translate-y-[77.5%]" : "")
            }
          />
        </div>

        {/* ✅ Project Text */}
        <div className="flex flex-col gap-4">
          <h1 className="font-sen text-3xl sm:text-4xl text-white leading-tight">
            {heading}
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-white/80">
            {desc}
          </p>

          {/* ✅ Links Section */}
          <div className="flex flex-wrap gap-4 opacity-90">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base font-medium hover:text-primary transition"
            >
              <MdInsertLink className="text-2xl" />
              <span className="hidden sm:inline">{linkLinkText}</span>
              <span className="sm:hidden">Project-Report</span>
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium underline hover:text-primary transition"
            >
              <span className="hidden sm:inline">{githubText}</span>
              <span className="sm:hidden"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
