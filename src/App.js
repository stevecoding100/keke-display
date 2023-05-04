import Contact from "./assets/contact.png";
import Employement from "./assets/employement.png";
import HeroPage from "./assets/heropage.png";
import Location from "./assets/location.png";
import Menu from "./assets/menu.png";
function App() {
    return (
        <div>
            <h1 className="text-center text-xl lg:text-2xl mt-10 font-bold">
                Keke Breakfast Old Designs Gallery
            </h1>
            <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-2 w-[90%] h-[90%] mx-auto gap-2 mt-12">
                <section>
                    <h2 className="text-lg lg:text-xl text-center mb-4 font-medium">
                        Contact Page
                    </h2>
                    <img src={Contact} alt="contact" className="rounded-md" />
                </section>
                <section>
                    <h2 className="text-lg lg:text-xl text-center mb-4 font-medium">
                        Empoloyement Page
                    </h2>
                    <img
                        src={Employement}
                        alt="contact"
                        className="rounded-md"
                    />
                </section>
                <section>
                    <h2 className="text-lg lg:text-xl text-center mb-4 font-medium">
                        Hero Page
                    </h2>
                    <img src={HeroPage} alt="heropage" className="rounded-md" />
                </section>
                <section>
                    <h2 className="text-lg lg:text-xl text-center mb-4 font-medium">
                        Location Page
                    </h2>
                    <img src={Location} alt="location" className="rounded-md" />
                </section>
                <section>
                    <h2 className="text-lg lg:text-xl text-center mb-4 font-medium">
                        Menu Page
                    </h2>
                    <img src={Menu} alt="menu" className="rounded-md" />
                </section>
            </div>
            <div className="flex items-center justify-center m-24">
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <a href="#">
                        Click Me
                        <br /> See Keke Redesign
                    </a>
                </button>
            </div>
        </div>
    );
}

export default App;
