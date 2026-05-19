import Link from "next/link";

export interface blogTypeDummy {
  id: number;
  title: string;
  body: string;
}

export default function BlogComponentDummy({ id, title, body }: blogTypeDummy) {
  return (
    <Link href={`/demo-route/blog/${id}`} className="flex items-center p-8">
      <div className="flex items-center p-8">
        <div className="py-8 px-4 mx-auto max-w-7xl h-screen lg:py-16 lg:px-6">
          <div className="bg-white w-96 p-4 border-2 border-gray-300 dark:border-gray-500 shadow-lg rounded-xl dark:bg-slate-700">
            <div>
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MTk1OTg4Njd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="image"
              />
            </div>
            <div className="capitalize text-purple-900 font-semibold my-4 bg-purple-200 w-fit px-3 rounded-lg">
              <p>{body}</p>
            </div>
            <div className="text-2xl font-bold my-2 dark:text-white">
              <h2>{title}</h2>
            </div>
            <div className="dark:text-gray-400">
              <p>
                Getting started with Tailwind CSS is easy: install it via npm,
                configure your settings, and start building responsive,
                utility-first designs with minimal custom CSS.
              </p>
            </div>
            <div className="flex items-cente">
              <div className="mt-4">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxibGFjayUyMG1hbnxlbnwwfDB8fHwxNzE5NjAxMzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="image"
                />
              </div>
              <div className="block mt-3.5">
                <div className="capitalize text-lg font-semibold pl-4 dark:text-white">
                  <h3>robert chunga</h3>
                </div>
                <div className="capitalize text-sm text-gray-400 pl-4">
                  <p>Sep 13, 2025 · 16 oke oke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}