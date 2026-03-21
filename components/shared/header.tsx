import React from 'react'

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <section className="bg-[#5EC8F2] dark:bg-[#1E3A5F] min-h-40 mt-16 flex items-center">
            <div className="container-wide w-full">
                <div className="animate-fade-in-up px-10">
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Header