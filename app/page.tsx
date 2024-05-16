import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="mt-12 mx-auto max-w-lg">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRZ0K21YZN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TRZ0K21YZN');
            `,
          }}
        ></script>
        <Image
          src="/copyben.JPG"
          alt="CopyBen"
          width={500}
          height={300}
          className="mt-8 mx-auto"
        />
        <h1 className="text-4xl font-bold text-center">Copy Copy That</h1>
        <p className="mt-8 text-lg">
          Are you an expert in some niche topic? If yes, you&apos;ve had the thought "What if I could teach this for money?" Then you looked into it a bit and said "It&apos;s not worth the time and effort." From planning interactive and catered lessons to the interpersonal demands, it&apos;s a lot. <br /><br />
          Imagine a system where all YOU have to do is condense your knowledge into 10 PDF lessons and boom. Money in and no effort out.<br /><br />
          No more grappling with the complexities of teaching – we&apos;ve got you covered. Whether you&apos;re a chef, coder, or yoga instructor, your expertise is in demand. Craft your course, set your price, and leave the rest to us. Each course is drip-fed at the perfect pace to optimize learning and retention.<br /><br />
          Now watch the cash flow in. No hassle, no fuss, pure earning potential.<br />
        </p>
       <div className="mt-24">
        <button className="bg-white border border-black text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Start &apos;Teaching&apos; Now!
        </button>
      </div>
      </div>
    </main>
  );
}
