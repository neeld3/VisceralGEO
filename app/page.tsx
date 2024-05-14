import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center">
      <h1 className="text-4xl font-bold">
        Copy Copy That
      </h1>
      <p className="mt-8 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. <br />
        Vestibulum at sapien ac urna blandit lacinia. Curabitur posuere augue sed magna volutpat, <br />
        id mollis ex gravida. Sed quis leo nec lacus ullamcorper dignissim. Ut vestibulum metus <br />
        a tellus maximus, nec consequat neque pellentesque. Sed non odio eu mi consectetur congue. <br />
        Vivamus a libero nec sem commodo ultrices. Duis eget leo dignissim, efficitur nunc in, <br />
        laoreet libero. Proin sodales turpis at ex ullamcorper, ac mattis nisi tristique. <br />
        Integer suscipit turpis vel urna ultrices, vitae fermentum turpis posuere.
      </p>
    </main>
  );
}
