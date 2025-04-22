import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function PageNotFound() {
  return (
    <div>
      <h1>
        <FormattedMessage id="pageNotFound" defaultMessage="404 Not Found" />
      </h1>
      {/* Translate the link text */}
      <Link to="/">
        <FormattedMessage id="homeLink" defaultMessage="Home" />
      </Link>
    </div>
  );
}
