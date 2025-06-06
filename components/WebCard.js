export default function WebCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white max-w-md mx-auto rounded-2xl shadow-xl p-6 mt-10 text-center space-y-3 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
      <p className="text-blue-600 text-lg font-medium">{data.role}</p>
      <p className="text-gray-700">{data.about}</p>

      <div className="flex justify-center gap-6 pt-4 text-sm text-blue-500">
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" className="hover:underline">
            LinkedIn
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" className="hover:underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
