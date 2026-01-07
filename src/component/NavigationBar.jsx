export default function NavigationBar() {

    return (
        <nav>
            <div className="fixed w-full justify-end text-2xl py-2 px-7 font-light bg-black hidden md:flex">
                <a className="w-15 text-center hover:font-semibold font-">Top</a>
                <a className="w-25 text-center hover:font-semibold">Projects</a>
                <a className="w-27 text-center hover:font-semibold">Contact</a>
            </div>
        </nav>
    )

}