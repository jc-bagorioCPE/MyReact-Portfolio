export default function ProjectCard({ title, description }) {
    return (
      <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    );
  }
  