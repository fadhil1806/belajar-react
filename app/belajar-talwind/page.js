'use client'

export default function App() {
    const handleClick = () => {
        alert('Say Hello')

    }
    const menu = [
        {
            name: "Home"
        },
        {
            name: "Store"
        },
        {
            name: "Docs"
        },
        {
            name: "Contact"
        }
    ]
    return (
        <>
            <header className="bg-blue-600 h-20 flex items-center justify-center shadow-md">
                <p className="text-white text-2xl font-bold">Belajar Tailwind</p>
            </header>
            <section className="p-4 md:p-8">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1723903818490-6cb447ad1f05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                            alt="Descriptive Image"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-8 bg-gray-300 rounded-lg p-4 shadow-lg flex flex-col justify-center items-center">
                        <p className="text-lg font-semibold mb-4">Kolom 2</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleClick}>
                            Say Hello
                        </button>
                    </div>
                </div>
            </section>

            <header className="mt-10 flex justify-around border p-3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className=" fill-black dark:fill-white h-[30px] w-[30px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
                </div>
                <ul className="flex gap-4">
                    {menu.map(v => (<li key={v.name}>{v.name}</li>))}
                </ul>
            </header>
            <section className="flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1723821281511-bc0deb3851d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[500px] w-full">
                {/* <!-- Konten di sini --> */}
                <h1 className="text-white font-bold text-4xl border-4 p-4 border-blue-600 rounded-2xl">Build your next idea even faster.</h1>
            </section>

            <section className="grid grid-cols-12 p-4 gap-2">
                <div className="bg-blue-200 col-span-12 p-4 md:col-span-6 lg:col-span-3">
                    <p>Halo</p>
                </div>
                <div className="bg-blue-200 col-span-12 p-4 md:col-span-6 lg:col-span-3">
                    <p>Halo</p>
                </div>
                <div className="bg-blue-200 col-span-12 p-4 md:col-span-6 lg:col-span-3">
                    <p>Halo</p>
                </div>
                <div className="bg-blue-200 col-span-12 p-4 md:col-span-6 lg:col-span-3">
                    <p>Halo</p>
                </div>
            </section>
        </>
    )
}
