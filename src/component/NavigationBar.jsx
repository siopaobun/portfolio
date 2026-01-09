export default function NavigationBar() {

    return (
        <>
            <div className="fixed hidden w-full md:flex md:gap-5 md:justify-end px-6 py-4 text-xl">
                <a className="hover:font-semibold">Top</a>
                <a className="hover:font-semibold">Projects</a>
                <a className="hover:font-semibold">Contact</a>
            </div>
        </>
    )

}