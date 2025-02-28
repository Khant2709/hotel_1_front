import React from "react";

import ContentTrackCarPage from "./content";
import HeaderLineBackground from "../../../../components/ui/headerLineBackgrund/headerLineBackground";

import {jsonLDTrackCurPage} from "../../../../data/seoData";
import {metaDataTrackCarPage} from "../../../../data/metaData";

export const metadata = metaDataTrackCarPage;

const PageTrackCar = () => {

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLDTrackCurPage)}}/>
            <HeaderLineBackground display={true}/>
            <ContentTrackCarPage/>
        </main>
    );
};

export default PageTrackCar;
