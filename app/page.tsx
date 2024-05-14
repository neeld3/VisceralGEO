import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="mt-24">
        <h1 className="text-4xl font-bold text-center">Copy Copy That</h1>
        <p className="mt-8 mx-12 text-lg text-center">
          Is there anything that you are passionate about sharing with the world? Do you dream of sharing your expertise and
          insights with others, but find yourself overwhelmed by the thought of creating something from scratch?
          
          Copy Copy That is a product designed to help you share your knowledge. 

          The idea is that your knowledge on a niche topic will be taken and condensed into a drip-learning format
          to create 10 easily digestible yet still informative lessons. <br />

          Sign Up Now!
        </p>
        <Image
          src="/copyben.JPG"
          alt="CopyBen"
          width={500}
          height={300}
          className="mt-8 mx-auto"
        />
      </div>
    </main>
  );
}
