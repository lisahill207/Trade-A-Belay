import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FooterNewsletter() {
  return (
    <div className="footer-newsletter">
      <p className="footer-newsletter-text">
        SIGN UP FOR OUR NEWSLETTER
        <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
  );
}
