import React from "react";
import HeaderLineBackground from "../../../../components/ui/headerLineBackgrund/headerLineBackground";
import ContentTrackBackTo from "./content";

import {jsonLDTrackBackToPage} from "../../../../data/seoData";
import {metaDataTrackBackToPage} from "../../../../data/metaData";

export const metadata = metaDataTrackBackToPage;

const PageBackTo = () => {
    return (
        <section>
            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLDTrackBackToPage)}}/>
            <HeaderLineBackground display={true}/>
            <ContentTrackBackTo/>
        </section>
    );
};

export default PageBackTo;
