import React from 'react'
import ClientOwlCarousel from './ClientOwlCarousel';

const LearnMore = () => {
    const links = ['About', 'Blog', 'Something', 'TBD'];

    return (
        <>
            <h2 className="mt-4">Learn more</h2>
            <ClientOwlCarousel>
                {
                    links.map((link, index) => (
                        <div className="items" key={index}>
                            <div className="more-card">
                                <a className="text-decoration-none" href="#">{link}</a>
                            </div>
                        </div>
                    ))
                }
            </ClientOwlCarousel>
        </>
    )
}

export default LearnMore