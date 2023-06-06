import React from "react";
import { Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerHomepage.css";

const BannerHomepage = () => {
  return (
    <div className="banner">
      <Image className="banner__image-side float-start col-1 col-sm-3" src="/rectangle-129.png" alt="image banner 1" />
      <Image className="banner__image-side float-end col-1 col-sm-3" src="/rectangle-130.png" alt="image banner 2" />
      <Image className="banner__image-center col-11 col-sm-10 " src="/img-banner.png" alt="image banner 3" />
    </div>
  );
};

export default BannerHomepage;
