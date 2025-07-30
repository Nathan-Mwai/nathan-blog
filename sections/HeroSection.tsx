const HeroSection = () => {
    return (
        <section className="bg-[url('/background.svg')] bg-cover bg-center h-screen">
            <div className={'flex-center flex-col w-full h-full text-center'}>
                <p className={'font-bold text-3xl md:text-4xl px-4 lg:text-5xl'}>Welcome to <span className={'text-brand'}>Codebase Journal</span></p>

                <p className={'my-3 font-semibold opacity-45'}>Where I write <span className={'text-brand'}>ideas</span> and <span className={'text-brand'}>projects</span> I’ve been working on <span className={'text-brand'}>!</span></p>
            </div>
        </section>
    )
}
export default HeroSection
