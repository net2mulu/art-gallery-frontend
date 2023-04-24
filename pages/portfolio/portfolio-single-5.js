import Layout from '@/components/layout/Layout';
import Link from "next/link";
import * as Icon from 'react-feather';

export default function PortfolioSingle5() {
    return (
        <>
            <Layout footerLayout={11}>
                <div>
                    <section className="page-header -text -">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-xl-6 col-lg-9 col-md-10">
                                        <div>
                                            <h1 className="page-header__title lh-14">Video Design</h1>
                                        </div>
                                    </div>
                                    <div className="w-1/1" />
                                    <div className="col-xl-5 col-lg-9 col-md-10">
                                        <div className="px-20">
                                            <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg">
                        <div className="conainer-wide px-160 lg:px-80 md:px-40 sm:px-24">
                            <div className="ratio ratio-16:9 rounded-8">
                                <iframe
                                    src="https://www.youtube.com/embed/an5LH3K44ks"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                    className="video-full"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-40 justify-between">
                                <div className="col-xl-7 col-lg-7 col-md-10">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">We love to work with clients all over the world to develop unique, innovative and modern websites.</h2>
                                    </div>
                                    <p className="col-xl-9 px-0 mt-16">Dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia. Dicta sunt explicabo. Nemo enim ipsam voluptas aspernatur aut odit.</p>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-10">
                                    <div className="row x-gap-32 y-gap-40">
                                        <div className="col-6">
                                            <h5 className="text-xl fw-600">Client</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>Creative Layers</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="text-xl fw-600">Year</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>2023</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="text-xl fw-600">Sevices</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>Content Strategy</p>
                                                <p>Design</p>
                                                <p>Development</p>
                                                <p>Video Production</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="text-xl fw-600">Awards</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>Site of the Day</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-32">
                                <div className="col-lg-4">
                                    <img className="initial-img" src="/img/portfolio/single/5/1.jpg" alt="image" />
                                </div>
                                <div className="col-lg-8">
                                    <img className="initial-img" src="/img/portfolio/single/5/2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="layout-pb-lg">
                        <section>
                            <div className="container">
                                <div className="related-nav py-30">
                                    <div className="row justify-between items-center">
                                        <div className="col-md-auto col-6">
                                            <Link href="/portfolio/portfolio-single-3" className="related-nav__item -prev decoration-none">
                                                <div className="related-nav__arrow">
                                                    <Icon.ArrowLeft className="icon size-20 pt-4" />
                                                </div>
                                                <div className="related-nav__content">
                                                    <div className="text-xl fw-600">Prev</div>
                                                    <p className="text-dark mt-8">Avg Event Cart</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto md:d-none">
                                            <div className="related-nav__icon row y-gap-4 x-gap-4">
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-6 d-flex justify-end">
                                            <Link href="/portfolio/portfolio-single-4" className="related-nav__item -prev text-right decoration-none">
                                                <div className="related-nav__content">
                                                    <div className="text-xl fw-600">Next</div>
                                                    <p className="text-dark mt-8">Realy Art</p>
                                                </div>
                                                <div className="related-nav__arrow">
                                                    <Icon.ArrowRight className="icon size-20 pt-4" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="svg-shape">
                        <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                        </svg>
                    </div>
                </div>

            </Layout>

        </>
    )
}