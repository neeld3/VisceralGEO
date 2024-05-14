import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="mt-24">
        <h1 className="text-4xl font-bold text-center">Copy Copy That</h1>
        <p className="mt-8 text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          Vestibulum at sapien ac urna blandit lacinia. Curabitur posuere augue sed magna volutpat, 
          id mollis ex gravida. Sed quis leo nec lacus ullamcorper dignissim. Ut vestibulum metus 
          a tellus maximus, nec consequat neque pellentesque. Sed non odio eu mi consectetur congue. 
          Vivamus a libero nec sem commodo ultrices. Duis eget leo dignissim, efficitur nunc in, 
          laoreet libero. Proin sodales turpis at ex ullamcorper, ac mattis nisi tristique. 
          Integer suscipit turpis vel urna ultrices, vitae fermentum turpis posuere.
        </p>
      </div>
    </main>
  );
}
