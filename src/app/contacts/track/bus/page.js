import React from "react";

import HeaderLineBackground from "../../../../components/ui/headerLineBackgrund/headerLineBackground";

import {jsonLDTrackBusPage} from "../../../../data/seoData";
import {metaDataTrackBusPage} from "../../../../data/metaData";
import ContentTrackBusPage from "./content";

export const metadata = metaDataTrackBusPage;

const PageTrackBus = () => {


    return (
        <section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLDTrackBusPage)}}/>
            <HeaderLineBackground display={true}/>
            <ContentTrackBusPage/>
        </section>
    );
};

export default PageTrackBus;
