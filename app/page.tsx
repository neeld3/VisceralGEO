import Image from 'next/image';
import Head from 'next/head'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Head>
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
      </Head>
      
      <div className="mt-12 mx-auto max-w-lg">
        <Image
          src="/copyben.JPG"
          alt="CopyBen"
          width={500}
          height={300}
          className="mt-8 mx-auto"
        />
        <h1 className="text-4xl font-bold text-center">Copy Copy That</h1>
        <p className="mt-8 text-lg">
          Are you an expert in some niche topic? If yes, you&apos;ve had the thought &quot;What if I could teach this for money?&quot; Then you looked into it a bit and said &quot;It&apos;s not worth the time and effort.&quot; From planning interactive and catered lessons to the interpersonal demands, it&apos;s a lot. <br /><br />
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
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
        <ul className="list-disc space-y-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
        </ul>
      </div>
    </main>
  );
}
