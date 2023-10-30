

export const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-center bg-gray-200">
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white pt-2 text-3xl font-semibold tracking-[0.5em]">
            TODO
          </h1>
          <button>Moon</button>
        </div>
        <form className="flex gap-2 items-center bg-white rounded-md overflow-hidden p-3 mt-6 ">
          <span className="rounded-full border-2 w-6 h-6 inline-block mx-[0.5px]"></span>
          <input
            type="text"
            placeholder="Create a New ToDo"
            className="w-full outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-6">
        <article className="flex gap-4 py-4 px-4 border-b border-b-gray">
          <button className="inline-block w-5 h-5 rounded-full border-2"></button>
          <p className="text-gray-200 grow">
            Complete online JavaScript Curse in BluWeb
          </p>
          <button>X</button>
        </article>
        <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
          <button className="inline-block w-5 h-5 rounded-full border-2"></button>
          <p className="text-gray-200 grow">
            Complete online JavaScript Curse in BluWeb
          </p>
          <button>X</button>
        </article>
        <article className="flex gap-4 py-4 px-4 border-b border-b-gray">
          <button className="inline-block w-5 h-5 rounded-full border-2"></button>
          <p className="text-gray-200 grow">
            Complete online JavaScript Curse in BluWeb
          </p>
          <button>X</button>
        </article>
        <section className="p-4 flex justify-between">
          <span className="text-gray-400">5 Items Left</span>
          <button className="text-gray-400">Clear Completed</button>
        </section>
      </main>

      <section className="container mx-auto px-4 mt-6">
        <div className="flex justify-center gap-4 bg-white rounded-md p-2">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-400">Active</button>
          <button className="hover:text-blue-400">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag And Drop to reorder list</p>
    </div>
  );
};
