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
        <h1 className="text-4xl font-bold text-center">Your Knowledge, Your Course, Your Profits</h1>
        <p className="mt-8 text-base">
          Are you an expert in some niche topic? If yes, you&apos;ve had the thought &quot;What if I could teach this for money?&quot; Then you looked into it a bit and said &quot;It&apos;s not worth the time and effort.&quot; From planning interactive and catered lessons to the interpersonal demands, it&apos;s a lot. <br /> <br />
          Or you might be a teacher who heard AI is coming for their job.<br /><br />
          We both know that there is much more intricacy and nuance to your craft than a machine can replicate.  But what if you could use this technology to your advantage? Ensuring your unique human touch and expertise remain irreplaceable.<br /><br />
          With CopyCopyThat you can share your expertise for what you&apos;re passionate about. Do it without the extra steps and still maintain that touch of personality. Condense your knowledge into a series of 10 lessons, and watch. The money starts to flow without another finger lifted.<br /><br />
          No more grappling with the complexities of other demanding alternatives. We&apos;ve got you covered. Whether you specialize in poetry or comedic writing, your expertise is in demand.  Craft your course, set your price, and leave the rest to us. Each course is drip-fed at the perfect pace to optimize learning and retention.<br /><br />
          Share your passions with the world, and watch the cash flow in. No hassle, no fuss, pure earning and satisfaction.
          Click the button below to begin your journey as an educator and money-maker!<br />
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
