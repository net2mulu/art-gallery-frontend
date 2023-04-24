import Isotope from "isotope-layout";
import Link from "next/link";

import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilterEight() {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".works-row", {
                itemSelector: ".masonry__item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry__item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 0);
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    },
        []
    );
    const activeBtn = (value) => (value === filterKey ? "active" : "");
    return (
        <>
            <div className="row justify-center">
                <div className="col-auto">
                    <div className="filter-button-group">
                        <button className={`button text-base mr-20 ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")} data-filter="*">All
                            Projects</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("e_commerce")} data-filter=".e_commerce">E-Commerce</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("digital_design")} data-filter=".digital_design">Digital
                            Design</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("web_design")} data-filter=".branding">Branding</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("branding")} data-filter=".web_design">Web
                            Design</button>
                    </div>
                </div>
            </div>
            <div className="works-row masonry -col-3  pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
                <div className="masonry__sizer" />
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Billboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Creative Science</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Air Plane</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/4.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Lewis Baker</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/5.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">AG. Avent</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/6.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Fortune Art</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/7.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Virtual Payment</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/8.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Good Food</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  digital_design web_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-64:55 hover-group overflow-hidden">
                            <img className="absolute-full-center h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/9.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Enterprice Silver</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};