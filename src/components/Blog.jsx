export default function Blog() {
  return (
    <div className="flex flex-col md:flex-row w-full mx-auto">
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
      <div className="w-full md:w-3/5 p-6 flex flex-col min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-8">
          Check out my blog posts.
        </h1>
      </div>
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
    </div>
  );
}
