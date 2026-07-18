import service from '../assets/images/service-image.png'
import memory from '../assets/images/memory-image.png'
import ecommerce from '../assets/images/ecommerce-image.png'
import dashboard from '../assets/images/dashboard-image.png'

function Projects() {
    return (
        <section className="project-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    Projects.
                </h2>

                <div className="row justify-content-center g-5">
                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img 
                                src={service}
                                alt="All-Colours Service Site Image"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    All-Colours.
                                </h3>
                                <p className="project-description mb-4">
                                    All-Colours is a local painting company site offering residential and commercial painting. Browse interior, exterior, and office painting services and book a consultation appointment.
                                </p>
                                <a href="https://illustrious-strudel-b067dd.netlify.app/" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img
                                src={memory}
                                alt="Memory Game"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    Order of Colours.
                                </h3>
                                <p className="project-description mb-4">
                                    Order of Colours is a Simon-says style memory game: watch the tiles light up, then repeat the sequence. Choose your grid size, speed, and colour palette.
                                </p>
                                <a href="https://jovial-manatee-09b9f2.netlify.app/" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img
                                src={ecommerce}
                                alt="E-commerce Store"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    PlantNature.
                                </h3>
                                <p className="project-description mb-4">
                                    PlantNature is an online plant shop with trees, flowers, food plants, and seeds. Filter by category and check growing details like light needs and season before adding to cart.
                                </p>
                                <a href="https://gorgeous-lolly-91fb9f.netlify.app/" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img
                                src={dashboard}
                                alt="Analytics Dashboard"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    Canadian Food Dashboard.
                                </h3>
                                <p className="project-description mb-4">
                                    A dashboard tracking 2025 Canadian retail food prices for items like apples, milk, and eggs, sourced from Statistics Canada. Compare one item across the year or all items in a single month.
                                </p>
                                <a href="https://sprightly-profiterole-1eb78b.netlify.app/" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects