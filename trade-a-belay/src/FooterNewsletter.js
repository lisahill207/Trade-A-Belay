import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FooterNewsletter() {
  return (
    <div className="movement_footer_newsletter">
      <p className="movement_footer_newsletter_text">
        SIGN UP FOR OUR NEWSLETTER
        <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
  );
}
