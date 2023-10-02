import Image from 'next/image'

const page = () => {
  return (
    <div className="my-4 border-2 rounded-xl p-10 bg-white">

                <h2 className='text-left sm:mx-10 text-2xl font-bold'>AggieQuest
                    <div className="mt-4 text-sm">
                        <p className='proj_paragraph'> <b>Android</b> and <b>iOS</b> mobile <b>Flutter</b> application developed with a team of 6 individuals. The backend implementation consisted of a <b>NoSQL</b> Firebase backend.</p>
                        <p className='proj_paragraph'>It’s known that college students often struggle with mental health issues stemming from the combination of academic rigor and social expectations implicit to college life, leading to reductions in their academic performance and general well-being. AggieQuest is a mobile application that gives students an easy way to detach from all things academic. It will reduce anxiety, depression and improve academic performance among students.</p>
                        <p className='proj_paragraph'>The app utilizes a frontend techstack consisting of Flutter due to its cross-platform capabilities. And due to the project's demand of simplicity and scalability, Firebase was used for backend capabilities.</p>
                    </div>
                    <div className='flex-center flex-col md:flex-row gap-3 m-5'>
                        <Image
                            src="/images/AQ_map.jpg"
                            width={200}
                            height={200}
                            alt="Aggie Quest Image 1"
                            className="border-4 border-black rounded-lg"
                        />
                        <Image
                            src="/images/AQ_quest.jpg"
                            width={200}
                            height={200}
                            alt="Aggie Quest Image 1"
                            className="border-4 border-black rounded-lg"
                        />
                        <Image
                            src="/images/AQ_points.jpg"
                            width={200}
                            height={200}
                            alt="Aggie Quest Image 1"
                            className="border-4 border-black rounded-lg"
                        />
                    </div>

                </h2>
            </div>
  )
}

export default page