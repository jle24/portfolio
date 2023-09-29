import Image from 'next/image'

const page = () => {
  return (
    <section className='w-full flex-left flex-col'>
      <h1 className='head_text text-center'>Projects</h1>
      <div className="mt-4"></div>

      <h2 className='text-left sm:mx-10 text-lg font-bold'>AggieQuest
        <div className="mt-4"></div>

        <p className='font-normal indent-8'> <b>Android</b> and <b>iOS</b> mobile <b>Flutter</b> application developed with a team of 6 individuals. The backend implementation consisted of a <b>NoSQL</b> Firebase backend.</p>

        <div className="mt-1"></div>
        <p className='font-normal indent-8'>It’s known that college students often struggle with mental health issues stemming from the combination of academic rigor and social expectations implicit to college life, leading to reductions in their academic performance and general well-being. AggieQuest is a mobile application that gives students an easy way to detach from all things academic. It will reduce anxiety, depression and improve academic performance among students.</p>
        <div className="mt-1"></div>
        <p className='font-normal indent-8'>The app utilizes a frontend techstack consisting of Flutter due to its cross-platform capabilities. And due to the project's demand of simplicity and scalability, Firebase was used for backend capabilities.</p>
        <div className='flex-center flex-col sm:flex-row gap-3 m-5'>
            <Image
              src="/images/AQ_map.jpg"
              width={300}
              height={300}
              alt="Aggie Quest Image 1"
              className="border-4 border-black rounded-lg"
            />
            <Image
              src="/images/AQ_quest.jpg"
              width={300}
              height={300}
              alt="Aggie Quest Image 1"
              className="border-4 border-black rounded-lg"
            />
            <Image
              src="/images/AQ_points.jpg"
              width={300}
              height={300}
              alt="Aggie Quest Image 1"
              className="border-4 border-black rounded-lg"
            />
        </div>
      </h2>
      <div className="mt-4"></div>
    </section>
  )
}

export default page